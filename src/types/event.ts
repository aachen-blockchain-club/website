export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  registrationLink?: string;
  type: 'workshop' | 'meetup' | 'conference' | 'hackathon';
  status: 'upcoming' | 'past';
} 