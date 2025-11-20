import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">₦</span>
          </div>
          <div className="">
            <p className="text-white font-semibold leading-tight">BluePay</p>
            <p className="text-xs text-blue-200/70">Nigeria Fintech SaaS</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-blue-100/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button className="px-4 py-2 text-blue-100/90 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition">Create account</button>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 text-white">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
