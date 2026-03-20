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
    slug: "varanasi-bodhgaya-spiritual-tour-3n-4d",
    name: "Varanasi & Bodhgaya Spiritual Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi | Bodhgaya",
    price: "13,550",
    originalPrice: "16,000",
    description: "Witness the spectacular Ganga Aarti and explore the holy sites of Varanasi and Bodhgaya in this 4-day spiritual journey.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp",
    inclusions: ["Meet & Greet", "Hotel Accommodation", "Daily Breakfast", "AC Vehicle Transfers"],
    itinerary: [
      { day: 1, title: "Arrival at Varanasi", activities: ["Airport/Station Pickup", "Evening Ganga Aarti", "Stay in Varanasi"] },
      { day: 2, title: "Varanasi - Bodhgaya", activities: ["Dashaswamedh Ghat", "Kashi Vishvanath Temple", "Drive to Bodhgaya", "Stay in Bodhgaya"] },
      { day: 3, title: "Gaya - Varanasi", activities: ["Vishnupad Temple (Pinda Dan)", "Mahabodhi Temple", "80ft Buddha Statue", "Drive back to Varanasi"] },
      { day: 4, title: "Subah-e-Banaras & Departure", activities: ["Assi Ghat Sunrise", "Yoga & Music Recital", "Airport/Station Drop"] }
    ]
  },
  {
    slug: "varanasi-bodhgaya-extended-tour-4n-5d",
    name: "Varanasi & Bodhgaya Extended Tour",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Bodhgaya | Prayagraj",
    price: "17,450",
    originalPrice: "21,000",
    description: "An extended 5-day tour covering Varanasi, Bodhgaya, and the holy Sangam in Prayagraj.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-1.png.webp",
    inclusions: ["Meet & Greet", "Standard Hotels", "Sightseeing", "Transfers"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup", "Evening Ganga Aarti witness", "Stay in Varanasi"] },
      { day: 2, title: "Temples & Move to Gaya", activities: ["Ganga Holy Dip", "Kashi Vishvanath", "Drive to Bodhgaya"] },
      { day: 3, title: "Gaya Sightseeing", activities: ["Vishnupad Temple", "Mahabodhi Temple", "Thai Monastery", "Drive to Varanasi"] },
      { day: 4, title: "Prayagraj & Sitamarhi", activities: ["Visit Sitamarhi (11 years of Mata Sita)", "Prayagraj Sangam Visit", "Return to Varanasi"] },
      { day: 5, title: "Subah-e-Banaras & Departure", activities: ["Assi Ghat Morning", "Sarnath (Optional/Time permits)", "Drop-off at Airport"] }
    ]
  },
  {
    slug: "varanasi-ayodhya-prayagraj-trio-4n-5d",
    name: "Varanasi Ayodhya Prayagraj Spiritual Trio",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Ayodhya | Prayagraj",
    price: "18,400",
    originalPrice: "22,500",
    description: "The ultimate spiritual trio: Kashi, the city of light; Ayodhya, the birthplace of Rama; and Prayagraj, the king of confluences.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Prayagraj-Ayodhya-Tour-Package.webp",
    inclusions: ["All Transfers", "Hotel Stay", "Daily Breakfast", "Ganga Aarti Session"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Meet & Greet", "Evening Ganga Aarti at Dasaswamedh", "Overnight in Varanasi"] },
      { day: 2, title: "Varanasi & Sarnath", activities: ["Subah-e-Banaras", "Sarnath Excursion", "Kashi Vishwanath Darshan"] },
      { day: 3, title: "Varanasi to Ayodhya", activities: ["Check-out & Drive to Ayodhya", "Ram Janam Bhumi", "Kanak Bhavan", "Saryu River Snan"] },
      { day: 4, title: "Ayodhya to Prayagraj", activities: ["Drive to Prayagraj", "Sangam Holy Dip", "Anand Bhavan", "Hanuman Temple"] },
      { day: 5, title: "Prayagraj to Varanasi Drop", activities: ["Morning Breakfast", "Drive to Varanasi", "Drop at Airport/Station"] }
    ]
  },
  {
    slug: "varanasi-ayodhya-lucknow-heritage-4n-5d",
    name: "Varanasi Ayodhya Lucknow Heritage Tour",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Ayodhya | Lucknow",
    price: "18,300",
    originalPrice: "22,000",
    description: "Explore the ancient charm of Varanasi, the divinity of Ayodhya, and the nawabi culture of Lucknow.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5634.png-1.webp",
    inclusions: ["Chikankari Market Visit", "Heritage Walks", "Hotel Stays", "AC Vehicle"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup & Transfer", "Evening Ganga Aarti Experience"] },
      { day: 2, title: "Varanasi Tour", activities: ["Morning Holy Dip", "Kashi Vishwanath", "Sarnath Visit", "Silk Weaving viewing"] },
      { day: 3, title: "Varanasi - Prayag - Ayodhya", activities: ["Drive to Ayodhya via Prayagraj", "Sangam Visit", "Saryu Riverfront witness"] },
      { day: 4, title: "Ayodhya - Lucknow", activities: ["Ram Janmabhumi", "Hanumangarhi Temple", "Drive to Lucknow", "Evening Local Market"] },
      { day: 5, title: "Lucknow City Tour & Departure", activities: ["Bara Imambara", "Rumi Darwaza", "Chikankari Artisans visit", "Drop at Airport"] }
    ]
  },
  {
    slug: "ultimate-up-bihar-spiritual-circuit-6n-7d",
    name: "Ultimate UP & Bihar Spiritual Circuit",
    duration: "6 Nights / 7 Days",
    location: "Patna | Bodhgaya | Varanasi | Lucknow",
    price: "27,150",
    originalPrice: "34,000",
    description: "A comprehensive 7-day pilgrimage following the most sacred sites from Patna and Bodhgaya to Ayodhya and Lucknow.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5635.png.webp",
    inclusions: ["Pinda Dan Assistance", "Expert Guide", "All Major Temple Entries", "Luxury Transfers"],
    itinerary: [
      { day: 1, title: "Patna Arrival", activities: ["Patna to Bodhgaya via Nalanda & Rajgir", "B Buddhist Learning Centre visit", "Overnight in Bodhgaya"] },
      { day: 2, title: "Bodhgaya to Varanasi", activities: ["Gaya Teertah", "Vishnupad Temple (Pinda Dan)", "Mahabodhi Temple", "Drive to Varanasi"] },
      { day: 3, title: "Varanasi Exploration", activities: ["Morning Ganga Dip", "Sarnath Visit", "Kashi Vishwanath Jyotirlinga Darshan"] },
      { day: 4, title: "Varanasi to Prayag", activities: ["Sitamarhi (Valmiki Ashram)", "Prayagraj Sangam Visit", "Overnight in Prayag"] },
      { day: 5, title: "Prayag to Ayodhya", activities: ["Drive to Ayodhya", "Ram Janmabhumi Darshan", "Kanak Bhawan", "Saryu Aarti"] },
      { day: 6, title: "Ayodhya - Naimisaranya - Lucknow", activities: ["Naimisharanya Chakra Theerth", "Drive to Lucknow", "Local artifacts visit"] },
      { day: 7, title: "Lucknow & Departure", activities: ["Bara Imambara", "Presidency", "Drop to Airport/Railway Station"] }
    ]
  }
];
