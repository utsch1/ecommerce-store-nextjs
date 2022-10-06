import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const headlineDivStyles = css`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0;
  position: relative;
  bottom: 60px;
  background-color: #a0bbb2;

  h1 {
    font-size: 40px;
    color: #754668;
    font-weight: 300;
    text-align: center;
    padding-top: 50px;
    margin: 0;
    opacity: 1;
  }
`;

const cartStyles = css`
  display: grid;
  grid-template-areas:
    'products amount'
    'products .';
`;

const productStyles = css`
  display: flex;
  flex-direction: column;
  grid-area: products;
`;

const productCartStyles = css`
  width: 700px;
  height: 130px;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 0;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
`;

const imageStyles = css`
  margin-right: 10px;
`;

const productTextStyles = css`
  display: flex;
  justify-content: space-between;
`;

const amountStyles = css`
  width: 350px;
  height: auto;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 30px;
  margin-bottom: 20px;
  padding: 10px 10px 40px 10px;
  grid-area: amount;
`;

const sumStyles = css`
  display: flex;
  align-self: right;
  justify-content: space-between;
`;

const totalAmountStyles = css`
  font-weight: bold;
  margin-bottom: 5px;
`;

const lineStyles = css`
  border: 0.5px solid black;
`;

const buttonStyles = css`
  height: 50px;
  padding: 10px 50px;
  margin: 0 auto;
  border-radius: 40px;
  background-color: #a0bbb2;
  color: #f9eccc;
  text-decoration: none;
  cursor: pointer;
  align-self: center;
`;

export default function Shoppingcart(props) {
  const totalPrice = () => {
    return props.cart?.reduce(
      (accumulator, product) => accumulator + product.cart * product.price,
      0,
    );
  };

  const cartSum = () => {
    return props.cart?.reduce(
      (accumulator, item) => accumulator + item.cart,
      0,
    );
  };

  const shipping = 5.95;

  function handleRemove(id) {
    const newCart = props.cart.filter((item) => item.id !== id);

    props.setCart(newCart);
  }

  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="shopping cart" content="shopping cart" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
        </style>
      </Head>

      <div css={headlineDivStyles}>
        <h1>cart</h1>
      </div>

      <div css={cartStyles}>
        <div css={productStyles}>
          {!props.cart?.length ? (
            <div>Your cart is empty!</div>
          ) : (
            props.cart?.map((product) => {
              return (
                <div css={productCartStyles} key="cart">
                  <Image
                    css={imageStyles}
                    src={`/${product.id}-${product.name}.jpg`}
                    alt=""
                    width="100%"
                    height="20"
                  />
                  <div>
                    <h2>{product.name}</h2>
                  </div>
                  <div css={productTextStyles}>
                    <p>{product.price}</p>
                    <p>x</p>
                    <p>{product.cart}</p>
                    <p>{product.cart * product.price}</p>
                    <button onClick={() => handleRemove(product.id)}>x</button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div css={amountStyles}>
          <h2>Product &amp; shipping costs</h2>
          <div css={sumStyles}>
            <div css={totalAmountStyles}>Total</div>
            <div>{totalPrice()}</div>
          </div>
          <div css={sumStyles}>
            <div css={totalAmountStyles}>Shipping</div>
            <div>{shipping}</div>
          </div>
          <hr css={lineStyles} />
          <div css={sumStyles}>
            <div css={totalAmountStyles}>Total amount</div>
            <div>{totalPrice() + shipping}</div>
          </div>
          <div>
            <Link href="/payment" data-test-id="cart-checkout">
              <a css={buttonStyles}>CONFIRM</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
