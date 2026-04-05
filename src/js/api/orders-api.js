import axios from 'axios';

const API = axios.create({
  baseURL: 'https://furniture-store-v2.b.goit.study/api/',
  headers: { 'Content-Type': 'application/json' },
});

export async function submitOrder(payload) {
    const res = await API.post('orders', payload);
    return res.data;
  }
