'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types/member';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type TeamOption = "board" | "advisory" | "team heads" | "member" | "alumni";

export default function NewTeamMemberPage() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    team: 'member' as TeamOption,
    linkedin: '',
    x: '',
    github: '',
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [prInstructions, setPrInstructions] = useState<any>(null);
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        // Reset crop when new image is loaded
        setCrop({
          unit: '%',
          width: 50,
          height: 50,
          x: 25,
          y: 25,
        });
        setCompletedCrop(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImage = (): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const canvas = canvasRef.current;
      const image = imageRef.current;
      
      if (!canvas || !image || !completedCrop) {
        reject(new Error('Missing canvas, image, or crop data'));
        return;
      }

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Set canvas to 620x620
      canvas.width = 620;
      canvas.height = 620;

      // Calculate the scale between displayed image and natural image size
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      // Draw the cropped area scaled to 620x620
      ctx.drawImage(
        image,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        620,
        620
      );

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Canvas toBlob failed'));
        }
      }, 'image/png');
    });
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    
    // Set initial crop to center square
    const size = Math.min(width, height);
    const x = (width - size) / 2;
    const y = (height - size) / 2;
    
    setCrop({
      unit: 'px',
      width: size,
      height: size,
      x: x,
      y: y,
    });
  };

  const downloadImage = () => {
    if (!imageBlob || !prInstructions) return;
    
    const url = URL.createObjectURL(imageBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = prInstructions.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openGitHubPR = () => {
    if (!prInstructions) return;
    
    const url = `https://github.com/aachen-blockchain-club/website/new/main`;
    window.open(url, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      title: '',
      team: 'member',
      linkedin: '',
      x: '',
      github: '',
    });
    setImageFile(null);
    setImagePreview(null);
    setCompletedCrop(null);
    setSubmitMessage('');
    setPrInstructions(null);
    setImageBlob(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      if (!imageFile) {
        setSubmitMessage('Please upload an image');
        setIsSubmitting(false);
        return;
      }

      if (!completedCrop) {
        setSubmitMessage('Please adjust the crop area for your image');
        setIsSubmitting(false);
        return;
      }

      // Get cropped and resized image to 620x620
      const croppedImageBlob = await getCroppedImage();
      
      // Create FormData
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('title', formData.title);
      submitData.append('team', formData.team);
      submitData.append('linkedin', formData.linkedin);
      submitData.append('x', formData.x);
      submitData.append('github', formData.github);
      
      const fileName = `${formData.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      submitData.append('image', croppedImageBlob, fileName);

      // Submit to API endpoint
      const response = await fetch('/api/team/submit', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitMessage(`Success! ${result.message}`);
        setPrInstructions(result.instructions);
        setImageBlob(croppedImageBlob);
        
        // Don't reset form yet - let user complete the PR first
      } else {
        const errorData = await response.json();
        if (errorData.error.includes('GitHub integration not configured')) {
          setSubmitMessage(`Configuration Error: ${errorData.error} Please contact the website administrator.`);
        } else {
          setSubmitMessage(`Error: ${errorData.error}`);
        }
      }
    } catch (error) {
      setSubmitMessage(`Error: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Join Our Team
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Fill out the form below to prepare your team member submission. You'll then create a GitHub pull request using your own account - no server tokens needed!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title/Position
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Developer, Community Manager, etc."
                  className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="team" className="block text-sm font-medium mb-2">
                  Team *
                </label>
                <select
                  id="team"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                >
                  <option value="member">Member</option>
                  <option value="team heads">Team Head</option>
                  <option value="board">Board Member</option>
                  <option value="advisory">Advisory Board</option>
                  <option value="alumni">Alumni</option>
                </select>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Social Links</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourname"
                  className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="x" className="block text-sm font-medium mb-2">
                  X (Twitter) URL
                </label>
                <input
                  type="url"
                  id="x"
                  name="x"
                  value={formData.x}
                  onChange={handleInputChange}
                  placeholder="https://x.com/yourhandle"
                  className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="github" className="block text-sm font-medium mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Profile Photo *</h2>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-2">
                Upload Photo (you'll be able to crop it to a square)
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                required
                className="w-full px-4 py-2 bg-black/20 border border-gray-600 rounded-lg focus:border-purple-400 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
            </div>

            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-300 mb-4">
                  Drag to adjust the crop area. The selected area will be resized to 620x620px:
                </p>
                <div className="max-w-md mx-auto mb-4">
                  <ReactCrop
                    crop={crop}
                    onChange={(newCrop) => setCrop(newCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={1}
                    minWidth={50}
                    minHeight={50}
                    className="max-w-full border border-gray-600 rounded-lg overflow-hidden"
                  >
                    <img
                      ref={imageRef}
                      src={imagePreview}
                      alt="Crop preview"
                      className="max-w-full h-auto"
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                </div>
                
                {completedCrop && (
                  <div className="text-center">
                    <p className="text-sm text-green-300 mb-2">
                      ✓ Crop area selected ({Math.round(completedCrop.width)} × {Math.round(completedCrop.height)} px)
                    </p>
                    <p className="text-xs text-gray-400">
                      This will be resized to 620 × 620 px for the final image
                    </p>
                  </div>
                )}
                
                <canvas
                  ref={canvasRef}
                  style={{ display: 'none' }}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !imageFile || !completedCrop}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Team Member Request'}
          </button>

          {submitMessage && (
            <div className={`p-4 rounded-lg ${submitMessage.includes('Success') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {submitMessage}
            </div>
          )}

          {prInstructions && (
            <div className="bg-blue-500/20 border border-blue-400 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">
                🚀 Create Your GitHub Pull Request
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Download Your Profile Image</h4>
                  <button
                    onClick={downloadImage}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors"
                  >
                    📸 Download {prInstructions.filename}
                  </button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Step 2: Copy Your Team Data</h4>
                  <div className="bg-black/30 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{prInstructions.memberEntry}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(prInstructions.memberEntry)}
                    className="mt-2 bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-sm transition-colors"
                  >
                    📋 Copy Code
                  </button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Step 3: Create Pull Request</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Click the button below to go to GitHub. You'll need to:
                  </p>
                  <ol className="text-sm text-gray-300 list-decimal list-inside space-y-1 mb-4">
                    <li>Upload your image to <code className="bg-black/30 px-1 rounded">public/images/profiles/</code></li>
                    <li>Edit <code className="bg-black/30 px-1 rounded">src/data/team.ts</code> and paste your code before the "Add more members here" comment</li>
                    <li>Create a pull request with the title: <code className="bg-black/30 px-1 rounded">{prInstructions.commitMessage}</code></li>
                  </ol>
                  
                  <button
                    onClick={openGitHubPR}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-medium transition-colors"
                  >
                    🚀 Open GitHub & Create PR
                  </button>
                </div>

                <div className="pt-4 border-t border-blue-400/30">
                  <button
                    onClick={resetForm}
                    className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    ↺ Submit Another Member
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
