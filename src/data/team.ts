import { TeamMember } from '../types/member';

export const teamMembers: TeamMember[] = [
  {
    name: 'Mikolaj Radlinski',
    title: 'President',
    team: 'board',
    image: '/images/profiles/mike.png',
    socialLinks: {
      x: 'https://x.com/MikePawel',
      github: 'https://github.com/MikePawel'
    }
  },
  {
    name: 'Ivan Dimitrov',
    title: 'Vice President',
    team: 'board',
    image: '/images/profiles/ivan.png',
    socialLinks: {
      x: 'https://x.com/IvanE1E1'
    }
  },
  {
    name: 'Santhosh Senthil Kumar',
    title: 'Treasurer & R&D Team Lead',
    team: 'board',
    image: '/images/profiles/santhosch.png',
    socialLinks: {
      x: 'https://x.com/sant18z',
      github: 'https://github.com/santy311'
    }
  },
  {
    name: 'Ahoura Azarbin',
    title: '',
    team: 'advisory',
    image: '/images/profiles/ahoura.png',
    socialLinks: {
      x: 'https://x.com/ahoura_az',
      github: 'https://github.com/Aghostraa'
    }
  },
  {
    name: 'Lennart Czardybon',
    title: 'Community Team Lead',
    team: 'team heads',
    image: '/images/profiles/lennart.png',
  },
  {
    name: 'Sascha Nievelstein',
    title: '',
    team: 'member',
    image: '/images/profiles/sascha.png',
  },
  {
    name: 'Ki Wook Kim',
    title: '',
    team: 'member',
    image: '/images/profiles/kim.png',
  },
  {
    name: 'Lorenz Lehmann',
    title: 'Founding Member',
    team: 'advisory',
    image: '/images/profiles/lorenz.png',
    socialLinks: {
      x: 'https://x.com/LehmannLorenz',
      github: 'https://github.com/lorenz234'
    }
  },
  {
    name: 'Arpad Djuraki',
    title: 'Founding Member',
    team: 'advisory',
    image: '/images/profiles/arpad.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/arpad-djuraki/'
    }
  },
  
  // Add more members here

];

export const teams = ['board', 'advisory', 'team heads', 'member', 'alumni'] as const; 