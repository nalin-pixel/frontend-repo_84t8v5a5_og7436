import { useEffect, useState } from 'react'

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/events`)
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchEvents()
  }, [])

  return (
    <section id="events" className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Events & Announcements</h2>
        <p className="text-gray-600">Stay updated with what's happening on campus</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.length === 0 && (
          <div className="text-gray-600">No events yet.</div>
        )}
        {events.map((e) => (
          <div key={e.id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-500">{new Date(e.date).toLocaleDateString()}</p>
            <h3 className="font-semibold text-lg text-gray-900">{e.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{e.location}</p>
            <p className="text-gray-700 mt-2">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
