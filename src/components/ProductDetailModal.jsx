import { Star, X, ShoppingBag, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { formatPrice } from "../format.js";

export default function ProductDetailModal({ product, onClose, onAdd }) {
  if (!product) return null;

  const hasDiscount = product?.compare_at_cents !== null && product?.compare_at_cents > product?.price_cents;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        e.stopPropagation();
        if (onClose) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onClose) onClose();
          }}
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 p-2 text-zinc-800 shadow-md backdrop-blur-md transition-colors hover:bg-zinc-100 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 stroke-[2.5]" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <div className="relative aspect-video w-full bg-zinc-100 overflow-hidden">
            <img
              src={product?.image_url || "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"}
              alt={product?.name || "Product"}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80";
              }}
            />
            {product?.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white z-10">
                {product?.badge}
              </span>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                {product?.brand}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-zinc-700">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {product?.rating ? product.rating.toFixed(1) : "4.8"}
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-bold text-zinc-900">{product?.name}</h2>
            <p className="mt-1 text-zinc-600">{product?.tagline}</p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-zinc-900">
                {formatPrice(product?.price_cents)}
              </span>
              {hasDiscount && (
                <span className="text-sm text-zinc-400 line-through">
                  {formatPrice(product?.compare_at_cents)}
                </span>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-zinc-100 py-4 text-center">
              <div className="flex flex-col items-center gap-1 text-xs text-zinc-600">
                <Truck className="h-5 w-5 text-zinc-900" />
                <span>Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-xs text-zinc-600">
                <ShieldCheck className="h-5 w-5 text-zinc-900" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-xs text-zinc-600">
                <RefreshCw className="h-5 w-5 text-zinc-900" />
                <span>30-Day Returns</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => onAdd(product)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 py-4 text-base font-semibold text-white transition-colors hover:bg-sky-700 cursor-pointer"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}