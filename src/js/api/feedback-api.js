import axios from 'axios';

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api/';
axios.defaults.params = { limit: 3, page: 1 };

export async function getFeedbacks() {
  try {
    const res = await axios.get('feedbacks');
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
