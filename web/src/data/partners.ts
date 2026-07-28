export interface Partner {
  id: string
  name: string
  handle: string
  url: string
  website: string
  logo: string
  logoBg: string
  tagline: string
  description: string
  highlights: string[]
}

export const partners: Partner[] = [
  {
    id: 'boutique-fashion',
    name: 'Boutique Fashion',
    handle: '@boutiquefashionshop',
    url: 'https://instagram.com/boutiquefashionshop',
    website: 'https://www.boutiquefashion.shop/',
    logo: '/images/partners/boutique-fashion.png',
    logoBg: '#2a1f1a',
    tagline: 'Fashion brand partner',
    description:
      'Curated bridal wear and custom wedding styling — sarees, designer blouses, and ceremony looks planned around your budget and vision.',
    highlights: [
      'Bridal Sarees & Designer Blouses',
      'Customised Wedding Outfits',
      'Bride & Groom Styling Assistance',
      'Family Outfit Coordination',
    ],
  },
  {
    id: 'pixel-solution',
    name: 'Pixel Solution',
    handle: '@pixelsolutiondigitalmarketing',
    url: 'https://instagram.com/pixelsolutiondigitalmarketing',
    website: 'https://www.pixelsolution.in/',
    logo: '/images/partners/pixel-solution.png',
    logoBg: '#0a0a0a',
    tagline: 'Digital brand partner',
    description:
      'Wedding-focused digital marketing — reels, creatives, and content that tell your story from save-the-date to the big day.',
    highlights: [
      'Social Media Marketing & Content Strategy',
      'Wedding Reels & Creative Post Designs',
      'Digital Wedding Videos',
      'Standee, Stickers & Templates',
    ],
  },
]
