import { after } from 'next/server'
import { HomePage } from '@/components/HomePage'
import { brandMap, galleryAsProducts, getBrandInfo, getCategories, getEvents, getGallery, getHeroVideoUrl, getInstagramPosts } from '@/lib/data'

export const dynamic = 'force-dynamic'
// Also supported by Hobby projects without Fluid Compute.
export const maxDuration = 60

export default async function Page() {
  // Serve existing cached images immediately, refresh only after the response.
  after(async () => {
    try {
      // Load the Instagram/R2 SDK only after the page has been delivered.
      const { refreshInstagramIfStale } = await import('@/lib/instagram')
      await refreshInstagramIfStale()
    } catch (error) {
      console.error('[instagram] background refresh crashed', error)
    }
  })

  const [gallery, brandInfo, events, instagram, heroVideoUrl, categories] = await Promise.all([
    getGallery(),
    getBrandInfo(),
    getEvents({ upcomingOnly: true }),
    getInstagramPosts(),
    getHeroVideoUrl(),
    getCategories(),
  ])

  return (
    <HomePage
      products={galleryAsProducts(gallery)}
      brandInfo={brandMap(brandInfo)}
      events={events}
      instagram={instagram}
      heroVideoUrl={heroVideoUrl}
      categories={categories}
    />
  )
}
