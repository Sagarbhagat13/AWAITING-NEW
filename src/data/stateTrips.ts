
import { Trip } from './popularTrips';

// Interface for state-specific data
export interface StateData {
  id: string;
  name: string;
  groupTours: Trip[];
  customTrips: Trip[];
}

// Sample data for each state
export const stateTrips: Record<string, StateData> = {
  'ladakh': {
    id: 'ladakh',
    name: 'Ladakh',
    groupTours: [
      {
        id: '',
        title: '',
        location: 'Ladakh',
        price: 32999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1483356256511-b48749959172?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 132
      },
      {
        id: '',
        title: '',
        location: 'Ladakh',
        price: 36500,
        discount: 5,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 98
      },
      {
        id: '',
        title: '',
        location: 'Ladakh',
        price: 28999,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 76
      }
    ],
    customTrips: [
      {
        id: '',
        title: '',
        location: 'Ladakh',
        price: 42999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 42
      },
      {
        id: '',
        title: '',
        location: 'Ladakh',
        price: 48500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 38
      }
    ]
  },
  'himachal-pradesh': {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    groupTours: [
      {
        id: '',
        title: 'Manali Adventure',
        location: 'Himachal Pradesh',
        price: 18999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 156
      },
      {
        id: '',
        title: 'Shimla-Manali Tour',
        location: 'Himachal Pradesh',
        price: 22500,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1544715675-1868daba50fd?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 112
      },
      {
        id: '',
        title: 'Kasol Backpacking Trip',
        location: 'Himachal Pradesh',
        price: 15999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1605045544284-d6a147119f5c?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 98
      }
    ],
    customTrips: [
      {
        id: '',
        title: 'Customized Himachal Tour',
        location: 'Himachal Pradesh',
        price: 28999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1551411542-127510d15e33?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 48
      },
      {
        id: '',
        title: 'Private Himachal Experience',
        location: 'Himachal Pradesh',
        price: 32500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 36
      }
    ]
  },
  'uttarakhand': {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    groupTours: [
      {
        id: '',
        title: 'Rishikesh River Rafting',
        location: 'Uttarakhand',
        price: 16999,
        discount: 10,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1470104240373-bc1ae33016a6?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 142
      },
      {
        id: '',
        title: 'Nainital Lake Tour',
        location: 'Uttarakhand',
        price: 19500,
        discount: 5,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1571536802807-30aa8c2b3772?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 98
      },
      {
        id: '',
        title: 'Valley of Flowers Trek',
        location: 'Uttarakhand',
        price: 23999,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 112
      }
    ],
    customTrips: [
      {
        id: '',
        title: 'Customized Uttarakhand Trek',
        location: 'Uttarakhand',
        price: 28999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 36
      },
      {
        id: '',
        title: 'Private Char Dham Yatra',
        location: 'Uttarakhand',
        price: 42500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 28
      }
    ]
  },
  'rajasthan': {
    id: 'rajasthan',
    name: 'Rajasthan',
    groupTours: [
      {
        id: '',
        title: 'Royal Rajasthan Tour',
        location: 'Rajasthan',
        price: 24999,
        discount: 8,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897d36cd4?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 178
      },
      {
        id: '',
        title: 'Jaipur-Udaipur-Jodhpur Circuit',
        location: 'Rajasthan',
        price: 28500,
        discount: 10,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1599661046251-3c599e0c7a8a?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 156
      },
      {
        id: '',
        title: 'Desert Safari Experience',
        location: 'Rajasthan',
        price: 19999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 98
      }
    ],
    customTrips: [
      {
        id: '',
        title: 'Customized Rajasthan Heritage Tour',
        location: 'Rajasthan',
        price: 35999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1590077428593-a33c3fb143e2?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 42
      },
      {
        id: '',
        title: 'Private Royal Palaces Tour',
        location: 'Rajasthan',
        price: 42500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36
      }
    ]
  },
  'goa': {
    id: 'goa',
    name: 'Goa',
    groupTours: [
      {
        id: '',
        title: 'Goa Beach Hopping',
        location: 'Goa',
        price: 14999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 187
      },
      {
        id: '',
        title: 'North Goa Adventure',
        location: 'Goa',
        price: 16500,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1567861911437-538298e4e620?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 142
      },
      {
        id: '',
        title: 'South Goa Relaxation',
        location: 'Goa',
        price: 18999,
        discount: 8,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdbc75?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 98
      }
    ],
    customTrips: [
      {
        id: 'g',
        title: 'Customized Goa Holiday',
        location: 'Goa',
        price: 22999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1587918986787-013e313f6f0c?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 48
      },
      {
        id: '',
        title: 'Private Beach Resort Experience',
        location: 'Goa',
        price: 32500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 36
      }
    ]
  },
  'kerala': {
    id: 'kerala',
    name: 'Kerala',
    groupTours: [
      {
        id: '',
        title: 'Kerala Backwaters Tour',
        location: 'Kerala',
        price: 22999,
        discount: 12,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1602157729150-3edc9cb4c4c6?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 178
      },
      {
        id: '',
        title: 'Munnar-Thekkady-Alleppey Circuit',
        location: 'Kerala',
        price: 25500,
        discount: 8,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1590123031473-33abab056b5d?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 156
      },
      {
        id: '',
        title: 'Wayanad Trekking Experience',
        location: 'Kerala',
        price: 19999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1599661046441-5a1786e5c6a2?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 98
      }
    ],
    customTrips: [
      {
        id: '',
        title: 'Customized Kerala Tour',
        location: 'Kerala',
        price: 32999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1602157729140-62a0a0bc14c4?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 42
      },
      {
        id: '',
        title: 'Private Houseboat Experience',
        location: 'Kerala',
        price: 38500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1580289145536-81a3c9a9dbb8?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 36
      }
    ]
  },
  'tamil-nadu': {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    groupTours: [
      {
        id: '',
        title: 'Tamil Nadu Temple Tour',
        location: 'Tamil Nadu',
        price: 21999,
        discount: 10,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1524613032093-c6228e64d7bf?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 145
      },
      {
        id: '',
        title: 'Chennai-Mahabalipuram-Pondicherry Circuit',
        location: 'Tamil Nadu',
        price: 24500,
        discount: 8,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1516563643398-b04b5e203b63?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 126
      },
      {
        id: '',
        title: 'Ooty-Kodaikanal Tour',
        location: 'Tamil Nadu',
        price: 18999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 98
      }
    ],
    customTrips: [
      {
        id: '',
        title: 'Customized Tamil Nadu Experience',
        location: 'Tamil Nadu',
        price: 28999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1583417267826-aebc4d4542d9?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 38
      },
      {
        id: '',
        title: 'Private Hill Station Tour',
        location: 'Tamil Nadu',
        price: 32500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1536294837331-1a8abcce1bfc?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 32
      }
    ]
  },
  'andaman': {
    id: 'andaman',
    name: 'Andaman',
    groupTours: [
      {
        id: '',
        title: 'Andaman Island Hopping',
        location: 'Andaman',
        price: 28999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1586426773736-56c25c9b3a0c?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 165
      },
      {
        id: '',
        title: 'Port Blair-Havelock-Neil Circuit',
        location: 'Andaman',
        price: 32500,
        discount: 8,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1496947850313-7743325fa58c?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 142
      },
      {
        id: '',
        title: 'Andaman Scuba Diving',
        location: 'Andaman',
        price: 26999,
        discount: 12,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1544551763-92ab472cad5d?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 98
      }
    ],
    customTrips: [
      {
        id: '',
        title: 'Customized Andaman Adventure',
        location: 'Andaman',
        price: 42999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1560760097-9e8fef1e6ff7?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 38
      },
      {
        id: '',
        title: 'Private Beach Resort Experience',
        location: 'Andaman',
        price: 48500,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 32
      }
    ]
  }
};
