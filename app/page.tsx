import { HomePage } from '@/components/HomePage'
import { brandMap, galleryAsProducts, getBrandInfo, getEvents, getGallery, getHeroVideoUrl, getInstagramPosts } from '@/lib/data'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const [gallery, brandInfo, events, instagram, heroVideoUrl] = await Promise.all([
    getGallery(),
    getBrandInfo(),
    getEvents(),
    getInstagramPosts(),
    getHeroVideoUrl(),
  ])

  return (
    <HomePage
      products={galleryAsProducts(gallery)}
      brandInfo={brandMap(brandInfo)}
      events={events}
      instagram={instagram}
      heroVideoUrl={heroVideoUrl}
    />
  )
}
