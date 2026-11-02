export function formatPrice(cents) {
  if (cents === null || cents === undefined) return '';
  const dollars = cents / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(dollars);
}