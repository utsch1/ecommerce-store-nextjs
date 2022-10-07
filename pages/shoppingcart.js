import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { plants } from '../database/plants';

// import { getParsedCookie } from '../utils/cookies';

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

const emptyCart = css`
  width: 700px;
  font-weight: bold;
  font-size: 16px;
`;

const imageStyles = css`
  padding-right: 20px;
`;

const plantName = css`
  font-weight: bold;
  font-height: 20px;
  width: 500px;
  margin-left: 20px;
`;

const plantTextStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const productTextStyles = css`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
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
  position: relative;
  left: 80px;
  top: 20px;
`;

const removeButtonStyles = css`
  background-color: #f9eccc;
  border: 0;
  padding: 10px;
`;

export default function Shoppingcart(props) {
  const shipping = 5.95;

  function handleRemove(id) {
    const newCart = props.cart.filter((item) => item.id !== id);

    props.setCart(newCart);
  }

  const plantCart = props.cart?.map((cart) => {
    return {
      ...cart,
      name: plants.find((plantObject) => cart.id === plantObject.id)?.name,
      price: plants.find((plantObject) => cart.id === plantObject.id)?.price,
    };
  });
  console.log(plantCart);

  const totalPrice = () => {
    return plantCart?.reduce(
      (accumulator, plant) => accumulator + plant.cart * plant.price,
      0,
    );
  };

  console.log(plantCart);

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
            <div css={emptyCart}>Your cart is empty!</div>
          ) : (
            plantCart.map((plant) => {
              return (
                <div css={productCartStyles} key="cart">
                  <Image
                    css={imageStyles}
                    src={`/${plant.id}-${plant.name}.jpg`}
                    alt=""
                    width="100%"
                    height="20"
                  />
                  <div css={plantTextStyles}>
                    <div>
                      <p css={plantName}>{plant.name.toUpperCase()}</p>
                    </div>
                    <div css={productTextStyles}>
                      <p>
                        EUR {plant.price} x {plant.cart}
                      </p>
                      <p>total EUR {plant.cart * plant.price}</p>
                      <button
                        css={removeButtonStyles}
                        onClick={() => handleRemove(plant.id)}
                      >
                        X
                      </button>
                    </div>
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
            <div>{!props.cart?.length ? <div>{''}</div> : shipping}</div>
          </div>
          <hr css={lineStyles} />
          <div css={sumStyles}>
            <div css={totalAmountStyles}>Total amount</div>
            <div>
              {!props.cart?.length ? <div>{''}</div> : totalPrice() + shipping}
            </div>
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

export function getServerSideProps() {
  return {
    props: {
      plants: plants,
    },
  };
}
