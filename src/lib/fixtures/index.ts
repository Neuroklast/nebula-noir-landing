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
  '01','02','03','04','05','06','07','08','09','10',
].map((n, i) => ({
  id: `ig-${n}`,
  caption: '@nebula_noir.official',
  mediaType: 'IMAGE',
  mediaUrl: `/demo/instagram/${n}.jpg`,
  permalink: 'https://www.instagram.com/nebula_noir.official/',
  timestamp: new Date(Date.UTC(2026, 7, 1 + i * 3)).toISOString(),
}))

export function isJewelryCategory(value: string): value is JewelryCategory {
  return ['chokers', 'bracelets', 'rings', 'earrings', 'accessories'].includes(value)
}
