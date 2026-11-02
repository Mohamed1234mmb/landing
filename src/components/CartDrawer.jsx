import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { formatPrice } from '../format.js';
import { useEscapeKey } from '../hooks/useEscapeKey';

export default function CartDrawer({
  open,
  items,
  subtotalCents,
  onClose,
  onUpdateQuantity,
  onRemove,
}) {
  useEscapeKey(onClose, open);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <header className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">
          <h2 className="text-lg font-bold text-zinc-900">Your cart ({itemCount})</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
              <ShoppingBag className="h-7 w-7" />
            </span>
            <p className="text-lg font-semibold text-zinc-900">Your cart is empty</p>
            <p className="text-sm text-zinc-600">Find a phone you love and add it here.</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              Browse phones
            </button>
          </div>
        ) : (
          <ul className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex gap-4 rounded-2xl border border-zinc-200 p-3">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-24 w-20 shrink-0 rounded-xl bg-zinc-100 object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{product.brand}</p>
                      <p className="font-semibold text-zinc-900">{product.name}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-zinc-300">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-zinc-900">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-semibold text-zinc-900">
                      {formatPrice(product.price_cents * quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="space-y-4 border-t border-zinc-200 px-6 py-6">
            <div className="flex items-center justify-between text-base">
              <span className="text-zinc-600">Subtotal</span>
              <span className="text-xl font-bold text-zinc-900">{formatPrice(subtotalCents)}</span>
            </div>
            <p className="text-xs text-zinc-500">Shipping and taxes are calculated at checkout.</p>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-full border border-zinc-300 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Continue shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}