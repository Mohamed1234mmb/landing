import { AlertCircle, Smartphone, Star, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { formatPrice } from '../format.js';

const ALL_BRANDS = 'All';

export default function ShopPhones({
    products,
    status,
    onRetry,
    onAdd,
    onSelect,
}) {
    const [activeBrand, setActiveBrand] = useState(ALL_BRANDS);

    const brands = [ALL_BRANDS, ...Array.from(new Set(products.map((p) => p.brand)))];
    const visible = activeBrand === ALL_BRANDS ? products : products.filter((p) => p.brand === activeBrand);

    return (
        <section id="shop" className="scroll-mt-20 bg-zinc-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">Shop</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Latest phones, ready to ship
                        </h2>
                        <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600">
                            Every device is unlocked, tested and backed by our warranty.
                        </p>
                    </div>

                    {status === 'ready' && products.length > 0 && (
                        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by brand">
                            {brands.map((brand) => {
                                const isActive = brand === activeBrand;
                                return (
                                    <button
                                        key={brand}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveBrand(brand)}
                                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isActive
                                                ? 'border-zinc-900 bg-zinc-900 text-white'
                                                : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500'
                                            }`}
                                    >
                                        {brand}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="mt-12">
                    {status === 'loading' && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true">
                            {Array.from({ length: 4 }, (_, index) => (
                                <div key={index} className="animate-pulse overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                                    <div className="aspect-[4/5] bg-zinc-200" />
                                    <div className="space-y-3 p-5">
                                        <div className="h-3 w-1/3 rounded bg-zinc-200" />
                                        <div className="h-5 w-2/3 rounded bg-zinc-200" />
                                        <div className="h-4 w-full rounded bg-zinc-200" />
                                        <div className="h-6 w-1/3 rounded bg-zinc-200" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="flex flex-col items-center gap-4 rounded-2xl border border-red-200 bg-white px-6 py-16 text-center">
                            <AlertCircle className="h-10 w-10 text-red-600" />
                            <p className="text-lg font-semibold text-zinc-900">We couldn't load the phones.</p>
                            <p className="text-sm text-zinc-600">Check your connection and try again.</p>
                            <button
                                type="button"
                                onClick={onRetry}
                                className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
                            >
                                Try again
                            </button>
                        </div>
                    )}

                    {status === 'ready' && products.length === 0 && (
                        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
                            <Smartphone className="h-10 w-10 text-zinc-400" />
                            <p className="text-zinc-600">No phones are available right now. Please check back soon.</p>
                        </div>
                    )}

                    {status === 'ready' && products.length > 0 && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {visible.map((product) => {
                                const hasDiscount = product?.compare_at_cents !== null && product?.compare_at_cents > product?.price_cents;
                                return (
                                    <div
                                        key={product.id}
                                        onClick={() => onSelect(product)}
                                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-xl cursor-pointer"
                                    >
                                        {/* Product Image */}
                                        <div className="relative aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
                                            <img
                                                src={product?.image_url}
                                                alt={product?.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                onError={(e) => {
                                                    e.target.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80";
                                                }}
                                            />
                                            {product?.badge && (
                                                <span className="absolute left-3 top-3 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white shadow-md">
                                                    {product?.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex flex-1 flex-col justify-between p-6">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                                                        {product?.brand}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-xs font-medium text-zinc-700">
                                                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                                        {product?.rating ? product.rating.toFixed(1) : "4.8"}
                                                    </span>
                                                </div>
                                                <h3 className="mt-2 text-lg font-bold text-zinc-900 group-hover:text-sky-700 transition-colors">
                                                    {product?.name}
                                                </h3>
                                                <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{product?.tagline}</p>
                                            </div>

                                            <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-100">
                                                <div>
                                                    <span className="text-lg font-bold text-zinc-900">
                                                        {formatPrice(product?.price_cents)}
                                                    </span>
                                                    {hasDiscount && (
                                                        <span className="block text-xs text-zinc-400 line-through">
                                                            {formatPrice(product?.compare_at_cents)}
                                                        </span>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // عشان الضغطة متفتحش المودال وتكتفي بإضافة المنتج للسلة مباشرة
                                                        onAdd(product);
                                                    }}
                                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-sky-700 shadow-md"
                                                    aria-label="Add to cart"
                                                >
                                                    <ShoppingBag className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}