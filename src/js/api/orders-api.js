export async function submitOrder(payload) {
  const response = await fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to submit order');
  }

  return response.json();
}