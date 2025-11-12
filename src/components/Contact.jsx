import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus(data.message || 'Submitted!')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Contact & Admissions</h2>
        <p className="text-gray-600">Reach out to us for admissions, programs or campus visits</p>
      </div>

      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
        <input name="name" value={form.name} onChange={onChange} placeholder="Full Name" required className="border rounded px-4 py-3" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" required className="border rounded px-4 py-3" />
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="border rounded px-4 py-3 md:col-span-2" />
        <textarea name="message" value={form.message} onChange={onChange} placeholder="Your message" rows={5} required className="border rounded px-4 py-3 md:col-span-2"></textarea>
        <div className="md:col-span-2 flex items-center gap-4">
          <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">Submit</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </div>
      </form>
    </section>
  )
}
