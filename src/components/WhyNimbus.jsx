import { RotateCcw, ShieldCheck, Truck } from 'lucide-react';

const REASONS = [
  {
    icon: Truck,
    title: 'Fast, free delivery',
    description: 'Order by early afternoon for next-day delivery on most orders, with no shipping fee.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified and warrantied',
    description: 'Every phone is inspected, unlocked for any carrier and covered by a 2-year warranty.',
  },
  {
    icon: RotateCcw,
    title: 'Changed your mind?',
    description: 'Return any phone within 30 days for a full refund, no questions asked.',
  },
];

export default function WhyNimbus() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Why Nimbus</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Shopping for a phone should feel easy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            We handle the details so you can focus on choosing the phone that fits you best.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white transition-colors group-hover:bg-sky-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
