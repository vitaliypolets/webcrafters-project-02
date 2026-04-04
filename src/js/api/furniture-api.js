import axios from 'axios';

export async function fetchCategories() {
  const BASE_URL = 'https://furniture-store-v2.b.goit.study';
  const END_POINT = '/api/categories';
  const url = BASE_URL + END_POINT;
  const res = await axios.get(url);
  res.data.unshift({ id: 'all', name: 'Всі товари' });
  return res.data;
}

export async function fetchFurniture(userParams) {
  const BASE_URL = 'https://furniture-store-v2.b.goit.study';
  const END_POINT = '/api/furnitures';
  const url = BASE_URL + END_POINT;
  const params = {
    page: 1,
    limit: 8,
    ...userParams,
  };
  const res = await axios.get(url, { params });
  return res.data;
}

export async function fetchFurnitureById(id) {
  const BASE_URL = 'https://furniture-store-v2.b.goit.study';
  const END_POINT = `/api/furnitures/${id}`;
  const url = BASE_URL + END_POINT;
  const res = await axios.get(url);
  return res.data;
}
