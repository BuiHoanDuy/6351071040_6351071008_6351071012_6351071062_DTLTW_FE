import { OderType, Order } from '@constant/Oder';

export const orders: Order[] = [
  {
    id: 'm5gr84i9',
    customer: {
      name: 'John Doe',
      address: '123 Main St, Springfield',
      phone: '555-1234',
    },
    date: '2021-09-01',
    total: 316,
    status: OderType.NEED_CONFIRM,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: '3u1reuv4',
    customer: {
      name: 'Jane Smith',
      address: '456 Elm St, Springfield',
      phone: '555-5678',
    },
    date: '2021-09-02',
    total: 242,
    status: OderType.PREPAIRING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'derv1ws0',
    customer: {
      name: 'Alice Johnson',
      address: '789 Oak St, Springfield',
      phone: '555-8765',
    },
    date: '2021-09-03',
    total: 837,
    status: OderType.SHIPPING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: '5kma53ae',
    customer: {
      name: 'Bob Brown',
      address: '321 Pine St, Springfield',
      phone: '555-4321',
    },
    date: '2021-09-04',
    total: 874,
    status: OderType.SUCCESSFULLY,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'bhqecj4p',
    customer: {
      name: 'Charlie Davis',
      address: '654 Maple St, Springfield',
      phone: '555-6789',
    },
    date: '2021-09-05',
    total: 721,
    status: OderType.NEED_CONFIRM,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: '9kma53ae',
    customer: {
      name: 'David Evans',
      address: '987 Birch St, Springfield',
      phone: '555-9876',
    },
    date: '2021-09-06',
    total: 654,
    status: OderType.PREPAIRING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'ahqecj4p',
    customer: {
      name: 'Eve Foster',
      address: '123 Cedar St, Springfield',
      phone: '555-5432',
    },
    date: '2021-09-07',
    total: 432,
    status: OderType.SHIPPING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'ckma53ae',
    customer: {
      name: 'Frank Green',
      address: '456 Walnut St, Springfield',
      phone: '555-6543',
    },
    date: '2021-09-08',
    total: 987,
    status: OderType.SUCCESSFULLY,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'dhqecj4p',
    customer: {
      name: 'Grace Harris',
      address: '789 Chestnut St, Springfield',
      phone: '555-7654',
    },
    date: '2021-09-09',
    total: 123,
    status: OderType.NEED_CONFIRM,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'ekma53ae',
    customer: {
      name: 'Hank Irving',
      address: '321 Spruce St, Springfield',
      phone: '555-8765',
    },
    date: '2021-09-10',
    total: 456,
    status: OderType.PREPAIRING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'fhqecj4p',
    customer: {
      name: 'Ivy Johnson',
      address: '654 Fir St, Springfield',
      phone: '555-9876',
    },
    date: '2021-09-11',
    total: 789,
    status: OderType.SHIPPING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'gkma53ae',
    customer: {
      name: 'Jack King',
      address: '987 Redwood St, Springfield',
      phone: '555-5432',
    },
    date: '2021-09-12',
    total: 321,
    status: OderType.SUCCESSFULLY,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'hhqecj4p',
    customer: {
      name: 'Karen Lee',
      address: '123 Cypress St, Springfield',
      phone: '555-6543',
    },
    date: '2021-09-13',
    total: 654,
    status: OderType.NEED_CONFIRM,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'ikma53ae',
    customer: {
      name: 'Leo Martin',
      address: '456 Willow St, Springfield',
      phone: '555-7654',
    },
    date: '2021-09-14',
    total: 987,
    status: OderType.PREPAIRING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'jhqecj4p',
    customer: {
      name: 'Mia Nelson',
      address: '789 Poplar St, Springfield',
      phone: '555-8765',
    },
    date: '2021-09-15',
    total: 123,
    status: OderType.SHIPPING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'kkma53ae',
    customer: {
      name: 'Nina Owens',
      address: '321 Aspen St, Springfield',
      phone: '555-9876',
    },
    date: '2021-09-16',
    total: 456,
    status: OderType.SUCCESSFULLY,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'lhqecj4p',
    customer: {
      name: 'Oscar Perez',
      address: '654 Hickory St, Springfield',
      phone: '555-5432',
    },
    date: '2021-09-17',
    total: 789,
    status: OderType.NEED_CONFIRM,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'mkma53ae',
    customer: {
      name: 'Paul Quinn',
      address: '987 Sycamore St, Springfield',
      phone: '555-6543',
    },
    date: '2021-09-18',
    total: 321,
    status: OderType.PREPAIRING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'nhqecj4p',
    customer: {
      name: 'Quincy Roberts',
      address: '123 Beech St, Springfield',
      phone: '555-7654',
    },
    date: '2021-09-19',
    total: 654,
    status: OderType.SHIPPING,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'okma53ae',
    customer: {
      name: 'Rachel Smith',
      address: '456 Dogwood St, Springfield',
      phone: '555-8765',
    },
    date: '2021-09-20',
    total: 987,
    status: OderType.SUCCESSFULLY,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
  {
    id: 'phqecj4p',
    customer: {
      name: 'Steve Turner',
      address: '789 Magnolia St, Springfield',
      phone: '555-9876',
    },
    date: '2021-09-21',
    total: 123,
    status: OderType.NEED_CONFIRM,
    details: [
      {
        id: 'item1',
        name: 'Celestial',
        color: 'green',
        quantity: 1,
        price: 120,
        image: 'green_bag.png',
      },
    ],
  },
];
