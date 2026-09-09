'use server'

import { revalidatePath } from 'next/cache'
import { isR2Configured } from '@/lib/env'
import { getAdminUser } from '@/lib/auth'
import { createServerSupabase } from '@/lib/supabase/server'
import { deleteFromR2 } from '@/lib/r2'
import { syncInstagramPosts } from '@/lib/instagram'

async function requireAdmin() {
  const session = await getAdminUser()
  if (session.demo) return { demo: true as const }
  if (!session.isAdmin) return { error: 'Nicht autorisiert' as const }
  return { demo: false as const }
}

export async function saveBrandInfo(key: string, title: string, body: string) {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Speichern deaktiviert' }
  const supabase = await createServerSupabase()
  if (!supabase) return { ok: false as const, error: 'Supabase fehlt' }
  const { error } = await supabase.from('brand_info').upsert({ key, title, body, updated_at: new Date().toISOString() }, { onConflict: 'key' })
  if (error) return { ok: false as const, error: error.message }
  revalidatePath('/')
  return { ok: true as const }
}

export async function saveEvent(input: {
  id?: string
  title: string
  venue: string
  city: string
  startsAt: string
  endsAt?: string
  description: string
  url?: string
  published: boolean
}) {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Speichern deaktiviert' }
  const supabase = await createServerSupabase()
  if (!supabase) return { ok: false as const, error: 'Supabase fehlt' }
  const toIso = (value: string) => {
    if (!value) return null
    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? value : date.toISOString()
  }
  const payload = {
    title: input.title,
    venue: input.venue,
    city: input.city,
    starts_at: toIso(input.startsAt) || input.startsAt,
    ends_at: toIso(input.endsAt || ''),
    description: input.description,
    url: input.url || null,
    published: input.published,
  }
  const query = input.id
    ? supabase.from('events').update(payload).eq('id', input.id)
    : supabase.from('events').insert(payload)
  const { error } = await query
  if (error) return { ok: false as const, error: error.message }
  revalidatePath('/')
  revalidatePath('/admin/events')
  return { ok: true as const }
}

export async function deleteEvent(id: string) {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Speichern deaktiviert' }
  const supabase = await createServerSupabase()
  if (!supabase) return { ok: false as const, error: 'Supabase fehlt' }
  const { error } = await supabase.from('events').delete().eq('id', id)
  if (error) return { ok: false as const, error: error.message }
  revalidatePath('/')
  return { ok: true as const }
}

export async function markInquiryRead(id: string, read: boolean) {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Speichern deaktiviert' }
  const supabase = await createServerSupabase()
  if (!supabase) return { ok: false as const, error: 'Supabase fehlt' }
  const { error } = await supabase.from('contact_inquiries').update({ read }).eq('id', id)
  if (error) return { ok: false as const, error: error.message }
  revalidatePath('/admin/inquiries')
  return { ok: true as const }
}

export async function deleteGalleryImage(id: string) {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Speichern deaktiviert' }
  const supabase = await createServerSupabase()
  if (!supabase) return { ok: false as const, error: 'Supabase fehlt' }
  const { data } = await supabase.from('gallery_images').select('r2_key').eq('id', id).maybeSingle()
  if (data?.r2_key && isR2Configured()) {
    try {
      await deleteFromR2(data.r2_key as string)
    } catch {
      // continue deleting row
    }
  }
  const { error } = await supabase.from('gallery_images').delete().eq('id', id)
  if (error) return { ok: false as const, error: error.message }
  revalidatePath('/')
  revalidatePath('/admin/gallery')
  return { ok: true as const }
}

export async function updateGalleryMeta(id: string, input: {
  title: string
  description: string
  published: boolean
  sortOrder: number
}) {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Speichern deaktiviert' }
  const supabase = await createServerSupabase()
  if (!supabase) return { ok: false as const, error: 'Supabase fehlt' }
  const { error } = await supabase
    .from('gallery_images')
    .update({
      title: input.title,
      description: input.description,
      published: input.published,
      sort_order: input.sortOrder,
    })
    .eq('id', id)
  if (error) return { ok: false as const, error: error.message }
  revalidatePath('/')
  return { ok: true as const }
}

export async function triggerInstagramSync() {
  const gate = await requireAdmin()
  if ('error' in gate) return { ok: false as const, error: gate.error }
  if (gate.demo) return { ok: false as const, error: 'Demo Mode: Sync deaktiviert' }
  const result = await syncInstagramPosts()
  if (!result.ok) return { ok: false as const, error: result.error || 'Sync fehlgeschlagen' }
  revalidatePath('/')
  return { ok: true as const, count: result.count }
}
