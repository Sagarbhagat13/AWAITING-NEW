
import { Trip } from './popularTrips';

// Define type for monthly trips data
export interface MonthlyTrips {
  month: string;
  trips: Trip[];
}

// Creating monthly trips data
export const monthlyTrips: MonthlyTrips[] = [
  {
    month: "January",
    trips: [
      {
        id: 'jan-1',
        title: 'Jaipur Winter Festival',
        location: 'Rajasthan',
        price: 19999,
        discount: 15,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897ec8548?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 123
      },
      {
        id: 'jan-2',
        title: 'Rann of Kutch',
        location: 'Gujarat',
        price: 21999,
        discount: 10,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 98
      },
      {
        id: 'jan-3',
        title: 'Kerala Backwaters',
        location: 'Kerala',
        price: 23499,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1602157729150-3edc9cb4c4c6?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 145
      }
    ]
  },
  {
    month: "February",
    trips: [
      {
        id: 'feb-1',
        title: 'Taj Mahal Tour',
        location: 'Uttar Pradesh',
        price: 15999,
        discount: 12,
        duration: '3D/2N',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 178
      },
      {
        id: 'feb-2',
        title: 'Valentine Special Goa',
        location: 'Goa',
        price: 18999,
        discount: 20,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 156
      },
      {
        id: 'feb-3',
        title: 'Udaipur Romance',
        location: 'Rajasthan',
        price: 22999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1590080748465-1ef694f45478?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 112
      }
    ]
  },
  {
    month: "March",
    trips: [
      {
        id: 'mar-1',
        title: 'Holi Festival Special',
        location: 'Mathura & Vrindavan',
        price: 17999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1592395096562-9d66b6a99c9f?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 134
      },
      {
        id: 'mar-2',
        title: 'Kaziranga Safari',
        location: 'Assam',
        price: 26999,
        discount: 8,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1596317505860-70bf5e132251?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 87
      },
      {
        id: 'mar-3',
        title: 'Himalayan Spring Trek',
        location: 'Himachal Pradesh',
        price: 21999,
        discount: 12,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1626016352668-5c5bdbe641c4?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 109
      }
    ]
  },
  {
    month: "April",
    trips: [
      {
        id: 'apr-1',
        title: 'Darjeeling Tea Trail',
        location: 'West Bengal',
        price: 19999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1544414097-27c24fd7599c?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 132
      },
      {
        id: 'apr-2',
        title: 'Valley of Flowers Trek',
        location: 'Uttarakhand',
        price: 24999,
        discount: 15,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1543039625-14cbd3802e7d?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 145
      },
      {
        id: 'apr-3',
        title: 'Ooty Hill Station',
        location: 'Tamil Nadu',
        price: 18999,
        discount: 12,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 98
      }
    ]
  },
  {
    month: "May",
    trips: [
      {
        id: 'may-1',
        title: 'Ladakh Adventure',
        location: 'Ladakh',
        price: 29999,
        discount: 10,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1557851913-6311e66576a3?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 156
      },
      {
        id: 'may-2',
        title: 'Summer in Shimla',
        location: 'Himachal Pradesh',
        price: 17999,
        discount: 15,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 132
      },
      {
        id: 'may-3',
        title: 'Coorg Coffee Trails',
        location: 'Karnataka',
        price: 22999,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc953?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 89
      }
    ]
  },
  {
    month: "June",
    trips: [
      {
        id: 'jun-1',
        title: 'Andaman Beach Holiday',
        location: 'Andaman',
        price: 32999,
        discount: 12,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 143
      },
      {
        id: 'jun-2',
        title: 'Spiti Valley',
        location: 'Himachal Pradesh',
        price: 26999,
        discount: 8,
        duration: '8D/7N',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 112
      },
      {
        id: 'jun-3',
        title: 'Monsoon in Munnar',
        location: 'Kerala',
        price: 19999,
        discount: 15,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 98
      }
    ]
  },
  {
    month: "July",
    trips: [
      {
        id: 'jul-1',
        title: 'Monsoon in Goa',
        location: 'Goa',
        price: 16999,
        discount: 20,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 108
      },
      {
        id: 'jul-2',
        title: 'Valley of Flowers',
        location: 'Uttarakhand',
        price: 24999,
        discount: 10,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1519058454075-2ad73dd8bc4c?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 132
      },
      {
        id: 'jul-3',
        title: 'Coorg Monsoon',
        location: 'Karnataka',
        price: 18999,
        discount: 15,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc953?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 95
      }
    ]
  },
  {
    month: "August",
    trips: [
      {
        id: 'aug-1',
        title: 'Leh Ladakh Adventure',
        location: 'Ladakh',
        price: 27999,
        discount: 8,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1589139511486-02df1c7cb0bd?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 156
      },
      {
        id: 'aug-2',
        title: 'Independence Special',
        location: 'Delhi & Agra',
        price: 14999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1568454537842-d933259bb1ce?auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 98
      },
      {
        id: 'aug-3',
        title: 'Munnar Tea Gardens',
        location: 'Kerala',
        price: 21999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 125
      }
    ]
  },
  {
    month: "September",
    trips: [
      {
        id: 'sep-1',
        title: 'Meghalaya Monsoon',
        location: 'Meghalaya',
        price: 25999,
        discount: 10,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1591697970858-830aa7aeae09?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 112
      },
      {
        id: 'sep-2',
        title: 'Andaman Island Tour',
        location: 'Andaman',
        price: 32999,
        discount: 15,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 143
      },
      {
        id: 'sep-3',
        title: 'Post-monsoon Goa',
        location: 'Goa',
        price: 17999,
        discount: 18,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 102
      }
    ]
  },
  {
    month: "October",
    trips: [
      {
        id: 'oct-1',
        title: 'Dussehra in Mysore',
        location: 'Karnataka',
        price: 19999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1605649461784-edc87130f41f?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 134
      },
      {
        id: 'oct-2',
        title: 'Varanasi Diwali',
        location: 'Uttar Pradesh',
        price: 23999,
        discount: 10,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1561361398-a8005800120c?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 142
      },
      {
        id: 'oct-3',
        title: 'Autumn in Manali',
        location: 'Himachal Pradesh',
        price: 18999,
        discount: 15,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1626198225952-a73547da7be2?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 98
      }
    ]
  },
  {
    month: "November",
    trips: [
      {
        id: 'nov-1',
        title: 'Pushkar Camel Fair',
        location: 'Rajasthan',
        price: 22999,
        discount: 10,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 112
      },
      {
        id: 'nov-2',
        title: 'Rann Utsav',
        location: 'Gujarat',
        price: 24999,
        discount: 15,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 132
      },
      {
        id: 'nov-3',
        title: 'Andamans Beach Holiday',
        location: 'Andaman',
        price: 32999,
        discount: 12,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 145
      }
    ]
  },
  {
    month: "December",
    trips: [
      {
        id: 'dec-1',
        title: 'Goa New Year Special',
        location: 'Goa',
        price: 29999,
        discount: 8,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 178
      },
      {
        id: 'dec-2',
        title: 'Winter in Shimla',
        location: 'Himachal Pradesh',
        price: 19999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 132
      },
      {
        id: 'dec-3',
        title: 'Jaisalmer Desert Festival',
        location: 'Rajasthan',
        price: 23999,
        discount: 10,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897ec8548?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 156
      }
    ]
  }
];
