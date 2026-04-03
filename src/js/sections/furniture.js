import { refs } from '../utils/selectors.js';
import { renderCategories } from '../render/render-categories.js';
import { renderFurnitureCards } from '../render/render-furniture.js';


const mockCategories = [
  {
    name: 'Всі товари',
    image: './categories/categories_all.jpg',
  },
  {
    name: 'Мякі меблі',
    image: './categories/categories1.jpg',
  },
  {
    name: 'Шафи та системи зберігання',
    image: './categories/categories2.jpg',
  },
  {
    name: 'Ліжка та матраци',
    image: './categories/categories3.jpg',
  },
  {
    name: 'Столи',
    image: './categories/categories4.jpg',
  },
   {
    name: 'Стільці та табурети',
    image: './categories/categories5.jpg',
  },
    {
    name: 'Кухні',
    image: './categories/categories6.jpg',
  },
     {
    name: 'Меблі для дитячої',
    image: './categories/categories7.jpg',
  },
      {
    name: 'Меблі для офісу',
    image: './categories/categories8.jpg',
  },
    {
    name: 'Меблі для передпокою',
    image: './categories/categories9.jpg',
  },   
     {
    name: 'Меблі для ванної кімнати',
    image: './categories/categories10.jpg',
  },
     {
    name: 'Садові та вуличні меблі',
    image: './categories/categories11.jpg',
  },
      {
    name: 'Декор та аксесуари',
    image: './categories/categories12.jpg',
  },
];

const mockFurniture = [
  {
    _id: '1',
    name: 'Сучасний диван',
    price: 12500,
    colors: ['Бежевий'],
    images: ['./images/furniture1.jpg'],
  },
  {
    _id: '2',
    name: 'Деревʼяний стілець',
    price: 3200,
    colors: ['Горіх'],
    images: ['./images/furniture2.jpg'],
  },
  {
    _id: '3',
    name: 'Журнальний столик',
    price: 5400,
    colors: ['Дуб'],
    images: ['./images/furniture3.jpg'],
  },
  {
    _id: '4',
    name: 'М’яке ліжко',
    price: 18900,
    colors: ['Сірий'],
    images: ['./images/furniture4.jpg'],
  },
  {
    _id: '5',
    name: 'М’яке ліжко',
    price: 18900,
    colors: ['Сірий'],
    images: ['./images/furniture5.jpg'],
  },
  {
    _id: '6',
    name: 'М’яке ліжко',
    price: 18900,
    colors: ['Сірий'],
    images: ['./images/furniture6.jpg'],
  },
  {
    _id: '7',
    name: 'М’яке ліжко',
    price: 18900,
    colors: ['Сірий'],
    images: ['./images/furniture7.jpg'],
  },
  {
    _id: '8',
    name: 'М’яке ліжко',
    price: 18900,
    colors: ['Сірий'],
    images: ['./images/furniture8.jpg'],
  },
];

export function initFurnitureSection() {
  if (refs.categoriesContainer) {
    refs.categoriesContainer.innerHTML = renderCategories(mockCategories);
  }

  if (refs.furnitureContainer) {
    refs.furnitureContainer.innerHTML = renderFurnitureCards(mockFurniture);
  }
}