
export interface SearchKeyword {
  keyword: string;
  relatedTerms: string[];
  tripIds: string[];
}

export const searchKeywords: SearchKeyword[] = [
  {
    keyword: "adventure",
    relatedTerms: ["trekking", "hiking", "camping", "outdoor", "expedition", "thrill", "mountain", "exploration"],
    tripIds: ["1", "3", "5", "7", "lw3"]
  },
  {
    keyword: "beach",
    relatedTerms: ["sea", "ocean", "coastal", "sand", "waves", "sunset", "tropical", "island"],
    tripIds: ["2", "6", "lw2"]
  },
  {
    keyword: "family",
    relatedTerms: ["kids", "children", "family-friendly", "parents", "vacation", "holiday", "group"],
    tripIds: ["4", "8", "10"]
  },
  {
    keyword: "honeymoon",
    relatedTerms: ["romantic", "couple", "newlyweds", "anniversary", "private", "luxury", "intimate"],
    tripIds: ["12", "14", "16"]
  },
  {
    keyword: "budget",
    relatedTerms: ["affordable", "cheap", "economic", "low-cost", "value", "inexpensive", "saving"],
    tripIds: ["3", "7", "9", "lw1", "lw3"]
  },
  {
    keyword: "luxury",
    relatedTerms: ["premium", "exclusive", "high-end", "5-star", "deluxe", "comfort", "elite"],
    tripIds: ["2", "6", "12"]
  },
  {
    keyword: "cultural",
    relatedTerms: ["heritage", "historical", "traditional", "ancient", "monument", "temple", "museum"],
    tripIds: ["1", "5", "lw4"]
  },
  {
    keyword: "wildlife",
    relatedTerms: ["safari", "national park", "animals", "nature", "jungle", "forest", "birds", "tiger"],
    tripIds: ["8", "10", "11"]
  },
  {
    keyword: "pilgrimage",
    relatedTerms: ["religious", "spiritual", "temple", "shrine", "holy", "sacred", "divine"],
    tripIds: ["9", "13", "15"]
  },
  {
    keyword: "weekend",
    relatedTerms: ["short trip", "getaway", "quick break", "2 days", "3 days", "short vacation", "nearby"],
    tripIds: ["lw1", "lw2", "lw3", "lw4", "lw5"]
  },
  {
    keyword: "monsoon",
    relatedTerms: ["rainy season", "green", "waterfalls", "lush", "rainfall", "clouds", "rainforest"],
    tripIds: ["3", "7", "lw1"]
  },
  {
    keyword: "winter",
    relatedTerms: ["snow", "snowfall", "cold", "december", "january", "christmas", "new year", "skiing"],
    tripIds: ["5", "lw5"]
  },
  {
    keyword: "summer",
    relatedTerms: ["may", "june", "hot", "hill station", "cool", "escape heat", "vacation"],
    tripIds: ["1", "4", "8"]
  },
  {
    keyword: "offbeat",
    relatedTerms: ["hidden gem", "unexplored", "non-touristy", "remote", "secluded", "unique", "less crowded"],
    tripIds: ["3", "7", "9", "11"]
  },
  {
    keyword: "international",
    relatedTerms: ["abroad", "foreign", "overseas", "global", "world tour", "foreign country", "visa"],
    tripIds: ["2", "6", "12", "14"]
  }
];
