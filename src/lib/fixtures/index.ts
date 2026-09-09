import { PRODUCTS, CATEGORIES } from '@/lib/products'
import type { BrandInfo, EventItem, GalleryItem, InstagramPost, JewelryCategory, Product } from '@/lib/types'

export const fixtureCategories = CATEGORIES.filter((c) => c.value !== 'all')

export function productsToGallery(products: Product[]): GalleryItem[] {
  return products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
    image: p.image,
    alt: p.name,
  }))
}

export const fixtureGallery: GalleryItem[] = productsToGallery(PRODUCTS)

export const fixtureBrandInfo: BrandInfo[] = [
  {
    key: 'mission',
    title: 'Mission',
    body: 'Wir fertigen okkulte und alternative Accessoires, die die Grenze zwischen Eleganz und Kink überschreiten. Jedes Stück ist ein handgefertigtes Artefakt, das Dunkelheit tragbar und ästhetisch macht.',
  },
  {
    key: 'identity',
    title: 'Identität',
    body: 'Cosmic Art Deco Goth. Die Fusion aus der geometrischen Präzision des Art Déco (1920er), der unendlichen Tiefe kosmischer Nebel und der dunklen Ästhetik der Gothic-Subkultur.',
  },
  {
    key: 'craft',
    title: 'Handwerk',
    body: 'Jedes Produkt wird mit akribischer Liebe zum Detail von Hand gefertigt, unter Verwendung von Resin, PVC und Edelmetallen. Keine Massenproduktion—nur einzigartige Stücke für nonkonformistische Seelen.',
  },
  {
    key: 'value_handwerk',
    title: 'Handwerk',
    body: 'Jedes Produkt ist ein Unikat, akribisch von Hand gefertigt aus hochwertigen Materialien.',
  },
  {
    key: 'value_aesthetik',
    title: 'Dunkle Ästhetik',
    body: 'Schönheit existiert im Schatten, im Bizarren, im kompromisslos Unkonventionellen.',
  },
  {
    key: 'value_individualitaet',
    title: 'Individualität',
    body: 'Schmuck als Ausdruck nonkonformistischer Identität und persönlicher Mystik.',
  },
  {
    key: 'value_inklusivitaet',
    title: 'Inklusivität',
    body: 'Accessoires für alle Körperformen, Geschlechtsidentitäten und ästhetischen Präferenzen.',
  },
  {
    key: 'quote',
    title: 'Zitat',
    body: 'Für moderne Hexen, Gothic-Seelen und alle, die Eleganz in der Leere finden.',
  },
]

export const fixtureEvents: EventItem[] = [
  {
    id: 'wgt-2026',
    title: 'Wave-Gotik-Treffen',
    venue: 'Agra-Messepark',
    city: 'Leipzig',
    startsAt: '2026-05-21T10:00:00+02:00',
    endsAt: '2026-05-25T22:00:00+02:00',
    description: 'Nebula Noir Stand — Cosmic Art Deco Goth Artefakte vor Ort.',
    url: 'https://www.wave-gotik-treffen.de',
  },
  {
    id: 'mera-2026',
    title: "M'era Luna",
    venue: 'Flugplatz',
    city: 'Hildesheim',
    startsAt: '2026-08-08T10:00:00+02:00',
    endsAt: '2026-08-09T23:00:00+02:00',
    description: 'Festival-Stand mit aktueller Kollektion und Maßanfertigungs-Beratung.',
    url: 'https://www.meraluna.de',
  },
]

export const fixtureInstagram: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Void Serpent Choker — Cosmic Art Deco Goth.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    permalink: 'https://www.instagram.com/nebula_noir.official/',
    timestamp: '2026-08-01T12:00:00Z',
  },
  {
    id: 'ig-2',
    caption: 'Nebula Resin Ring.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    permalink: 'https://www.instagram.com/nebula_noir.official/',
    timestamp: '2026-08-04T12:00:00Z',
  },
  {
    id: 'ig-3',
    caption: 'Lunar Phase Earrings.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    permalink: 'https://www.instagram.com/nebula_noir.official/',
    timestamp: '2026-08-08T12:00:00Z',
  },
  {
    id: 'ig-4',
    caption: 'Gothic Pentacle Bracelet.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    permalink: 'https://www.instagram.com/nebula_noir.official/',
    timestamp: '2026-08-12T12:00:00Z',
  },
  {
    id: 'ig-5',
    caption: 'Starlight Resin Bangle.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    permalink: 'https://www.instagram.com/nebula_noir.official/',
    timestamp: '2026-08-16T12:00:00Z',
  },
  {
    id: 'ig-6',
    caption: 'Cosmic Collar Necklace.',
    mediaType: 'IMAGE',
    mediaUrl: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    permalink: 'https://www.instagram.com/nebula_noir.official/',
    timestamp: '2026-08-20T12:00:00Z',
  },
]

export function isJewelryCategory(value: string): value is JewelryCategory {
  return ['chokers', 'bracelets', 'rings', 'earrings', 'accessories'].includes(value)
}
