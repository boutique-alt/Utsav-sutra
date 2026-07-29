export interface ShowcaseImage {
  src: string
  alt: string
  albumId?: string
}

export const groomShowcaseImages: ShowcaseImage[] = [
  { src: '/images/about/groom/1.png', alt: 'Groom wedding look' },
  { src: '/images/about/groom/2.png', alt: 'Groom ceremony styling' },
  { src: '/images/about/groom/3.png', alt: 'Groom festive attire' },
]

export const decorShowcaseImages: ShowcaseImage[] = [
  {
    src: '/images/gallery/haldi-decor.png',
    alt: 'Haldi décor setup',
    albumId: 'haldi-decor',
  },
  {
    src: '/images/gallery/mehendi-decor.png',
    alt: 'Mehendi décor styling',
    albumId: 'mehendi-decor',
  },
  {
    src: '/images/gallery/wedding-headgear.png',
    alt: 'Wedding headgear display',
    albumId: 'wedding-headgear',
  },
  {
    src: '/images/gallery/hand-painted-designs.png',
    alt: 'Hand painted designs',
    albumId: 'hand-painted',
  },
  {
    src: '/images/gallery/wedding-tray-decor.png',
    alt: 'Wedding tray décor',
    albumId: 'wedding-tray',
  },
]

export const brideShowcaseImages: ShowcaseImage[] = [
  { src: '/images/about/bride/1.png', alt: 'Bridal wedding look' },
  { src: '/images/about/bride/2.png', alt: 'Bridal ceremony styling' },
  { src: '/images/about/bride/3.png', alt: 'Bridal festive attire' },
  { src: '/images/about/bride/4.png', alt: 'Bridal couture look' },
]
