import { useState, useEffect, useCallback } from 'react';

export function useCart() {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('nimbus_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nimbus_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = useCallback((product) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + 1,
        };
        return newItems;
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  }, []);

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalCents = items.reduce((sum, item) => sum + item.product.price_cents * item.quantity, 0);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    count,
    subtotalCents,
  };
}