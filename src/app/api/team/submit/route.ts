import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

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
    
    // Save image to public/images/profiles locally for reference
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const imagePath = join(process.cwd(), 'public', 'images', 'profiles', filename);
    
    // Ensure directory exists
    await mkdir(join(process.cwd(), 'public', 'images', 'profiles'), { recursive: true });
    await writeFile(imagePath, buffer);

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

### Instructions for completing this PR:

1. **Upload the profile image:**
   - Add the file \`${filename}\` to \`public/images/profiles/\`
   - Download the image from the form submission

2. **Update team data:**
   - Edit \`src/data/team.ts\`
   - Add this code before the \`// Add more members here\` comment:

\`\`\`typescript
${memberEntry}
\`\`\`

This PR was generated from the team member submission form.`;

    // Create the GitHub URLs for easy PR creation
    const baseUrl = 'https://github.com/aachen-blockchain-club/website';
    const newBranchUrl = `${baseUrl}/new/main`;
    const compareUrl = `${baseUrl}/compare/main...${branchName}`;

    return NextResponse.json({ 
      success: true, 
      message: 'Team member data prepared! Follow the instructions to create your GitHub PR.',
      instructions: {
        branchName,
        commitMessage,
        prBody,
        filename,
        memberEntry,
        newBranchUrl,
        compareUrl,
        imagePath: `public/images/profiles/${filename}`
      }
    });

  } catch (error) {
    console.error('Error processing team member submission:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}
