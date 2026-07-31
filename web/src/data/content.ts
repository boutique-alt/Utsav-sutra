export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'groom', label: 'Groom' },
  { id: 'garland', label: 'Garland' },
  { id: 'decor', label: 'Décor' },
] as const

export type GalleryCategory = 'all' | 'groom' | 'garland' | 'decor'

export interface GalleryImage {
  src: string
  alt: string
}

export interface GalleryAlbum {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'all'>
  cover: string
  images: GalleryImage[]
}

export interface GalleryItem {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'all'>
  src: string
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'groom-sherwani',
    title: 'Groom Sherwani',
    category: 'groom',
    cover: '/images/gallery/groom-sherwani.png',
    images: [{ src: '/images/gallery/groom-sherwani.png', alt: 'Groom in white sherwani' }],
  },
  {
    id: 'groom-bandhgala',
    title: 'Groom Bandhgala',
    category: 'groom',
    cover: '/images/gallery/groom-bandhgala.png',
    images: [{ src: '/images/gallery/groom-bandhgala.png', alt: 'Groom in black bandhgala suit' }],
  },
  {
    id: 'haldi-ceremony',
    title: 'Haldi Ceremony',
    category: 'groom',
    cover: '/images/gallery/haldi-ceremony.png',
    images: [
      { src: '/images/gallery/haldi-ceremony.png', alt: 'Haldi ceremony groom' },
      { src: '/images/gallery/haldi-ceremony-2.png', alt: 'Couple at Haldi with marigold backdrop' },
      { src: '/images/gallery/haldi-ceremony-3.png', alt: 'Haldi celebration in lotus basin' },
    ],
  },
  {
    id: 'haldi-decor',
    title: 'Haldi Décor',
    category: 'decor',
    cover: '/images/gallery/haldi-decor.png',
    images: [
      { src: '/images/gallery/haldi-decor.png', alt: 'Haldi décor setup' },
      { src: '/images/gallery/haldi-decor-2.png', alt: 'Haldi backdrop with marigold and terracotta pots' },
      { src: '/images/gallery/haldi-decor-3.png', alt: 'Haldi hanging umbrellas and marigold décor' },
    ],
  },
  {
    id: 'mehendi-decor',
    title: 'Mehendi',
    category: 'decor',
    cover: '/images/gallery/mehendi-decor.png',
    images: [{ src: '/images/gallery/mehendi-decor.png', alt: 'Mehendi décor' }],
  },
  {
    id: 'wedding-essentials',
    title: 'Wedding Essentials',
    category: 'decor',
    cover: '/images/gallery/wedding-essentials-1.png',
    images: [
      { src: '/images/gallery/wedding-essentials-1.png', alt: 'Royal blue velvet wedding invitation scroll' },
      { src: '/images/gallery/wedding-essentials-2.png', alt: 'Bengali wedding ritual with mangal ghat' },
      { src: '/images/gallery/wedding-essentials-3.png', alt: 'Shola mukut, shakha pola and wedding essentials' },
      { src: '/images/gallery/wedding-essentials-4.png', alt: 'Traditional Bengali groom topor' },
    ],
  },
  {
    id: 'wedding-headgear',
    title: 'Wedding Headgear',
    category: 'decor',
    cover: '/images/gallery/wedding-headgear.png',
    images: [
      { src: '/images/gallery/wedding-headgear.png', alt: 'Wedding headgear' },
      { src: '/images/gallery/wedding-essentials-4.png', alt: 'Traditional Bengali groom topor' },
    ],
  },
  {
    id: 'catering-hospitality',
    title: 'Catering & Hospitality',
    category: 'decor',
    cover: '/images/gallery/catering-1.png',
    images: [
      { src: '/images/gallery/catering-1.png', alt: 'Gold buffet station with floral overhead décor' },
      { src: '/images/gallery/catering-2.png', alt: 'Luxury puchka live counter with crystal chandeliers' },
      { src: '/images/gallery/catering-3.png', alt: 'Outdoor buffet with ornate silver chafing dishes' },
      { src: '/images/gallery/catering-4.png', alt: 'Banquet hall buffet with garnished rice and desserts' },
    ],
  },
  {
    id: 'car-decoration',
    title: 'Car Decoration',
    category: 'decor',
    cover: '/images/gallery/car-decoration-1.png',
    images: [
      { src: '/images/gallery/car-decoration-1.png', alt: 'White car with red and white floral heart décor' },
      { src: '/images/gallery/car-decoration-2.png', alt: 'White SUV with pink gerbera heart car décor' },
      { src: '/images/gallery/car-decoration-3.png', alt: 'Mercedes wedding car with pink ribbon and floral décor' },
      { src: '/images/gallery/car-decoration-4.png', alt: 'Vintage red Ford with white floral hood décor' },
    ],
  },
  {
    id: 'hand-painted',
    title: 'Hand Painted Designs',
    category: 'decor',
    cover: '/images/gallery/hand-painted-designs.png',
    images: [{ src: '/images/gallery/hand-painted-designs.png', alt: 'Hand painted designs' }],
  },
  {
    id: 'bridal-garland',
    title: 'Bridal Garland & Ceremonial Vermilion Box',
    category: 'garland',
    cover: '/images/gallery/bridal-garland.png',
    images: [
      {
        src: '/images/gallery/bridal-garland.png',
        alt: 'Bridal garland and ceremonial vermilion box',
      },
    ],
  },
  {
    id: 'wedding-tray',
    title: 'Wedding Tray Décor',
    category: 'decor',
    cover: '/images/gallery/wedding-tray-decor.png',
    images: [
      { src: '/images/gallery/wedding-tray-decor.png', alt: 'Wedding tray décor' },
      { src: '/images/gallery/wedding-tray-2.png', alt: 'Personalized yellow Haldi ceremony tray' },
      { src: '/images/gallery/wedding-tray-3.png', alt: 'Red and gold bangle ceremony stand' },
      { src: '/images/gallery/wedding-tray-4.png', alt: 'Emerald green Mehendi tray with henna cones' },
      { src: '/images/gallery/wedding-tray-5.png', alt: 'Gold and burgundy wedding ring platter' },
    ],
  },
  {
    id: 'samples-garland',
    title: 'Garland Samples',
    category: 'garland',
    cover: '/images/gallery/samples-garland.png',
    images: [{ src: '/images/gallery/samples-garland.png', alt: 'Garland samples collection' }],
  },
  {
    id: 'photography-films',
    title: 'Photography & Films',
    category: 'decor',
    cover: '/images/gallery/photography-films-1.png',
    images: [
      { src: '/images/gallery/photography-films-1.png', alt: 'Bengali bride and groom wedding portrait with topor' },
      { src: '/images/gallery/photography-films-2.png', alt: 'Couple portrait under wedding chandeliers' },
      { src: '/images/gallery/photography-films-3.png', alt: 'Formal bridal stage portrait in red and cream' },
    ],
  },
  {
    id: 'wedding-decorations',
    title: 'Wedding Decorations',
    category: 'decor',
    cover: '/images/gallery/wedding-decor-1.png',
    images: [
      { src: '/images/gallery/wedding-decor-1.png', alt: 'Traditional stage with red florals and painted pillars' },
      { src: '/images/gallery/wedding-decor-2.png', alt: 'Yellow and white stage with floral circular arch' },
      { src: '/images/gallery/wedding-decor-3.png', alt: 'Gold arched stage with crystal chandeliers' },
      { src: '/images/gallery/wedding-decor-4.png', alt: 'Outdoor mandap with red rose aisle and candles' },
    ],
  },
  {
    id: 'samples-decor',
    title: 'Décor Samples',
    category: 'decor',
    cover: '/images/gallery/samples-decor-1.png',
    images: [
      { src: '/images/gallery/samples-decor-1.png', alt: 'Décor samples collection 1' },
      { src: '/images/gallery/samples-decor-2.png', alt: 'Décor samples collection 2' },
    ],
  },
]

export const galleryItems: GalleryItem[] = galleryAlbums.map((album) => ({
  id: album.id,
  title: album.title,
  category: album.category,
  src: album.cover,
}))
