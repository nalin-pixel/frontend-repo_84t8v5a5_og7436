import { useEffect, useState } from 'react'

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/programs`)
        const data = await res.json()
        setPrograms(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPrograms()
  }, [])

  return (
    <section id="programs" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Programs</h2>
          <p className="text-gray-600">Explore popular programs at SBJain</p>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading programs...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.length === 0 && (
            <div className="col-span-full text-gray-600">
              No programs yet. Add some via API to see them here.
            </div>
          )}
          {programs.map((p) => (
            <div key={p.id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.degree} • {p.department}</p>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.description}</p>
              {p.duration && <p className="mt-2 text-sm">Duration: {p.duration}</p>}
              {p.fees && <p className="text-sm">Fees: {p.fees}</p>}
              {p.brochure_url && (
                <a href={p.brochure_url} target="_blank" className="text-blue-600 text-sm mt-3 inline-block">Download Brochure</a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
