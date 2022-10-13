import { getParsedCookie, setStringifiedCookie } from './cookies';

export function UpdateCookie(id, quantity) {
  const cookie = getParsedCookie('cartQuantity');

  if (!cookie) {
    setStringifiedCookie('cartQuantity', [
      {
        id: id,
        cart: quantity,
      },
    ]);
    return;
  }

  const foundCookie = cookie.find(
    (cookiePlantObject) => cookiePlantObject.id === id,
  );

  if (!foundCookie) {
    cookie.push({
      id: id,
      cart: quantity,
    });
  } else {
    foundCookie.cart++;
  }
  setStringifiedCookie('cartQuantity', cookie);
}
