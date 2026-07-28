export interface Service {
  id: string
  title: string
  features: string[]
  image?: string
  partnerNote?: string
  partnerHandle?: string
  partnerUrl?: string
}

/** Exact services from Utsav Sutra Portfolio.pdf (detail pages) */
export const services: Service[] = [
  {
    id: 'wedding-rituals',
    title: 'Wedding Rituals',
    image: '/images/services/wedding-rituals.png',
    features: [
      'End-to-End Wedding Planning',
      'Wedding Day Coordination',
      'Vendor Management',
      'Guest Hospitality',
      'Timeline & Event Management',
    ],
  },
  {
    id: 'wedding-decor',
    title: 'Wedding Decor',
    image: '/images/services/wedding-decor.png',
    features: [
      'Wedding Décor & Styling',
      'Wedding Backdrop Design',
      'Stage & Mandap Decorations',
      'Entrance Decorations',
      'Floral Styling',
      'Reception Décor',
      'Theme-Based Wedding Decorations',
    ],
  },
  {
    id: 'bridal-couture',
    title: 'Bridal Couture',
    image: '/images/services/bridal-couture.png',
    features: [
      'Bridal Sarees',
      'Designer Bridal Blouses',
      'Bridal Lehengas',
      'Custom Bridal Styling',
      'Outfit & Accessories Consultation',
    ],
  },
  {
    id: 'bridal-beauty',
    title: 'Bridal Beauty',
    image: '/images/services/bridal-beauty.png',
    features: [
      'Professional Bridal Makeup',
      'HD & Airbrush Makeup',
      'Hair Styling',
      'Pre-Bridal Grooming',
      'Draping & Jewellery Styling',
    ],
  },
  {
    id: 'photography-films',
    title: 'Photography & Films',
    image: '/images/services/photography-films.png',
    features: [
      'Pre-Wedding Shoots',
      'Wedding Photography',
      'Cinematic Wedding Films',
      'Candid Photography',
      'Drone Photography',
      'Wedding Reels',
    ],
  },
  {
    id: 'totto-gifts',
    title: 'Totto & Luxury Gift',
    image: '/images/services/totto-gifts.png',
    features: [
      'Lehenga Totto Decorations',
      'Jewellery Totto',
      'Cosmetic Totto',
      'Gift Hamper Decorations',
      'Dry Fruit & Sweet Hampers',
      'Customized Wedding Gift Packaging',
    ],
  },
  {
    id: 'mehendi-haldi-sangeet',
    title: 'Mehendi, Haldi & Sangeet',
    image: '/images/services/mehendi-haldi-sangeet.png',
    features: [
      'Mehendi Decorations',
      'Haldi Ceremony Planning',
      'Sangeet Stage Setup',
      'Dance Floor Design',
      'Theme Decorations',
      'Entertainment Coordination',
    ],
  },
  {
    id: 'catering-hospitality',
    title: 'Catering & Hospitality',
    image: '/images/services/catering-hospitality.png',
    features: [
      'Premium Catering Services',
      'Live Food Counters',
      'Buffet Arrangement',
      'Dessert Stations',
      'Guest Hospitality',
      'Service Staff Management',
    ],
  },
  {
    id: 'bridal-car',
    title: 'Bridal Car Services',
    image: '/images/services/bridal-car.png',
    features: [
      'Bridal Car Decorations',
      'Car on rental basis',
      'Luxury Car Arrangements',
      'Vintage Car Booking',
      'Guest Transportation',
    ],
  },
  {
    id: 'wedding-essentials',
    title: 'Wedding Essentials',
    image: '/images/services/wedding-essentials.png',
    features: [
      'Invitation Card Design',
      'Digital Wedding Invitations',
      'Wedding Stationery',
      'Marriage Puja Essentials',
      'Return Gifts & Wedding Favours',
      'Personalized Shopping Assistance',
    ],
  },
]

/** Exact overview list from Portfolio.pdf — OUR SERVICES page */
export const overviewServices = [
  'Prewedding & Wedding Photographer',
  'Makeup Artist',
  'Engagement Ceremony Planning',
  'Totto & Gift Decoration',
  'Catering & Hospitality',
  'Bridal Sarees & Blouses',
  'Mehendi & Sangeet Arrangement',
  'Haldi Planning',
  'Luxury Transportation',
  'Wedding Decorations',
  'Wedding Priest & Puja Arrangement',
  'Anchor & DJ Management',
]
