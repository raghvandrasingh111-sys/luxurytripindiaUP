export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface PricingCategory {
  category: string;
  pax2: string;
  pax4: string;
  pax6: string;
  pax8: string;
  pax10: string;
  pax12: string;
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
  pricingTable?: PricingCategory[];
}

export const packages: TourPackage[] = [
  {
    slug: "varanasi-bodhgaya-spiritual-tour-3n-4d",
    name: "Varanasi & Bodhgaya Spiritual Tour",
    duration: "3 Nights / 4 Days",
    location: "Varanasi | Bodhgaya | Gaya",
    price: "13,550/-",
    originalPrice: "0",
    description: "A divine journey covering the mystical Ganga Aarti of Varanasi and the sacred Pinda Dan rituals in Gaya and Bodhgaya. Includes visits to Kashi Vishvanath, Mahabodhi Temple, and Subah-e-Banaras.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp",
    inclusions: ["Airport/Station Pickup", "Hotel Accommodation", "Ganga Aarti Witness", "Breakfast Included", "Gaya Teerth Rituals", "Subah-e-Banaras Excursion"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival & Evening Aarti", activities: ["Arrival at Varanasi Airport/Station", "Transfer to Hotel", "Evening Ganga Aarti ceremony at Ghats", "Offerings of lamps and flowers to the river", "Overnight at Varanasi"] },
      { day: 2, title: "Varanasi Tour & Move to Bodhgaya", activities: ["Early morning visit to Dashashwamedh, Man Mandir & Manikarnika Ghats", "Holy dip in Ganges", "Kashi Vishvanath & Mata Annapurna Temple visit", "Breakfast at hotel", "Drive to Bodhgaya", "Overnight at Bodhgaya"] },
      { day: 3, title: "Gaya Teerth & Return to Varanasi", activities: ["Early morning Gaya Teerth visit", "Vishnupad Temple rituals (Pinda Dan)", "Visit Akshy Vat, Sita Kund & Mangla Gauri Temple", "Post lunch visit Mahabodhi Temple, Monastery & Thai Temple", "View 80 feet Buddha", "Drive to Varanasi", "Overnight at Varanasi"] },
      { day: 4, title: "Subah-e-Banaras & Departure", activities: ["Witness Subah-e-Banaras at Assi Ghat", "Morning Yoga & Music recital", "Ganga Aarti with Shehnai", "Breakfast at hotel", "In-time checkout", "Transfer to Airport/Station"] }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "13,550/-", pax4: "11,050/-", pax6: "9,250/-", pax8: "9,350/-", pax10: "8,550/-", pax12: "8,050/-" },
      { category: "Luxury", pax2: "17,000/-", pax4: "14,500/-", pax6: "12,700/-", pax8: "12,750/-", pax10: "12,000/-", pax12: "11,500/-" },
      { category: "Premium", pax2: "20,000/-", pax4: "17,500/-", pax6: "15,700/-", pax8: "15,750/-", pax10: "15,000/-", pax12: "14,500/-" }
    ]
  },
  {
    slug: "varanasi-bodhgaya-prayagraj-divine-4n-5d",
    name: "Varanasi Bodhgaya & Prayagraj Divine Tour",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Bodhgaya | Gaya | Prayagraj",
    price: "17,450/-",
    originalPrice: "0",
    description: "Comprehensive spiritual circuit including Varanasi's ghats, Bodhgaya's temples, and the holy confluence at Prayagraj Sangam. Features visits to Sitamarhi and the 80 feet Buddha.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-1.png.webp",
    inclusions: ["AC Car Transfers", "Hotel Stays", "Breakfast Included", "Prayagraj Sangam Visit", "Gaya Rituals Assistance", "Spiritual Sightseeing"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Pickup from Airport/Station", "Transfer & Hotel Check-in", "Evening Ganga Aarti witness", "Ghats exploration", "Overnight at Varanasi"] },
      { day: 2, title: "Ganges Tour & Drive to Bodhgaya", activities: ["Early morning visit to Varanasi Ghats", "Holy dip and Sun God offerings", "Kashi Vishvanath Temple visit", "Breakfast at hotel", "Drive to Bodhgaya", "Overnight at Bodhgaya"] },
      { day: 3, title: "Gaya Rituals & Varanasi Return", activities: ["Gaya Teerth rituals at Vishnupad Temple", "Pinda Dan at River Falgu", "Visit Akshy Vat, Sita Kund & Mangla Gauri", "Mahabodhi Temple & Monastry visit", "Drive back to Varanasi", "Overnight at Varanasi"] },
      { day: 4, title: "Prayagraj & Sitamarhi Excursion", activities: ["Drive to Sitamarhi (Valmiki Ashram)", "Visit Mata Sita's Temple & Hanuman Statue", "Continue to Prayagraj Sangam", "Transfer to Varanasi", "Overnight at Varanasi"] },
      { day: 5, title: "Subah-e-Banaras & Departure", activities: ["Early morning Assi Ghat for Subah-e-Banaras", "Morning Aarti & Music", "Breakfast at hotel", "Checkout & Transfer to Airport"] }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "17,450/-", pax4: "14,450/-", pax6: "12,150/-", pax8: "11,950/-", pax10: "11,100/-", pax12: "10,500/-" },
      { category: "Luxury", pax2: "22,300/-", pax4: "19,250/-", pax6: "16,950/-", pax8: "16,750/-", pax10: "15,850/-", pax12: "15,250/-" },
      { category: "Premium", pax2: "26,250/-", pax4: "23,250/-", pax6: "20,950/-", pax8: "20,750/-", pax10: "19,850/-", pax12: "19,250/-" }
    ]
  },
  {
    slug: "varanasi-ayodhya-prayagraj-triangle-4n-5d",
    name: "Ayodhya Varanasi & Prayagraj Spiritual Triangle",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Ayodhya | Prayagraj",
    price: "18,400/-",
    originalPrice: "0",
    description: "Follow the footsteps of Lord Rama across the holy triangle of Ayodhya, Varanasi, and Prayagraj. Specialized in Ram Mandir Janmabhoomi and Sangam Darshan.",
    image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Prayagraj-Ayodhya-Tour-Package.webp",
    inclusions: ["Hotel Assistance", "Daily Breakfast", "Ganga Aarti Yajman reservation", "Ram Janmabhoomi Sightseeing", "Prayagraj Sangam Visit"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival & Aarti", activities: ["Meet and greet at Airport/Station", "Hotel Check-in", "Experience Ganga Aarti at Dashashwamedh Ghat", "Optional Yajman service for Aarti", "Overnight at Varanasi"] },
      { day: 2, title: "Sarnath & Varanasi Temple Tour", activities: ["Subah-e-Banaras at Assi Ghat", "Sunrise Boat Tour", "Sarnath Excursion (Buddha's first sermon)", "Dhamekha Stupa & Museum", "Kashi Vishwanath Jyotirlinga visit", "Overnight at Varanasi"] },
      { day: 3, title: "Move to Ayodhya", activities: ["Drive to Ayodhya after breakfast", "Visit Ram Janmabhoomi", "Holy bath in Saryu River", "Hanuman Garhi & Kanak Bhavan visit", "Sita Rasoi & Tulsi Smarak", "Overnight at Ayodhya"] },
      { day: 4, title: "Ayodhya to Prayagraj", activities: ["Drive to Prayagraj", "Check-in & Lunch", "Sangam Visit (confluence of 3 rivers)", "Holy dip & Rituals", "Hanuman Temple & Anand Bhavan", "Overnight at Prayagraj"] },
      { day: 5, title: "Departure", activities: ["Breakfast at hotel", "Drive back to Varanasi", "Drop at Varanasi Airport for onward flight"] }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "18,400/-", pax4: "15,400/-", pax6: "13,100/-", pax8: "13,400/-", pax10: "12,400/-", pax12: "11,750/-" },
      { category: "Luxury", pax2: "22,000/-", pax4: "19,000/-", pax6: "16,700/-", pax8: "17,000/-", pax10: "16,000/-", pax12: "15,500/-" },
      { category: "Premium", pax2: "26,500/-", pax4: "23,500/-", pax6: "21,200/-", pax8: "21,500/-", pax10: "20,500/-", pax12: "19,800/-" }
    ]
  },
  {
    slug: "varanasi-ayodhya-lucknow-heritage-4n-5d",
    name: "Varanasi Ayodhya & Lucknow Heritage Tour",
    duration: "4 Nights / 5 Days",
    location: "Varanasi | Ayodhya | Prayag | Lucknow",
    price: "18,300/-",
    originalPrice: "0",
    description: "A perfect blend of spirituality and nawabi heritage covering the temples of Varanasi/Ayodhya and the architecture of Lucknow.",
    image: "/images/bihar-up.png",
    inclusions: ["Breakfast in all hotels", "Sarnath Excursion", "Prayag Sangam Visit", "Lucknow City Tour", "Handicrafts exploration"],
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Arrival and transfer to hotel", "Witness spectacular Ganga Aarti", "Lamp offerings to river", "Overnight at Varanasi"] },
      { day: 2, title: "Varanasi & Sarnath Tour", activities: ["Morning visit to Varanasi Ghats", "Kashi Vishwanath visit", "Breakfast at hotel", "Sarnath Excursion", "Dhamekha & Chaukhandi Stupa", "Sankat Mochan & Durga Temple", "Silk weaving exploration", "Overnight at Varanasi"] },
      { day: 3, title: "Prayag Visit & Move to Ayodhya", activities: ["Drive to Ayodhya via Prayag", "Visit Sangam Confluence", "Holy dip at Sangam", "Continue drive to Ayodhya", "Check-in at hotel", "Nageshwar Temple & Saryu Aarti", "Overnight at Ayodhya"] },
      { day: 4, title: "Ayodhya & Move to Lucknow", activities: ["Morning visit to Ram Janmabhoomi", "Hanuman Garhi & Kanak Bhawan", "Drive to Lucknow", "Check-in and evening Local Market visit", "Overnight at Lucknow"] },
      { day: 5, title: "Lucknow City Tour & Departure", activities: ["Half day city tour including Bara Imambara", "Visit Jama Masjid & Rumi Darwaza", "Presidency & Chikankari products shopping", "Transfer to Airport/Station"] }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "18,300/-", pax4: "14,550/-", pax6: "12,500/-", pax8: "12,800/-", pax10: "11,900/-", pax12: "11,300/-" },
      { category: "Luxury", pax2: "22,250/-", pax4: "18,500/-", pax6: "16,500/-", pax8: "16,750/-", pax10: "15,850/-", pax12: "15,250/-" },
      { category: "Premium", pax2: "26,000/-", pax4: "22,250/-", pax6: "20,200/-", pax8: "20,500/-", pax10: "19,600/-", pax12: "19,000/-" }
    ]
  },
  {
    slug: "grand-up-bihar-spiritual-circuit-6n-7d",
    name: "Grand UP & Bihar Spiritual Circuit",
    duration: "6 Nights / 7 Days",
    location: "Patna | Nalanda | Bodhgaya | Varanasi | Ayodhya | Lucknow",
    price: "27,150/-",
    originalPrice: "0",
    description: "The ultimate pilgrimage covering Buddhist heritage in Nalanda/Rajgir and the divine cities of Varanasi, Ayodhya, and Lucknow.",
    image: "/images/rajasthan.png",
    inclusions: ["Multicity AC Transfers", "Nalanda & Rajgir visit", "Gaya Pinda Dan assistance", "Subah-e-Banaras experience", "Naimisharanya excursion"],
    itinerary: [
      { day: 1, title: "Patna to Bodhgaya via Nalanda", activities: ["Arrival at Patna", "Visit Nalanda (Ancient University)", "Visit Rajgir (Buddhist Council site)", "Vultures Peak (Gridhakuta)", "Drive to Bodhgaya", "Overnight at Bodhgaya"] },
      { day: 2, title: "Gaya Teerth & Move to Varanasi", activities: ["Gaya Rituals (Pinda Dan) at Vishnupad Temple", "Visit Akshy Vat & Sita Kund", "Post lunch Mahabodhi Temple visit", "Thai Temple & 80 feet Buddha", "Drive to Varanasi", "Overnight at Varanasi"] },
      { day: 3, title: "Varanasi & Sarnath Full Day", activities: ["Early morning Ghats visit & Holy dip", "Kashi Vishwanath Temple", "Breakfast at hotel", "Full day Sarnath excursion", "Temple tour (Sankat Mochan, Durga Temple)", "Overnight at Varanasi"] },
      { day: 4, title: "Sitamarhi & Prayagraj Sangam", activities: ["Drive to Sitamarhi (Valmiki Ashram)", "Visit Sita Mata Temple & Hanuman Statue", "Drive to Prayagraj Sangam", "Holy dip at Confluence", "Check-in & Overnight at Prayag"] },
      { day: 5, title: "Ayodhya Sightseeing", activities: ["Drive to Ayodhya", "Check-in at hotel", "Visit Ram Janmabhoomi birthplace", "Hanuman Garhi & Kanak Bhawan", "Ram ki Paidi & Saryu Aarti witness", "Overnight at Ayodhya"] },
      { day: 6, title: "Naimisharanya & Move to Lucknow", activities: ["Drive to Naimisharanya", "Visit Chakra Theerth & Hanuman Gaddi", "Lalitha Devi & Pandav Kila visit", "Drive to Lucknow", "Check-in & Overnight at Lucknow"] },
      { day: 7, title: "Lucknow & Departure", activities: ["Morning Breakfast", "Lucknow City Tour (Bara Imambara, Rumi Darwaza)", "Presidency and old market Chikankari shopping", "In-time transfer to Airport/Station"] }
    ],
    pricingTable: [
      { category: "Deluxe", pax2: "27,150/-", pax4: "23,400/-", pax6: "19,700/-", pax8: "20,900/-", pax10: "19,200/-", pax12: "18,000/-" },
      { category: "Luxury", pax2: "32,250/-", pax4: "28,500/-", pax6: "24,750/-", pax8: "26,000/-", pax10: "24,250/-", pax12: "23,100/-" },
      { category: "Premium", pax2: "38,500/-", pax4: "34,750/-", pax6: "31,000/-", pax8: "32,250/-", pax10: "30,500/-", pax12: "29,400/-" }
    ]
  }
];

