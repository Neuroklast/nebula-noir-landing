import {
  feedKeepIds,
  imageForInstagramMedia,
  shouldPruneInstagram,
  trustedInstagramImageUrl,
} from '@/lib/instagram-keep'

let failures = 0
function check(name: string, condition: boolean) {
  if (!condition) {
    console.error('FAIL: ' + name)
    failures += 1
  } else {
    console.log('OK: ' + name)
  }
}

check('standard image', imageForInstagramMedia({ media_type: 'IMAGE', media_url: 'https://example.com/a.jpg' }) === 'https://example.com/a.jpg')
check('video uses still and never video bytes', imageForInstagramMedia({
  media_type: 'VIDEO', media_url: 'https://example.com/movie.mp4', thumbnail_url: 'https://example.com/still.jpg',
}) === 'https://example.com/still.jpg')
check('video without still is skipped', !imageForInstagramMedia({
  media_type: 'VIDEO', media_url: 'https://example.com/movie.mp4',
}))
check('carousel prefers first photo', imageForInstagramMedia({
  media_type: 'CAROUSEL_ALBUM', children: { data: [
    { media_type: 'VIDEO', thumbnail_url: 'https://example.com/a.jpg' },
    { media_type: 'IMAGE', media_url: 'https://example.com/b.jpg' },
  ] },
}) === 'https://example.com/b.jpg')
check('carousel falls back to video thumbnail', imageForInstagramMedia({
  media_type: 'CAROUSEL_ALBUM', children: { data: [
    { media_type: 'VIDEO', thumbnail_url: 'https://example.com/a.jpg' },
  ] },
}) === 'https://example.com/a.jpg')
check('no image is never inferred from video URL', !imageForInstagramMedia({
  media_type: 'CAROUSEL_ALBUM', media_url: 'https://example.com/video.mp4',
}))
check('instagram image domain allowed', trustedInstagramImageUrl('https://scontent.cdninstagram.com/a.jpg'))
check('facebook CDN domain allowed', trustedInstagramImageUrl('https://scontent-frx5-2.cdninstagram.com/a.jpg'))
check('fbcdn still allowed', trustedInstagramImageUrl('https://scontent.xx.fbcdn.net/abc.jpg'))
check('https only', !trustedInstagramImageUrl('http://scontent.xx.fbcdn.net/a.jpg'))
check('localhost SSRF blocked', !trustedInstagramImageUrl('http://127.0.0.1:5432/admin'))
check('subdomain impersonation blocked', !trustedInstagramImageUrl('https://scontent.fbcdn.net.evil.test/a.jpg'))
check('URL credential trick blocked', !trustedInstagramImageUrl('https://fbcdn.net@evil.test/a.jpg'))
check('empty URL blocked', !trustedInstagramImageUrl(''))
check('feed retains reels even when no preview exists', feedKeepIds([{ id: 'a' }, { id: 'b' }]).join(',') === 'a,b')
check('empty feed does not prune', !shouldPruneInstagram(0, []))
check('successful non-empty feed can prune', shouldPruneInstagram(2, ['a', 'b']))
if (failures) process.exit(1)
console.log('Instagram media safety tests passed')
