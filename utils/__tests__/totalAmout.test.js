import { cartSum } from '../cartSum';

test('calculate total amount of cart', () => {
  const testProducts = [
    {
      id: 1,
      cart: 2,
      price: 25,
    },
    {
      id: 2,
      cart: 1,
      price: 30,
    },
  ];
  expect(cartSum(testProducts)).toBe(80);
});
