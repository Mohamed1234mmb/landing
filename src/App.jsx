import { useCallback, useState } from 'react';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductDetailModal from './components/ProductDetailModal';
import ShopPhones from './components/ShopPhones';
import WhyNimbus from './components/WhyNimbus';
import { useCart } from './hooks/useCart';
import { useProducts } from './hooks/useProducts';

export default function App() {
  const { products, status, reload } = useProducts();
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeCart = useCallback(() => setCartOpen(false), []);
  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  const addToCart = useCallback(
    (product) => {
      cart.addItem(product);
      setSelectedProduct(null);
      setCartOpen(true);
    },
    [cart],
  );

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased">
      <Navbar cartCount={cart.count} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ShopPhones
          products={products}
          status={status}
          onRetry={reload}
          onAdd={addToCart}
          onSelect={setSelectedProduct}
        />
        <WhyNimbus />
      </main>
      <Footer />

      <ProductDetailModal product={selectedProduct} onClose={closeProduct} onAdd={addToCart} />
      <CartDrawer
        open={cartOpen}
        items={cart.items}
        subtotalCents={cart.subtotalCents}
        onClose={closeCart}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
      />
    </div>
  );
}