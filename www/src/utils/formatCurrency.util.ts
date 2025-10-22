const USCurrencyFormartter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatCurrencyUtil(value: number | null): string {
  return USCurrencyFormartter.format(value || 0);
}
