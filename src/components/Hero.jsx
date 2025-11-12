export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Empowering Futures at SBJain College
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover top-ranked programs, world-class faculty, and a vibrant campus life.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#programs" className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">Explore Programs</a>
            <a href="#contact" className="px-5 py-3 rounded border hover:bg-gray-50">Request Info</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <span>NAAC Accredited</span>
            <span>Industry-aligned Curriculum</span>
            <span>100% Placement Assistance</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow p-4">
            <p className="font-semibold">Upcoming Admissions</p>
            <p className="text-sm text-gray-600">Apply before 30th Nov</p>
          </div>
        </div>
      </div>
    </section>
  )
}
