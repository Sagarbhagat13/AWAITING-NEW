// Sample names for random traveler generation (only female names)
const firstNames = [
  'Kruti', 'Priya', 'Neha', 
  'Anjali', 'Meera',
  'Pooja', 'Divya', 'Ananya',
  'Nisha', 'Kavita',
  'Riya', 'Sneha', 'Aisha',
  'Tanvi', 'Shreya'
];

/**
 * Generates a list of random travelers
 * @param count Number of travelers to generate (between 1-5)
 * @returns Object with main traveler name and total count
 */
export const getRandomTravelers = () => {
  // Generate between 1-5 total travelers
  const totalTravelers = Math.floor(Math.random() * 5) + 1;
  
  // Get a random name for the main traveler
  const mainTravelerIndex = Math.floor(Math.random() * firstNames.length);
  const mainTravelerName = firstNames[mainTravelerIndex];
  
  return {
    mainTravelerName,
    totalTravelers
  };
};

/**
 * Generates formatted traveler text
 */
export const getFormattedTravelerText = () => {
  const { mainTravelerName, totalTravelers } = getRandomTravelers();
  
  if (totalTravelers === 1) {
    return `${mainTravelerName} is travelling`;
  } else {
    return `${mainTravelerName} and ${totalTravelers - 1} others are travelling`;
  }
};

/**
 * Generates batch dates for a trip
 * @param basePrice The base price of the trip
 * @returns Array of batch dates
 */
export const generateBatchDates = (basePrice: number): { 
  id: string; 
  startDate: string; 
  endDate: string; 
  totalSlots: number;
  availableSlots: number;
  price: number;
}[] => {
  const now = new Date();
  const batchDates = [];
  
  // Generate 5 batch dates starting from next week
  for (let i = 0; i < 5; i++) {
    const startDate = new Date(now);
    startDate.setDate(now.getDate() + 7 + (i * 7)); // Weekly batches
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 5); // Assuming 5-day trips
    
    const totalSlots = 15;
    // Random number of available slots between 1 and 15
    const availableSlots = Math.floor(Math.random() * totalSlots) + 1;
    
    // Price variation: ±5% from base price
    const priceVariation = basePrice * (0.95 + (Math.random() * 0.1));
    const price = Math.round(priceVariation / 100) * 100; // Round to nearest hundred
    
    batchDates.push({
      id: `batch-${i + 1}`,
      startDate: startDate.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short',
        year: 'numeric'
      }),
      endDate: endDate.toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'short',
        year: 'numeric'
      }),
      totalSlots,
      availableSlots,
      price
    });
  }
  
  return batchDates;
};
