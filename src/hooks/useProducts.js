import { useState, useEffect, useCallback } from 'react';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  const fetchProducts = useCallback(async () => {
    setStatus('loading');
    try {
      const mockProducts = [
        {
          id: '1',
          brand: 'Nimbus',
          name: 'Nimbus X Pro',
          tagline: 'Ultimate performance with 200MP camera system.',
          price_cents: 99900,
          compare_at_cents: 119900,
          rating: 4.8,
          badge: 'Best Seller',
          image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: '2',
          brand: 'Nimbus',
          name: 'Nimbus Air Ultra',
          tagline: 'Ultra-slim design with all-day battery life.',
          price_cents: 79900,
          compare_at_cents: 89900,
          rating: 4.6,
          badge: 'New',
          image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: '3',
          brand: 'Nimbus',
          name: 'Nimbus Lite SE',
          tagline: 'Smart features and stunning display at an incredible value.',
          price_cents: 49900,
          compare_at_cents: 59900,
          rating: 4.4,
          badge: 'Sale',
          image_url: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: '4',
          brand: 'Nimbus',
          name: 'Nimbus Prime 5G',
          tagline: 'Blazing fast connectivity with next-gen processor.',
          price_cents: 89900,
          compare_at_cents: 99900,
          rating: 4.7,
          badge: 'Popular',
          image_url: 'https://images.unsplash.com/photo-1533228876829-61c944715f2a?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: '5',
          brand: 'Nimbus',
          name: 'Nimbus Fold Z',
          tagline: 'The future of folding displays in your pocket.',
          price_cents: 149900,
          compare_at_cents: 169900,
          rating: 4.9,
          badge: 'Exclusive',
          image_url: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: '6',
          brand: 'Nimbus',
          name: 'Nimbus Horizon',
          tagline: 'Stunning curved OLED screen and cinematic audio.',
          price_cents: 69900,
          compare_at_cents: 79900,
          rating: 4.5,
          badge: 'Hot',
          image_url: 'https://images.unsplash.com/photo-1546054454-aa26fe2b8761?auto=format&fit=crop&w=800&q=80',
        }
      ];

      setTimeout(() => {
        setProducts(mockProducts);
        setStatus('ready');
      }, 300);
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    status,
    retry: fetchProducts,
  };
}