import { Shield, CreditCard, BarChart3, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-grade security",
    desc: "Tokenization, 3DS, and risk scoring protect every transaction.",
  },
  {
    icon: CreditCard,
    title: "Cards, USSD & transfers",
    desc: "Support for Visa, Mastercard, Verve, USSD, and NIP transfers.",
  },
  {
    icon: BarChart3,
    title: "Realtime analytics",
    desc: "Track conversion, refunds, chargebacks, and settlements in one view.",
  },
  {
    icon: Smartphone,
    title: "Mobile SDKs",
    desc: "Drop-in experiences for iOS, Android, and Flutter apps.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to move money</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
            A modern fintech stack tailored for Nigeria: compliance, rails, and world-class developer experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 border border-blue-500/20 text-blue-300 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
