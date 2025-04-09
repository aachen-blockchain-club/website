interface Milestone {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const milestones: Milestone[] = [
  {
    id: 1,
    date: "September 2022",
    title: "Club Foundation",
    description: "Aachen Blockchain Club was founded by a group of passionate students and blockchain enthusiasts.",
    image: "/images/milestones/foundation.jpg"
  },
  {
    id: 2,
    date: "January 2023",
    title: "Official Registration",
    description: "ABC was officially registered as a student organization at RWTH Aachen University.",
    image: "/images/milestones/registration.jpg"
  },
  {
    id: 3,
    date: "March 2023",
    title: "First Blockchain Workshop",
    description: "Successfully organized our first blockchain development workshop with over 50 participants.",
    image: "/images/milestones/workshop.jpg"
  },
  {
    id: 4,
    date: "June 2023",
    title: "Industry Partnership",
    description: "Established partnerships with leading blockchain companies and started our mentorship program.",
    image: "/images/milestones/partnership.jpg"
  },
  {
    id: 5,
    date: "October 2023",
    title: "Blockchain Conference",
    description: "Hosted our first international blockchain conference with speakers from around the world and over 200 attendees.",
    image: "/images/milestones/conference.jpg"
  },
  {
    id: 6,
    date: "February 2024",
    title: "Innovation Lab Launch",
    description: "Launched our blockchain innovation lab, providing resources and mentorship for student projects and startups.",
    image: "/images/milestones/lab.jpg"
  }
]; 