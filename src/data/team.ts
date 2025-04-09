import { TeamMember } from '../types/member';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Donald Trump',
    title: 'President',
    team: 'Board',
    image: '/team/placeholder.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  },
  {
    id: '2',
    name: 'JD Vance',
    title: 'Vice President',
    team: 'Board',
    image: '/team/placeholder.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  },
  {
    id: '3',
    name: 'Musk',
    title: 'D.O.G.E',
    team: 'Board',
    image: '/team/placeholder.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  },
  {
    id: '4',
    name: 'Some Guy',
    title: 'Advisory',
    team: 'Advisory',
    image: '/team/placeholder.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  },
  
  // Add more members here
];

export const teams = ['Board', 'R&D', 'Industry', 'Events', 'Advisory'] as const; 