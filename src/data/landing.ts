// Define the allowed categories
type LandingPageCategory = 'Community' | 'Partnerships' | 'Education';

// Define the interface for landing page items
export interface LandingPageItem {
    image: string;
    category: LandingPageCategory;
    heading?: string;
    description?: string;
    url?: string;
}

// Export the list of landing page items
export const landingPageItems: LandingPageItem[] = [
    // Community
    {
        image: '/images/landing_page/10yethereum.jpg',
        category: 'Community',
        heading: 'Ethereum 10 Year Anniversary',
    },
    {
        image: '/images/landing_page/berlin.jpg',
        category: 'Community',
    },
    {
        image: '/images/landing_page/games.jpg',
        category: 'Community',
    },
    {
        image: '/images/landing_page/food.jpg',
        category: 'Community',
    },
    // Partnerships
    {
        image: '/images/landing_page/vitalik.jpg',
        category: 'Partnerships',
    },
    {
        image: '/images/landing_page/ecosystem_sol.jpg',
        category: 'Partnerships',
    },
    {
        image: '/images/landing_page/istanbul.jpg',
        category: 'Partnerships',
    },
    // Education
    {
        image: '/images/landing_page/learn.jpg',
        category: 'Education',
    },
    {
        image: '/images/landing_page/chainlink.jpg',
        category: 'Education',
    },
    {
        image: '/images/landing_page/merkle.jpg',
        category: 'Education',
    },
];