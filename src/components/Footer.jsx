import { Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-zinc-900">
            <Smartphone className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">Nimbus Mobile</span>
        </a>

        <nav className="flex gap-6 text-sm">
          <a href="#shop" className="transition-colors hover:text-white">
            Shop phones
          </a>
          <a href="#why-us" className="transition-colors hover:text-white">
            Why Nimbus
          </a>
        </nav>

        <p className="text-sm">© {new Date().getFullYear()} Nimbus Mobile. All rights reserved.</p>
      </div>
    </footer>
  );
}
