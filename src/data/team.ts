import { TeamMember } from '../types/member';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    title: 'President',
    team: 'Leadership',
    image: '/team/placeholder.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  },
  // Add more members here
];

export const teams = ['Leadership', 'Development', 'Research', 'Marketing'] as const; 