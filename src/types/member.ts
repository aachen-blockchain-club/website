export interface TeamMember {
  name: string;
  title: string;
  team: "board" | "advisory" | "team heads" | "member" | "alumni";
  image: string;
  socialLinks?: {
    linkedin?: string;
    x?: string;
    github?: string;
  };
} 