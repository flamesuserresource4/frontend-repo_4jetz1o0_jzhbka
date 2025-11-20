import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Decorative background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[80vw] rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-2xl"></div>
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} BluePay Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6 text-blue-200/70 text-sm">
            <a className="hover:text-white transition" href="#">Terms</a>
            <a className="hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-white transition" href="#">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
