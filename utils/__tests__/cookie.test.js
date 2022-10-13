import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
} from '../cookies';
import { UpdateCookie } from '../cookiesUpdate';

test('set, get and delete a cookie', () => {
  const cookieKey = 'plants';
  const cookieValue = [{ id: 1, cart: 2 }];
  expect(getParsedCookie(cookieKey)).toBe(undefined);
  expect(() => setStringifiedCookie(cookieKey, cookieValue)).not.toThrow();
  expect(getParsedCookie(cookieKey)).toStrictEqual(cookieValue);
  expect(deleteCookie(cookieKey)).toBe(undefined);
  expect(getParsedCookie(cookieKey)).toBe(undefined);
});

test('update and delete a cookie', () => {
  expect(getParsedCookie('cartQuantity')).toBe(undefined);
  expect(UpdateCookie(1, 5));
  expect(getParsedCookie('cartQuantity')).toStrictEqual([{ id: 1, cart: 5 }]);
  expect(UpdateCookie(1, 1));
  expect(getParsedCookie('cartQuantity')).toStrictEqual([{ id: 1, cart: 6 }]);
  expect(deleteCookie('cartQuantity')).toBe(undefined);
  expect(getParsedCookie('cartQuantity')).toBe(undefined);
});
