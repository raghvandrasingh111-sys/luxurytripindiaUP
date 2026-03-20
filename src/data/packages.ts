export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface TourPackage {
  slug: string;
  name: string;
  duration: string;
  location: string;
  price: string;
  originalPrice: string;
  description: string;
  image: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
}

export const packages: TourPackage[] = [
  {
    slug: "ayodhya-tour-package-1n-2d",
    name: "Ayodhya Tour Package (1N/2D)",
    duration: "1 Night / 2 Days",
    location: "Ayodhya",
    price: "7,499",
    originalPrice: "9,000",
    description: "Experience the spiritual bliss of the birthplace of Lord Rama. This package covers all major temples and the divine Sarayu Aarti.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp",
    inclusions: ["Hotel Stay", "Breakfast", "Sightseeing", "Transfers"],
    itinerary: [
      { day: 1, title: "Arrival & Ayodhya Darshan", activities: ["Pickup from Station/Airport", "Check-in at Hotel", "Ram Janmabhoomi Temple", "Hanuman Garhi", "Sarayu Aarti"] },
      { day: 2, title: "Local Sightseeing & Departure", activities: ["Visit Kanak Bhawan", "Mani Parvat", "Local Market", "Drop-off at Station/Airport"] }
    ]
  },
  {
    slug: "ayodhya-tour-ex-bangalore-2n-3d",
    name: "Ayodhya Tour ex-Bangalore (2N/3D)",
    duration: "2 Nights / 3 Days",
    location: "Bangalore to Ayodhya",
    price: "22,999",
    originalPrice: "35,000",
    description: "Specially curated tour for travelers coming from Bangalore with flight assistance and premium stays.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Ayodhya-Tour-ex-Bglre.webp",
    inclusions: ["Flight Assistance", "Premium Hotel", "Private Guide", "All Meals"],
    itinerary: [
      { day: 1, title: "Arrival in Ayodhya", activities: ["Transfer from Lucknow/Ayodhya Airport", "Evening free for leisure", "Dinner at Hotel"] },
      { day: 2, title: "Full Day Ayodhya Darshan", activities: ["Ram Janmabhoomi", "Kanak Bhawan", "Hanuman Garhi", "Evening Sarayu Ghat"] },
      { day: 3, title: "Departure", activities: ["Breakfast", "Visit Local Sights", "Transfer to Airport"] }
    ]
  },
  {
    slug: "vanasari-ayodhya-tour-2n-3d",
    name: "Varanasi Ayodhya Tour (2N/3D)",
    duration: "1N Varanasi | 1N Ayodhya",
    location: "Varanasi | Ayodhya",
    price: "9,999",
    originalPrice: "12,000",
    description: "Combine the spiritual vibrations of Kashi and the divine heritage of Ayodhya in this 3-day journey.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-1.png.webp",
    inclusions: ["Intercity Transfer", "Hotel Stays", "Ganga Aarti", "Temple Visits"],
    itinerary: [
      { day: 1, title: "Kashi Arrival", activities: ["Varanasi Arrival", "Evening Ganga Aarti at Dashashwamedh Ghat", "Night stay in Varanasi"] },
      { day: 2, title: "Kashi Vishwanath & Move to Ayodhya", activities: ["Early morning boat ride", "Kashi Vishwanath Temple", "Drive to Ayodhya", "Check-in and stay in Ayodhya"] },
      { day: 3, title: "Ayodhya Darshan & Departure", activities: ["Ram Janmabhoomi", "Hanuman Garhi", "Drop-off for return journey"] }
    ]
  },
  {
    slug: "varanasi-prayagraj-ayodhya-tour-3n-4d",
    name: "Varanasi Prayagraj Ayodhya Tour (3N/4D)",
    duration: "1N Varanasi | 1N Prayagraj | 1N Ayodhya",
    location: "Varanasi | Prayagraj | Ayodhya",
    price: "11,999",
    originalPrice: "16,000",
    description: "The 'Triveni' spiritual circuit covering three of the holiest cities in India.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Prayagraj-Ayodhya-Tour-Package.webp",
    inclusions: ["AC Vehicle", "Boat Rides", "Standard Hotels", "Morning Breakfast"],
    itinerary: [
      { day: 1, title: "Arrival Varanasi", activities: ["Pickup and Hotel Check-in", "Evening Ganga Aarti", "Stay in Varanasi"] } ,
      { day: 2, title: "Varanasi to Prayagraj", activities: ["Vishwanath Temple", "Drive to Prayagraj", "Sangam Snan & Sightseeing", "Stay in Prayagraj"] },
      { day: 3, title: "Prayagraj to Ayodhya", activities: ["Drive to Ayodhya", "Sarayu Aarti", "Stay in Ayodhya"] },
      { day: 4, title: "Ayodhya Sightseeing & Departure", activities: ["Ram Janmabhoomi", "Hanuman Garhi", "Departure"] }
    ]
  },
  {
    slug: "varanasi-tour-package-1n-2d",
    name: "Varanasi Tour Package (1N/2D)",
    duration: "1 Night / 2 Days",
    location: "Varanasi",
    price: "7,499",
    originalPrice: "9,000",
    description: "Quick spiritual dip into the oldest living city in the world.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png-2.webp",
    inclusions: ["Ganga Boat Ride", "Vishwanath Temple Darshan", "Local Guide", "Airport Transfers"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival & Aarti", activities: ["Airport/Station Pickup", "Check-in", "Evening Ganga Aarti", "Explore Local Markets"] },
      { day: 2, title: "Morning Boat & Temple Tour", activities: ["Subah-e-Banaras Boat Ride", "Kashi Vishwanath", "Sarnath Visit", "Departure"] }
    ]
  },
  {
    slug: "up-spiritual-essence-4n-5d",
    name: "Varanasi Prayagraj Ayodhya Tour (4N/5D)",
    duration: "2N Varanasi | 1N Prayagraj | 1N Ayodhya",
    location: "UP Spiritual Essence",
    price: "13,999",
    originalPrice: "16,000",
    description: "A comprehensive tour of the spiritual heartland of Uttar Pradesh.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5635.png.webp",
    inclusions: ["Ganga Aarti", "Sangam Snan", "Ram Janmabhoomi", "Guided Tours"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Varanasi pickup", "Ganga Aarti", "Stay in Varanasi"] },
      { day: 2, title: "Kashi Darshan", activities: ["Subah-e-Banaras", "Kashi Vishwanath Temple", "Sarnath", "Stay in Varanasi"] }
      // Additional days included in detailed dynamic logic
    ]
  },
  {
    slug: "buddhist-circuit-tour",
    name: "Buddhist Circuit Tour",
    duration: "7 Nights / 8 Days",
    location: "Varanasi | Bodhgaya | Lumbini",
    price: "19,999",
    originalPrice: "25,000",
    description: "Follow the footsteps of Buddha across the most sacred monasteries and stupas.",
    image: "/images/buddhist-circuit.png",
    inclusions: ["Expert Guide", "Monastery Visits", "Meditation Sessions", "AC Transport"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup", "Evening Aarti", "Stay in Varanasi"] },
      { day: 2, title: "Sarnath & Bodhgaya", activities: ["Visit Sarnath Stupa", "Drive to Bodhgaya", "Stay in Bodhgaya"] },
      { day: 3, title: "Bodhgaya Exploration", activities: ["Mahabodhi Temple", "80ft Buddha Statue", "Various Country Monasteries"] }
    ]
  },
  {
    slug: "char-dham-yatra",
    name: "Sacred Char Dham Yatra",
    duration: "10 Nights / 11 Days",
    location: "Uttarakhand",
    price: "34,999",
    originalPrice: "45,000",
    description: "Soul-cleansing pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    image: "/images/char-dham.png",
    inclusions: ["Mountain Transport", "Temple Priority", "Veg Meals", "Stay at Base Camps"],
    itinerary: [
      { day: 1, title: "Haridwar Arrival", activities: ["Meet at Haridwar", "Evening Ganga Aarti at Har-ki-Pauri", "Orientation"] },
      { day: 2, title: "Haridwar to Barkot", activities: ["Mountain drive", "Evening relaxation"] },
      { day: 3, title: "Yamunotri Trek", activities: ["Janki Chatti to Yamunotri", "Holy Snan", "Return to Barkot"] }
    ]
  },
  {
    slug: "golden-triangle-heritage-tour",
    name: "Golden Triangle Heritage Tour",
    duration: "5 Nights / 6 Days",
    location: "Delhi | Agra | Jaipur",
    price: "16,999",
    originalPrice: "22,000",
    description: "Discover the architectural wonders of Delhi, the Taj Mahal, and the Pink City.",
    image: "/images/golden-triangle.png",
    inclusions: ["Agra Heritage Walk", "Amer Fort Jeep Ride", "Luxury AC Car", "4-Star Stays"],
    itinerary: [
      { day: 1, title: "Delhi Arrival", activities: ["Airport Pickup", "Rest at Hotel"] },
      { day: 2, title: "Delhi Sightseeing", activities: ["Red Fort", "Qutub Minar", "India Gate", "Drive to Agra"] },
      { day: 3, title: "Taj Mahal & Jaipur", activities: ["Sunrise at Taj Mahal", "Agra Fort", "Drive to Jaipur"] }
    ]
  },
  {
    slug: "royal-rajasthan-heritage-tour",
    name: "Royal Rajasthan Heritage Tour",
    duration: "7 Nights / 8 Days",
    location: "Royal Heritage",
    price: "21,999",
    originalPrice: "28,000",
    description: "Experience the royal luxury and vibrant culture of the land of Kings.",
    image: "/images/rajasthan.png",
    inclusions: ["Desert Camp", "Camel Safari", "Heritage Hotels", "Private Car"],
    itinerary: [
      { day: 1, title: "Jaipur Arrival", activities: ["Pickup", "Stay in Heritage Hotel"] },
      { day: 2, title: "Pink City Tour", activities: ["Amer Fort", "City Palace", "Hawa Mahal", "Jantar Mantar"] },
      { day: 3, title: "Jaipur to Jodhpur", activities: ["Drive to Blue City", "Mehrangarh Fort", "Stay in Jodphur"] }
    ]
  },
  {
    slug: "blissful-bihar-discovery",
    name: "Blissful Bihar Discovery",
    duration: "4 Nights / 5 Days",
    location: "Bihar Culture",
    price: "11,999",
    originalPrice: "15,000",
    description: "Discover the unsung beauty and ancient history of Bihar, from Nalanda to Bodhgaya.",
    image: "/images/blissful-bihar.png",
    inclusions: ["Heritage Tours", "Local Guide", "Cultural Dinners", "All Transfers"],
    itinerary: [
      { day: 1, title: "Patna Arrival", activities: ["Pickup", "Golgadh Visit", "Bihar Museum"] },
      { day: 2, title: "Patna to Nalanda & Rajgir", activities: ["Nalanda University Ruins", "Vishwa Shanti Stupa", "Hot Springs"] },
      { day: 3, title: "Bodhgaya Arrival", activities: ["Transfer to Bodhgaya", "Evening Meditation"] }
    ]
  },
  {
    slug: "lush-uttarakhand-escape",
    name: "Lush Uttarakhand Escape",
    duration: "5 Nights / 6 Days",
    location: "Scenic Temples",
    price: "13,999",
    originalPrice: "18,000",
    description: "Escape to the serene hills and holy rivers of the Land of Gods.",
    image: "/images/uttarakhand.png",
    inclusions: ["Hill Station Hotels", "Scenic Drives", "River Rafting (Optional)", "Temple Visits"],
    itinerary: [
      { day: 1, title: "Rishikesh Arrival", activities: ["Ganga Aarti", "Stay in Resort"] },
      { day: 2, title: "Rishikesh to Mussoorie", activities: ["Kempty Falls", "Mall Road", "Stay in Mussoorie"] },
      { day: 3, title: "Dhanaulti Day Trip", activities: ["Eco Park", "Surkanda Devi Temple"] }
    ]
  },
  {
    slug: "himachal-serenity-tour",
    name: "Himachal Serenity Tour",
    duration: "6 Nights / 7 Days",
    location: "Shimla | Manali",
    price: "18,999",
    originalPrice: "24,000",
    description: "Discover the snow-capped peaks and pine forests of Himachal Pradesh.",
    image: "/images/himachal.png",
    inclusions: ["Valley Resorts", "Private Cab", "Solang Valley Trip", "Breakfast & Dinner"],
    itinerary: [
      { day: 1, title: "Chandigarh to Shimla", activities: ["Airport Pickup", "Drive to Shimla", "Overnight stay"] },
      { day: 2, title: "Shimla Local", activities: ["Kufri", "Mall Road", "The Ridge"] },
      { day: 3, title: "Shimla to Manali", activities: ["Scenic drive through Kullu valley", "Pandoh Dam"] }
    ]
  }
];
