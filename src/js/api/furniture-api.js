const categories = ['all', 'sofas', 'chairs', 'tables', 'beds'];

const furniture = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `Модель ${index + 1}`,
  category: categories[(index % (categories.length - 1)) + 1],
  color: ['Горіх', 'Бежевий', 'Графіт'][index % 3],
  price: `${12000 + index * 850} грн`,
  rating: (4 + (index % 10) / 10).toFixed(1),
  description: 'Комфортні сучасні меблі для щоденного використання.',
  sizes: '180 x 90 x 85 см',
  colors: ['Бежевий', 'Графіт', 'Коричневий'],
}));

export async function fetchCategories() {
  return Promise.resolve(categories);
}

export async function fetchFurniture({ category = 'all', page = 1, limit = 8 } = {}) {
  const normalized = category === 'all' ? furniture : furniture.filter(item => item.category === category);
  const start = (page - 1) * limit;
  const end = start + limit;
  return Promise.resolve({ items: normalized.slice(start, end), total: normalized.length });
}

export async function fetchFurnitureById(id) {
  const item = furniture.find(entry => String(entry.id) === String(id));
  return Promise.resolve(item);
}
