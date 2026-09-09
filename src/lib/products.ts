import { Product } from './types'

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Void Serpent Choker',
    description: 'Handcrafted PVC choker with silver serpent charm and adjustable chain. A statement piece channeling cosmic darkness.',
    price: 45.00,
    category: 'chokers',
    image: '/demo/instagram/01.jpg',
    madeToOrder: true,
    estimatedDays: 7
  },
  {
    id: '2',
    name: 'Nebula Resin Ring',
    description: 'Transparent resin ring infused with violet glitter and silver flakes, capturing the essence of distant nebulae.',
    price: 28.00,
    category: 'rings',
    image: '/demo/instagram/02.jpg',
    madeToOrder: true,
    estimatedDays: 5
  },
  {
    id: '3',
    name: 'Lunar Phase Earrings',
    description: 'Sterling silver crescent moon earrings with geometric Art Deco detailing. Celebrate the cycles of darkness and light.',
    price: 38.00,
    category: 'earrings',
    image: '/demo/instagram/03.jpg',
    madeToOrder: false
  },
  {
    id: '4',
    name: 'Gothic Pentacle Bracelet',
    description: 'Adjustable chain bracelet featuring hand-cast pentacle charm. For modern witches and occult enthusiasts.',
    price: 42.00,
    category: 'bracelets',
    image: '/demo/instagram/04.jpg',
    madeToOrder: true,
    estimatedDays: 7
  },
  {
    id: '5',
    name: 'Cyber Hex Choker',
    description: 'Black PVC base with toxic green hex pattern and silver hardware. Dieselpunk meets dark future.',
    price: 52.00,
    category: 'chokers',
    image: '/demo/instagram/05.jpg',
    madeToOrder: true,
    estimatedDays: 10
  },
  {
    id: '6',
    name: 'Starlight Resin Bangle',
    description: 'Wide resin bangle with embedded silver leaf and cosmic purple swirls. Each piece is completely unique.',
    price: 48.00,
    category: 'bracelets',
    image: '/demo/instagram/06.jpg',
    madeToOrder: true,
    estimatedDays: 6
  },
  {
    id: '7',
    name: 'Occult Sigil Ring',
    description: 'Hand-engraved brass ring featuring custom sigil design. A talisman for personal power and mysticism.',
    price: 35.00,
    category: 'rings',
    image: '/demo/instagram/07.jpg',
    madeToOrder: true,
    estimatedDays: 14
  },
  {
    id: '8',
    name: 'Deco Diamond Studs',
    description: 'Geometric Art Deco inspired silver studs. Minimalist elegance with gothic undertones.',
    price: 32.00,
    category: 'earrings',
    image: '/demo/instagram/08.jpg',
    madeToOrder: false
  },
  {
    id: '9',
    name: 'Ritual Waist Chain',
    description: 'Adjustable chain belt with hanging moon charms and violet crystal beads. Festival and ritual wear.',
    price: 58.00,
    category: 'accessories',
    image: '/demo/instagram/09.jpg',
    madeToOrder: true,
    estimatedDays: 8
  },
  {
    id: '10',
    name: 'Cosmic Collar Necklace',
    description: 'Statement collar piece with layered chains and celestial charms. Art Deco meets cosmic goth.',
    price: 68.00,
    category: 'chokers',
    image: '/demo/instagram/10.jpg',
    madeToOrder: true,
    estimatedDays: 12
  },
  {
    id: '11',
    name: 'Shadow Crystal Ring',
    description: 'Black resin ring with embedded raw amethyst crystal. Natural stone meets handcrafted design.',
    price: 40.00,
    category: 'rings',
    image: '/demo/instagram/07.jpg',
    madeToOrder: true,
    estimatedDays: 7
  },
  {
    id: '12',
    name: 'Witching Hour Earrings',
    description: 'Long chain earrings with pentacle and crescent moon charms. Statement pieces for the bold.',
    price: 44.00,
    category: 'earrings',
    image: '/demo/instagram/08.jpg',
    madeToOrder: false
  }
]

export const CATEGORIES = [
  { value: 'all', label: 'Alle Artefakte' },
  { value: 'chokers', label: 'Chokers' },
  { value: 'bracelets', label: 'Armbänder' },
  { value: 'rings', label: 'Ringe' },
  { value: 'earrings', label: 'Ohrringe' },
  { value: 'accessories', label: 'Accessoires' }
] as const
