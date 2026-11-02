import { Smartphone, ShoppingBag } from 'lucide-react';


export default function Navbar({ cartCount, onOpenCart }) {  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-zinc-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
            <Smartphone className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">Nimbus Mobile</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a href="#shop" className="transition-colors hover:text-zinc-900">
            Shop phones
          </a>
          <a href="#why-us" className="transition-colors hover:text-zinc-900">
            Why Nimbus
          </a>
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          aria-label={`Open cart, ${cartCount} items`}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sky-600 px-1 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
