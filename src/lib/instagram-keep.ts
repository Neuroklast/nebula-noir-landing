// Ids still in this Graph response. A post with no image stays, so prune
// does not delete a reel that is still in the feed.
export function feedKeepIds(items: { id?: string }[]): string[] {
  return items.flatMap((item) => (item.id ? [item.id] : []))
}

// Nothing stored this run: do not delete the posts already on the site.
export function shouldPruneInstagram(stored: number, keepIds: string[]): boolean {
  return stored > 0 && keepIds.length > 0
}

export type FeedMedia = {
  id?: string
  media_type?: string
  media_url?: string
  thumbnail_url?: string
  children?: { data?: Array<{ media_type?: string; media_url?: string; thumbnail_url?: string }> }
}

export function imageForInstagramMedia(item: FeedMedia): string | undefined {
  if (item.media_type === 'VIDEO') return item.thumbnail_url
  if (item.media_type === 'CAROUSEL_ALBUM') {
    const children = item.children?.data ?? []
    const image = children.find((child) => child.media_type === 'IMAGE')
    const video = children.find((child) => child.media_type === 'VIDEO')
    return image?.media_url || image?.thumbnail_url || video?.thumbnail_url || item.thumbnail_url
  }
  return item.media_url || item.thumbnail_url
}

/** Restrict server-side fetches to media hosts used by Instagram. */
export function trustedInstagramImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    const hostname = parsed.hostname.toLowerCase()
    return parsed.protocol === 'https:' &&
      ['cdninstagram.com', 'fbcdn.net', 'fbsbx.com', 'instagram.com'].some(
        (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
      )
  } catch {
    return false
  }
}

/** Visitors may refresh the cached gallery without an external scheduler.
 * A failed attempt backs off, and an active lease prevents concurrent work.
 */
export function shouldRefreshInstagram(
  state: { last_attempt_at?: string | null; last_success_at?: string | null; locked_until?: string | null } | null,
  now = Date.now()
): boolean {
  const time = (value?: string | null) => value ? Date.parse(value) : Number.NaN
  const lockUntil = time(state?.locked_until)
  if (Number.isFinite(lockUntil) && lockUntil > now) return false

  const lastSuccess = time(state?.last_success_at)
  if (Number.isFinite(lastSuccess) && now - lastSuccess < 30 * 60_000) return false

  const lastAttempt = time(state?.last_attempt_at)
  if (Number.isFinite(lastAttempt) && now - lastAttempt < 15 * 60_000) return false

  return true
}
