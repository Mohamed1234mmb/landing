import { ArrowRight, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/4910129/pexels-photo-4910129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const TRUST_POINTS = [
  { icon: Truck, label: 'Free next-day delivery' },
  { icon: ShieldCheck, label: '2-year warranty' },
  { icon: RotateCcw, label: '30-day returns' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Unlocked, certified and ready to ship
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            The right phone for the way you live.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Flagship performance, pro-level cameras and batteries that last all day. Compare the
            latest phones from the brands you trust and get yours delivered fast.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              Shop phones
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why-us"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Why Nimbus
            </a>
          </div>

          <ul className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-zinc-300">
                <Icon className="h-4 w-4 shrink-0 text-sky-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-sky-500/10 blur-3xl" aria-hidden="true" />
          <img
            src={HERO_IMAGE_URL}
            alt="Person using a smartphone outdoors in the sunshine"
            className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10 sm:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