export const CHILD_POLICY = [
  "Children above 10+ years will be charged 100% as per Adult Rate (EPSR)",
  "Children of 5+ to 10 year sharing parents' room will be charged as per CWB or CNB",
  "Children below 5 years Complimentary",
  "Note: Hotels follow strict rules for child policy. ID/age proof is required for check-in."
];

export const GENERAL_INCLUSIONS = [
  "Meet & Greet upon arrival at Airport / Station",
  "Hotel Accommodation as per the name mentioned in the Category",
  "Daily Breakfast at hotels",
  "All transfers and sightseeing as per itinerary"
];

export const GENERAL_EXCLUSIONS = [
  "Government Service Tax (currently 5%)",
  "Airfare, Train fare, and Insurance Premiums",
  "Personal expenses (laundry, bottled water, tips, etc.)",
  "Sightseeing entrance fees, Guide charges, Boat charges",
  "Cost arising due to natural calamities, landslides, or road blockages",
  "Any other service not mentioned in the inclusions"
];

export const CANCELLATION_POLICY = [
  { duration: "30 - 21 days", refund: "25% of total billing amount" },
  { duration: "21 - 15 days", refund: "50% of total billing amount" },
  { duration: "15 - 07 days", refund: "75% of total billing amount" },
  { duration: "Less than 07 days", refund: "No Refund" }
];

export const HOTEL_REFERENCE = [
  { city: "Bodhgaya", deluxe: "Jataka Inn / similar", luxury: "Anand International / similar", premium: "Sarovar Marassa / Similar" },
  { city: "Varanasi", deluxe: "Primeland / Silk City / Similar", luxury: "India Benaras / Similar", premium: "Madin / Similar" },
  { city: "Prayagraj", deluxe: "Vitthal International / Similar", luxury: "Placid / Similar", premium: "ITC Welcome / similar +" },
  { city: "Ayodhya", deluxe: "Club House /Sterling / similar", luxury: "Padamshree Palace / Cygnet/ similar", premium: "Ira by Orchid / similar" },
  { city: "Lucknow", deluxe: "Ranvir’s/ Similar", luxury: "Lemon Tree / similar", premium: "Picadilly / Similar" }
];
