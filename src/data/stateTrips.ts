
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
        id: 'ladakh-group-1',
        title: 'Ladakh Group Adventure',
        location: 'Ladakh',
        price: 32999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1483356256511-b48749959172?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 132
      },
      {
        id: 'ladakh-group-2',
        title: 'Pangong Lake Expedition',
        location: 'Ladakh',
        price: 36500,
        discount: 5,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 98
      },
      {
        id: 'ladakh-group-3',
        title: 'Nubra Valley Trek',
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
        id: 'ladakh-custom-1',
        title: 'Customized Ladakh Adventure',
        location: 'Ladakh',
        price: 42999,
        discount: 0,
        duration: 'Flexible',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 42
      },
      {
        id: 'ladakh-custom-2',
        title: 'Private Ladakh Expedition',
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
        id: 'hp-group-1',
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
        id: 'hp-group-2',
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
        id: 'hp-group-3',
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
        id: 'hp-custom-1',
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
        id: 'hp-custom-2',
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
        id: 'uk-group-1',
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
        id: 'uk-group-2',
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
        id: 'uk-group-3',
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
        id: 'uk-custom-1',
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
        id: 'uk-custom-2',
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
        id: 'raj-group-1',
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
        id: 'raj-group-2',
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
        id: 'raj-group-3',
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
        id: 'raj-custom-1',
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
        id: 'raj-custom-2',
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
        id: 'goa-group-1',
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
        id: 'goa-group-2',
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
        id: 'goa-group-3',
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
        id: 'goa-custom-1',
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
        id: 'goa-custom-2',
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
        id: 'kerala-group-1',
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
        id: 'kerala-group-2',
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
        id: 'kerala-group-3',
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
        id: 'kerala-custom-1',
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
        id: 'kerala-custom-2',
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
        id: 'tn-group-1',
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
        id: 'tn-group-2',
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
        id: 'tn-group-3',
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
        id: 'tn-custom-1',
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
        id: 'tn-custom-2',
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
        id: 'and-group-1',
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
        id: 'and-group-2',
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
        id: 'and-group-3',
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
        id: 'and-custom-1',
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
        id: 'and-custom-2',
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
