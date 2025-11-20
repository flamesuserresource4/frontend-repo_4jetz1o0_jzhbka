import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative pt-16 pb-24">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast; don't block pointer events for Spline */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-100 text-xs mb-5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PCI-DSS ready • Built for Nigeria
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Modern Payments for African Builders
            </h1>
            <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
              Accept cards, bank transfers, and USSD with beautiful dashboards, instant settlements, and developer-first APIs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition">
                Get started free
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
                View API docs
              </button>
              <div className="text-xs text-blue-200/80">
                No card required • Free sandbox • NUBAN-ready
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Empty column to let Spline shine through */}
            <div className="h-[420px] sm:h-[520px] lg:h-[560px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
