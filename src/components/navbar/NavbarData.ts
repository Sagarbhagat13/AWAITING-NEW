
export const navLinks = [
  { 
    name: 'India', 
    path: '/india',
    isDropdown: true,
    subItems: [
      { name: 'Ladakh', path: '/india/ladakh' },
      { name: 'Himachal Pradesh', path: '/india/himachal-pradesh' },
      { name: 'Uttarakhand', path: '/india/uttarakhand' },
      { name: 'Rajasthan', path: '/india/rajasthan' },
      { name: 'Goa', path: '/india/goa' },
      { name: 'Kerala', path: '/india/kerala' },
      { name: 'Tamil Nadu', path: '/india/tamil-nadu' },
      { name: 'Andaman', path: '/india/andaman' },
      { name: 'All States', path: '/india/all-states' },
    ]
  },
  { 
    name: 'World', 
    path: '/world',
    isDropdown: true,
    subItems: [
      { name: 'Thailand', path: '/world/thailand' },
      { name: 'Singapore', path: '/world/singapore' },
      { name: 'Bali', path: '/world/bali' },
      { name: 'Maldives', path: '/world/maldives' },
      { name: 'Dubai', path: '/world/dubai' },
      { name: 'Europe', path: '/world/europe' },
      { name: 'All Countries', path: '/world/all-countries' },
    ]
  },
  { name: 'Backpacking', path: '/backpacking' },
  { name: 'Long Weekends', path: '/long-weekend-trips' },
  { name: 'Family Packages', path: '/family-tours' },
  { name: 'Honeymoon', path: '/honeymoon-packages' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// SEO-friendly descriptive text for each category
export const categoryDescriptions = {
  india: "Explore the diverse landscapes and rich cultural heritage of India with our carefully curated tour packages.",
  world: "Discover breathtaking international destinations with our global tour packages designed for Indian travelers.",
  longWeekend: "Make the most of your extended weekends with our specially designed short trips to nearby destinations.",
  backpacking: "Experience authentic travel with like-minded companions on our budget-friendly backpacking adventures.",
  adventure: "Challenge yourself with thrilling activities like trekking, rafting, paragliding and more.",
  family: "Create lasting memories with our family-friendly tours designed to keep all ages engaged and happy.",
  honeymoon: "Begin your journey together with romantic getaways tailored for newlyweds in picturesque settings.",
  blog: "Get inspired by travel stories, destination guides, and practical tips from our experienced travelers.",
};
