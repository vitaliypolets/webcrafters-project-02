import axios from 'axios';

const BASE_URL = 'https://furniture-store-v2.b.goit.study/api/';

export async function fetchPopular() {
  const res = await axios.get(`${BASE_URL}furnitures`, {
    params: { type: 'popular', limit: 10, page: 1 },
  });

  return res.data;
}
