export async function submitOrder(payload) {
  console.log('Order payload:', payload);
  return Promise.resolve({ success: true, message: 'Замовлення успішно надіслано' });
}
