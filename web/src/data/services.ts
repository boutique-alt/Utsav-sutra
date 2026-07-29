export interface Service {
  id: string
  title: string
  features: string[]
  image?: string
  images?: string[]
  layout?: 'split' | 'overlay'
  overlayReverse?: boolean
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
    layout: 'overlay',
    overlayReverse: true,
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
    layout: 'overlay',
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
    layout: 'overlay',
    overlayReverse: true,
    features: [
      'Bridal Sarees',
      'Designer Bridal Blouses',
      'Bridal Lehengas',
      'Custom Bridal Styling',
      'Outfit & Accessories Consultation',
    ],
  },
  {
    id: 'groom-haldi-look',
    title: 'Groom Haldi Look',
    image: '/images/services/haldi-ceremony-wide.png',
    layout: 'overlay',
    overlayReverse: false,
    features: [
      'Haldi Ceremony Kurta Sets',
      'Groom Haldi Outfit Curation',
      'Sangeet & Mehendi Looks',
      'Festive Groom Styling',
      'Outfit & Accessories Consultation',
    ],
  },
  {
    id: 'groom-bandhgala',
    title: 'Groom Bandhgala',
    image: '/images/services/groom-bandhgala-wide.png',
    layout: 'overlay',
    overlayReverse: true,
    features: [
      'Bandhgala & Jodhpuri Suits',
      'Indo-Western Outfits',
      'Designer Groom Blazers',
      'Custom Groom Styling',
      'Outfit & Accessories Consultation',
    ],
  },
  {
    id: 'bridal-beauty',
    title: 'Bridal Beauty',
    image: '/images/services/bridal-beauty.png',
    layout: 'overlay',
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
    layout: 'overlay',
    overlayReverse: true,
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
    layout: 'overlay',
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
    layout: 'overlay',
    overlayReverse: true,
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
    layout: 'overlay',
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
    layout: 'overlay',
    overlayReverse: true,
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
    layout: 'overlay',
    features: [
      'Invitation Card Design',
      'Digital Wedding Invitations',
      'Wedding Stationery',
      'Marriage Puja Essentials',
      'Return Gifts & Wedding Favours',
      'Personalized Shopping Assistance',
    ],
  },
  {
    id: 'groom-sherwani',
    title: 'Groom Sherwani',
    image: '/images/services/groom-sherwani-wide.png',
    layout: 'overlay',
    overlayReverse: true,
    features: [
      'Designer Sherwanis',
      'Embroidered Sherwani Sets',
      'Groom Turban & Safa Styling',
      'Custom Sherwani Tailoring',
      'Outfit & Accessories Consultation',
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
