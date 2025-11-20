const tiers = [
  {
    name: "Starter",
    price: "Free",
    details: ["Sandbox keys", "Basic dashboard", "Email support"],
    cta: "Start building",
    highlight: false,
  },
  {
    name: "Growth",
    price: "1.5% + ₦100",
    details: ["Live payments", "Settlements T+1", "Priority support"],
    cta: "Upgrade",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    details: ["Enterprise SLAs", "Dedicated account manager", "Custom pricing"],
    cta: "Talk to sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
            Pay as you go. No monthly fees. Volume discounts available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border backdrop-blur ${
                tier.highlight
                  ? "bg-blue-500/10 border-blue-500/30 shadow-lg shadow-blue-500/20"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">{tier.name}</h3>
                {tier.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold text-white">{tier.price}</p>
              <ul className="mt-4 space-y-2">
                {tier.details.map((d) => (
                  <li key={d} className="text-blue-200/80 text-sm">• {d}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 rounded-xl transition ${
                tier.highlight
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
