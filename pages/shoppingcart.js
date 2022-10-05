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

const imageStyles = css`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin: 0;
`;

const productCartStyles = css`
  width: 700px;
  height: 100px;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 0;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
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

const buttonStyles = css`
  width: 300px;
  height: 50px;
  padding: 10px 70px;
  margin-top: 30px;
  border-radius: 40px;
  background-color: #a0bbb2;
  color: #f9eccc;
  text-decoration: none;
  cursor: pointer;
`;

export default function Shoppingcart(props) {
  console.log(props.cart);
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
          {props.cart?.map((product) => {
            return (
              <div css={productCartStyles} key="cart">
                <Image
                  css={imageStyles}
                  src={`/${product.id}-${product.name}.jpg`}
                  alt=""
                  width="20"
                  height="20"
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.cart}</p>
                <button>x</button>
              </div>
            );
          })}
        </div>
      </div>

      <div css={amountStyles}>
        <h2>Total amount</h2>
        <Link href="/payment" data-test-id="cart-checkout">
          <a css={buttonStyles}>CONFIRM</a>
        </Link>
      </div>
    </div>
  );
}
