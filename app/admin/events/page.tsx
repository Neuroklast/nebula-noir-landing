import { EventsManager } from '@/components/admin/EventsManager'
import { getEvents } from '@/lib/data'
import { isDemoMode } from '@/lib/env'

export default async function AdminEventsPage() {
  const events = await getEvents()
  return (
    <div className="space-y-8">
      <h2 className="text-3xl uppercase tracking-[0.2em] bioshock-glow-animated">Events</h2>
      <EventsManager events={events} demo={isDemoMode()} />
    </div>
  )
}
