import Link from "next/link";
import Image from "next/image";
import CryptoBackground from "@/components/CryptoBackground";
import { landingPageItems } from "@/data/landing";
import { getImagePath } from "@/lib/imagePath";
import fs from 'fs';
import path from 'path';

// Get logos dynamically from the logos folder
function getLogos() {
  const logosDirectory = path.join(process.cwd(), 'public/images/logos');
  const filenames = fs.readdirSync(logosDirectory);
  
  // Filter out non-image files and system files
  const logoFiles = filenames.filter(name => 
    !name.startsWith('.') && 
    (name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || 
     name.endsWith('.svg') || name.endsWith('.webp') || name.endsWith('.gif'))
  );
  
  return logoFiles.map(filename => getImagePath(`/images/logos/${filename}`));
}

export default function Home() {
  // Filter items by category
  const educationItems = landingPageItems.filter(item => item.category === 'Education');
  const partnershipsItems = landingPageItems.filter(item => item.category === 'Partnerships');
  const communityItems = landingPageItems.filter(item => item.category === 'Community');

  // Get logos dynamically from filesystem
  const logos = getLogos();

  // Dynamic grid columns based on number of logos
  const getGridCols = (count: number) => {
    if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
    if (count <= 3) return 'grid-cols-2 md:grid-cols-3';
    if (count <= 4) return 'grid-cols-2 md:grid-cols-4';
    return 'grid-cols-2 md:grid-cols-5';
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <CryptoBackground />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Aachen Blockchain Club
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-300">
            empowering Aachen, one block at a time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-center"
            >
              Upcoming Events
            </Link>
            <Link
              href="/team"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-600 hover:bg-purple-600/20 transition-all duration-300 text-center"
            >
              Meet the Team
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -top-32 sm:-top-48 -left-32 sm:-left-48 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-purple-400">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image
                src={getImagePath("/images/community.png")}
                alt="Community"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400 text-center">
              Community
            </h3>
            <p className="text-gray-300 text-sm sm:text-base text-center">
              Foster a community of students who are passionate about Blockchain 
              technology and provide a platform for them to connect and collaborate.
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image
                src={getImagePath("/images/partnerships.png")}
                alt="Partnerships"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400 text-center">
              Partnerships
            </h3>
            <p className="text-gray-300 text-sm sm:text-base text-center">
              Establish partnerships and connections with industry leaders in the 
              Blockchain and web3 space.
            </p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image
                src={getImagePath("/images/science.png")}
                alt="Education"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400 text-center">
              Education
            </h3>
            <p className="text-gray-300 text-sm sm:text-base text-center">
              Promote scientific development and educate students in the field of 
              Blockchain technology.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section - Full Width */}
      <div className="w-full aspect-[1920/540] overflow-hidden">
        <video
          className="w-full h-full object-fill"
          autoPlay
          muted
          loop
          preload="metadata"
          playsInline
        >
          <source src={getImagePath("/video/landing.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Our Activities Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Our Activities
        </h2>
        
        {/* Learn Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Learn</h3>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Learn what Blockchain is and how to use it through curated workshops and hands-on sessions with web3 experts.
          </p>
          <div className="relative">
            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? 'ml-0 mr-auto w-3/4' : 'ml-auto mr-0 w-3/4'
                } ${index === 1 ? '-mt-8' : 'mb-2'} ${index === 2 ? '-mt-6' : ''}`}
                style={{
                  transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  zIndex: educationItems.length - index,
                }}
              >
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={getImagePath(item.image)}
                        alt={item.description || 'Education Event'}
                        fill
                        className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                      />
                    </div>
                    {item.description && (
                      <div className="p-6">
                        <p className="text-gray-300 text-base">{item.description}</p>
                      </div>
                    )}
                  </a>
                ) : (
                  <div>
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={getImagePath(item.image)}
                        alt={item.description || 'Education Event'}
                        fill
                        className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                      />
                    </div>
                    {item.description && (
                      <div className="p-6">
                        <p className="text-gray-300 text-base">{item.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Industry Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Grow</h3>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Kick-start your career in blockchain by connecting with industry leaders and traveling to conferences around the world. Take part in hackathons to turn your startup ideas into reality.
          </p>
          <div className="relative">
            {partnershipsItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 1 ? 'ml-0 mr-auto w-3/4' : 'ml-auto mr-0 w-3/4'
                } ${index === 1 ? '-mt-10' : 'mb-2'} ${index === 2 ? '-mt-12' : ''}`}
                style={{
                  transform: index % 2 === 1 ? 'rotate(-2deg)' : 'rotate(1.5deg)',
                  zIndex: partnershipsItems.length - index,
                }}
              >
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={getImagePath(item.image)}
                        alt={item.description || 'Partnership Event'}
                        fill
                        className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                      />
                    </div>
                    {item.description && (
                      <div className="p-6">
                        <p className="text-gray-300 text-base">{item.description}</p>
                      </div>
                    )}
                  </a>
                ) : (
                  <div>
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={getImagePath(item.image)}
                        alt={item.description || 'Partnership Event'}
                        fill
                        className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                      />
                    </div>
                    {item.description && (
                      <div className="p-6">
                        <p className="text-gray-300 text-base">{item.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Connect</h3>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Join a community of like-minded students who share a passion for Blockchain. Connect with others, exchange ideas, grow together and of course have fun along the way!
          </p>
          <div className="relative">
            {communityItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? 'ml-0 mr-auto w-3/4' : 'ml-auto mr-0 w-3/4'
                } ${index === 1 ? '-mt-8' : 'mb-2'} ${index === 2 ? '-mt-10' : ''}`}
                style={{
                  transform: index % 2 === 0 ? 'rotate(0.5deg)' : 'rotate(-1.5deg)',
                  zIndex: communityItems.length - index,
                }}
              >
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={getImagePath(item.image)}
                        alt={item.description || 'Community Event'}
                        fill
                        className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                      />
                    </div>
                    {item.description && (
                      <div className="p-6">
                        <p className="text-gray-300 text-base">{item.description}</p>
                      </div>
                    )}
                  </a>
                ) : (
                  <div>
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={getImagePath(item.image)}
                        alt={item.description || 'Community Event'}
                        fill
                        className="object-cover group-hover:scale-[1.025] transition-transform duration-500"
                      />
                    </div>
                    {item.description && (
                      <div className="p-6">
                        <p className="text-gray-300 text-base">{item.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mt-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-purple-300">Ready to Start Your Blockchain Journey?</h3>
          <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Become part of Aachen&apos;s most active blockchain community and start your journey in web3.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-center"
            >
              View All Events
            </Link>
            <Link
              href="/milestones"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-purple-600 hover:bg-purple-600/20 transition-all duration-300 text-center"
            >
              Milestones
            </Link>
          </div>
        </div>

        {/* Patron Professor Section */}
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-purple-400">
            Meet Our Patron
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-64 h-64 flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={getImagePath("/images/prinz.jpeg")}
                  alt="Professor Prinz"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-purple-300">
                  Professor Dr. Wolfgang Prinz
                </h3>
                <p className="text-purple-200 mb-4 text-lg">
                  Deputy Director of Fraunhofer FIT
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Professor Wolfgang Prinz is Deputy Director of Fraunhofer FIT and Professor at RWTH Aachen University. 
                  As founding director of the Blockchain Reallabor, he drives real-world blockchain innovation, helping industry explore applications from product passports and IoT security to digital education credentials. 
                  Under his leadership, the Reallabor has developed over 25 prototypes, hosted major Web3 events and established professional training programs—making him a leading figure in bridging research and practice for blockchain adoption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Collaborations Section */}
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-purple-400">
            Partnering with Industry Leaders
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto text-lg">
            We&apos;ve had the privilege to collaborate and work with renowned experts and organizations
            in the blockchain space, bringing world-class knowledge to our community.
          </p>
          
          <div className="text-center mb-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Partner With Us
            </Link>
          </div>
          
          <div className={`grid ${getGridCols(logos.length)} gap-12 items-center justify-items-center`}>
            {logos.map((logoSrc, index) => (
              <div key={index} className="group">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto">
                  <Image
                    src={logoSrc}
                    alt="Partner Logo"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
