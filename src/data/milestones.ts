interface Milestone {
  date: string;
  title: string;
  description: string;
  image: string;
  url?: string;
}

export const milestones: Milestone[] = [
  {
    date: "May 2015",
    title: "Bitcoin Meetups",
    description: "The first student-led blockchain initiative in Germany was established in Aachen under the name Bitcoin-Aachen, hosting monthly meetups.",
    image: "/images/milestones/01_bitcoinaachen.png",
    url: "https://web.archive.org/web/20150519043300/http://bitcoin-aachen.de/"
  },
  {
    date: "November 2021",
    title: "Blockchain Meetups",
    description: "Focus shifted to broader blockchain topics, with bi-weekly meetups mostly online due to Covid19.",
    image: "/images/milestones/02_first-abc-meetup.png"
  },
  {
    date: "October 2022",
    title: "Founding of Aachen Blockchain Club",
    description: "Eight founding members established ABC as a non-profit student initiative to build a sustainable, impact-driven club.",
    image: "/images/milestones/03_foundation.png"
  },
  {
    date: "May 2023",
    title: "Educational Workshops",
    description: "The first “Blockchain with Pen & Paper” workshop kicked off our series, teaching students the basics of blockchain. Many more workshops followed.",
    image: "/images/milestones/04_workshops.png",
    url: "https://aachen-blockchain.de/events/"
  },
  {
    date: "September 2023",
    title: "TUM Blockchain Conference",
    description: "An ABC delegation attended the first TUM Blockchain Conference, supporting fellow student groups and contributing where possible.",
    image: "/images/milestones/05_tumconference.png",
    url: "https://conference.tum-blockchain.com/"
  },
  {
    date: "March 2024",
    title: "Superteam Germany Partnership",
    description: "We formed our first partnership to accelerate blockchain adoption with no other than Superteam Germany. The close collaboration continues today, with many ABC members becoming part of Superteam Germany.",
    image: "/images/milestones/06_superteam.png",
    url: "https://de.superteam.fun/"
  },
  {
    date: "July 2024",
    title: "ETH CC Brussels Trip",
    description: "Twelve ABC members traveled to ETH CC, where we met Ethereum founder Vitalik Buterin in a private AMA together with MegaETH.",
    image: "/images/milestones/07_ethcc.png",
    url: "https://ethcc.io/"
  },
  {
    date: "February 2025",
    title: "Celestia Hackathon Build Station",
    description: "We hosted the only month-long build station in Germany for the global Celestia Mammothon hackathon with a price pool of $250k, bringing builders together in Aachen.",
    image: "/images/milestones/08_celestia.png",
    url: "https://x.com/RWTHBlockchain/status/1869105277905318274"
  },
  {
    date: "August 2025",
    title: "10 Year Ethereum Party",
    description: "We hosted a celebration in Aachen for Ethereum’s 10th birthday in partnership with the Ethereum Foundation.",
    image: "/images/milestones/09_ethereum.png",
    url: "https://x.com/RWTHBlockchain/status/1951263458755777016"
  }
];
