import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const title = formData.get('title') as string;
    const team = formData.get('team') as string;
    const linkedin = formData.get('linkedin') as string;
    const x = formData.get('x') as string;
    const github = formData.get('github') as string;
    const imageFile = formData.get('image') as File;

    if (!name || !team || !imageFile) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create filename from name
    const filename = `${name.toLowerCase().replace(/\s+/g, '-')}.png`;

    // Create new team member object for the code
    const newMember = {
      name,
      title,
      team,
      image: `/images/profiles/${filename}`,
      socialLinks: {
        ...(linkedin && { linkedin }),
        ...(x && { x }),
        ...(github && { github }),
      }
    };

    // Format the new member entry for team.ts
    const memberEntry = `  {
    name: '${name}',
    title: '${title}',
    team: '${team}',
    image: '/images/profiles/${filename}',${Object.keys(newMember.socialLinks).length > 0 ? `
    socialLinks: {${linkedin ? `
      linkedin: '${linkedin}'` : ''}${x ? `${linkedin ? ',' : ''}
      x: '${x}'` : ''}${github ? `${linkedin || x ? ',' : ''}
      github: '${github}'` : ''}
    }` : ''}
  },`;

    // Generate GitHub PR instructions
    const branchName = `add-team-member-${name.toLowerCase().replace(/\s+/g, '-')}`;
    const commitMessage = `Add team member: ${name}`;
    
    const prBody = `## New Team Member Submission

**Name:** ${name}
**Title:** ${title || 'N/A'}
**Team:** ${team}

### Social Links:
${linkedin ? `- LinkedIn: ${linkedin}` : ''}
${x ? `- X/Twitter: ${x}` : ''}
${github ? `- GitHub: ${github}` : ''}

This PR adds ${name} to the team page with their profile image and social links.

### Files Changed:
- \`public/images/profiles/${filename}\` (new profile image)
- \`src/data/team.ts\` (updated team data)

Generated from the team member submission form.`;

    // Create GitHub URLs for pre-filled PR creation
    const baseUrl = 'https://github.com/aachen-blockchain-club/website';
    
    // URL to edit team.ts file directly (will need to manually add the member entry)
    const editTeamFileUrl = `${baseUrl}/edit/main/src/data/team.ts`;
    
    // URL to upload new image file
    const uploadImageUrl = `${baseUrl}/upload/main/public/images/profiles`;
    
    // URL to create a new pull request with pre-filled title and body
    const createPRUrl = `${baseUrl}/compare/main...main?quick_pull=1&title=${encodeURIComponent(commitMessage)}&body=${encodeURIComponent(prBody)}`;
    
    // Alternative: Direct fork and create branch URL
    const forkUrl = `${baseUrl}/fork`;

    return NextResponse.json({ 
      success: true, 
      message: 'Team member data prepared! Use the quick links to create your GitHub PR.',
      instructions: {
        branchName,
        commitMessage,
        prBody,
        filename,
        memberEntry,
        editTeamFileUrl,
        uploadImageUrl,
        createPRUrl,
        forkUrl,
        imagePath: `public/images/profiles/${filename}`
      }
    });

  } catch (error) {
    console.error('Error processing team member submission:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}
