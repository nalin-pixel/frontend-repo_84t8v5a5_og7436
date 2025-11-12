import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Events from './components/Events'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Programs />
      <Events />
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">About SBJain College</h2>
            <p className="mt-3 text-gray-600">
              SBJain College is a premier institution committed to academic excellence, innovation and holistic development. With modern infrastructure, experienced faculty, and strong industry collaborations, we prepare students for impactful careers.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc ml-5">
              <li>State-of-the-art labs and libraries</li>
              <li>Incubation and entrepreneurship support</li>
              <li>Clubs, sports and cultural activities</li>
              <li>Global alumni network</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6 bg-gray-50">
            <h3 className="font-semibold text-lg">Quick Facts</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Established</p>
                <p className="font-semibold">2004</p>
              </div>
              <div>
                <p className="text-gray-500">Students</p>
                <p className="font-semibold">3000+</p>
              </div>
              <div>
                <p className="text-gray-500">Programs</p>
                <p className="font-semibold">25+</p>
              </div>
              <div>
                <p className="text-gray-500">Placements</p>
                <p className="font-semibold">100% assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} SBJain College. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#programs" className="hover:text-blue-600">Programs</a>
            <a href="#events" className="hover:text-blue-600">Events</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
