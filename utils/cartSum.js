export function cartSum(cart) {
  const totalPrice = cart.reduce(
    (accumulator, product) => accumulator + product.price * product.cart,
    0,
  );
  return totalPrice;
}
