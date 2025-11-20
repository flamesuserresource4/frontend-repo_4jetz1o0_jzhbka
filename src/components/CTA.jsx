function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to launch payments in Nigeria?</h3>
          <p className="mt-3 text-blue-50/90 max-w-2xl mx-auto">
            Join startups and enterprises building with BluePay. Set up in minutes, scale to millions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              placeholder="Work email"
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-blue-50 transition">
              Request a demo
            </button>
          </div>
          <p className="mt-3 text-xs text-blue-50/70">By continuing you agree to our terms and privacy policy.</p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
