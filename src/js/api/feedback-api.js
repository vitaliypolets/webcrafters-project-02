const feedbacks = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  author: ['Ірина', 'Олександр', 'Марія', 'Тетяна', 'Андрій', 'Світлана'][index],
  rating: 4 + (index % 2 ? 0.5 : 0),
  text: 'Дуже сподобалась якість меблів, сервіс і швидка доставка. Будемо замовляти ще.',
}));

export async function fetchFeedbacks() {
  return Promise.resolve(feedbacks);
}
