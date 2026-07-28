export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'garland', label: 'Garland' },
  { id: 'decor', label: 'Décor' },
] as const

export type GalleryCategory = 'all' | 'garland' | 'decor'

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
    id: 'haldi-decor',
    title: 'Haldi Décor',
    category: 'decor',
    cover: '/images/gallery/haldi-decor.png',
    images: [{ src: '/images/gallery/haldi-decor.png', alt: 'Haldi décor setup' }],
  },
  {
    id: 'mehendi-decor',
    title: 'Mehendi',
    category: 'decor',
    cover: '/images/gallery/mehendi-decor.png',
    images: [{ src: '/images/gallery/mehendi-decor.png', alt: 'Mehendi décor' }],
  },
  {
    id: 'wedding-headgear',
    title: 'Wedding Headgear',
    category: 'decor',
    cover: '/images/gallery/wedding-headgear.png',
    images: [{ src: '/images/gallery/wedding-headgear.png', alt: 'Wedding headgear' }],
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
    images: [{ src: '/images/gallery/wedding-tray-decor.png', alt: 'Wedding tray décor' }],
  },
  {
    id: 'samples-garland',
    title: 'Garland Samples',
    category: 'garland',
    cover: '/images/gallery/samples-garland.png',
    images: [{ src: '/images/gallery/samples-garland.png', alt: 'Garland samples collection' }],
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
