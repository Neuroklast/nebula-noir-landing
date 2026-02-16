import { Product } from './types'

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Void Serpent Choker',
    description: 'Handcrafted PVC choker with silver serpent charm and adjustable chain. A statement piece channeling cosmic darkness.',
    price: 45.00,
    category: 'chokers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 7
  },
  {
    id: '2',
    name: 'Nebula Resin Ring',
    description: 'Transparent resin ring infused with violet glitter and silver flakes, capturing the essence of distant nebulae.',
    price: 28.00,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 5
  },
  {
    id: '3',
    name: 'Lunar Phase Earrings',
    description: 'Sterling silver crescent moon earrings with geometric Art Deco detailing. Celebrate the cycles of darkness and light.',
    price: 38.00,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    madeToOrder: false
  },
  {
    id: '4',
    name: 'Gothic Pentacle Bracelet',
    description: 'Adjustable chain bracelet featuring hand-cast pentacle charm. For modern witches and occult enthusiasts.',
    price: 42.00,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 7
  },
  {
    id: '5',
    name: 'Cyber Hex Choker',
    description: 'Black PVC base with toxic green hex pattern and silver hardware. Dieselpunk meets dark future.',
    price: 52.00,
    category: 'chokers',
    image: 'https://images.unsplash.com/photo-1610217438102-c550ab935b72?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 10
  },
  {
    id: '6',
    name: 'Starlight Resin Bangle',
    description: 'Wide resin bangle with embedded silver leaf and cosmic purple swirls. Each piece is completely unique.',
    price: 48.00,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 6
  },
  {
    id: '7',
    name: 'Occult Sigil Ring',
    description: 'Hand-engraved brass ring featuring custom sigil design. A talisman for personal power and mysticism.',
    price: 35.00,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 14
  },
  {
    id: '8',
    name: 'Deco Diamond Studs',
    description: 'Geometric Art Deco inspired silver studs. Minimalist elegance with gothic undertones.',
    price: 32.00,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    madeToOrder: false
  },
  {
    id: '9',
    name: 'Ritual Waist Chain',
    description: 'Adjustable chain belt with hanging moon charms and violet crystal beads. Festival and ritual wear.',
    price: 58.00,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 8
  },
  {
    id: '10',
    name: 'Cosmic Collar Necklace',
    description: 'Statement collar piece with layered chains and celestial charms. Art Deco meets cosmic goth.',
    price: 68.00,
    category: 'chokers',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 12
  },
  {
    id: '11',
    name: 'Shadow Crystal Ring',
    description: 'Black resin ring with embedded raw amethyst crystal. Natural stone meets handcrafted design.',
    price: 40.00,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    madeToOrder: true,
    estimatedDays: 7
  },
  {
    id: '12',
    name: 'Witching Hour Earrings',
    description: 'Long chain earrings with pentacle and crescent moon charms. Statement pieces for the bold.',
    price: 44.00,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
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
