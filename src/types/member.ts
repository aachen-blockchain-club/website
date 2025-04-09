export interface TeamMember {
  id: string;
  name: string;
  title: string;
  team: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
} 