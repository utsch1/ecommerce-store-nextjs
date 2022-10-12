import { css } from '@emotion/react';
import Head from 'next/head';
import { getPlants } from '../database/plants';

const headlineDivStyles = css`
  width: 220px;
  height: 140px;
  border-radius: 50px;
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

const divStyles = css`
  width: 600px;
  margin: 0 100px 0 0;
  padding-bottom: 30px;
  grid-area: checkoutDetails;
`;

const cartStyles = css`
  display: grid;
  grid-template-areas:
    'checkoutDetails amount'
    'checkoutDetails .';
`;

const personalInfoStyles = css`
  width: 600px;

  > label {
    padding-left: 5px;
    margin-bottom: 5px;
    width: 250px;
  }

  > input {
    width: 600px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  > :last-child {
    margin-bottom: 50px;
  }
`;

const paymentInfoStyles = css`
  margin-top: 20px;
  padding-bottom: 30px;

  > label {
    padding-left: 5px;
    margin-bottom: 5px;
  }

  > input {
    width: 600px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  > div > div > label {
    width: 290px;
    padding-left: 5px;
    margin-bottom: 5px;
  }

  > div > div > input {
    width: 290px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
`;

const headlineStyles = css`
  padding: 0 0 5px 5px;
  margin: 0;
  border-bottom: 2px solid #587d71;

  + p {
    color: red;
    font-size: 12px;
    padding-left: 5px;
  }
`;

const buttonStyles = css`
  width: 350px;
  height: 50px;
  padding: 10px 70px;
  margin: 0 auto;
  border-radius: 40px;
  background-color: #a0bbb2;
  text-decoration: none;
  color: #f9eccc;
  cursor: pointer;
  border: none;
  display: block;
`;

const amountStyles = css`
  width: 350px;
  height: auto;
  border: 1px solid #587d71;
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
  border: 0.5px solid #587d71;
`;

export default function Payment(props) {
  const shipping = 5.95;

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = './thankyou';
  };

  const plantCart = props.cart?.map((cart) => {
    return {
      ...cart,
      name: props.plants.find((plantObject) => cart.id === plantObject.id)
        ?.name,
      price: props.plants.find((plantObject) => cart.id === plantObject.id)
        ?.price,
    };
  });

  const totalPrice = () => {
    return plantCart?.reduce(
      (accumulator, plant) => accumulator + plant.cart * plant.price,
      0,
    );
  };

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
        <h1>payment</h1>
      </div>

      <div css={cartStyles}>
        <div css={divStyles}>
          <form onSubmit={handleSubmit}>
            <div css={personalInfoStyles}>
              <h2 css={headlineStyles}>Personal information</h2>
              <p>* fields are mandatory</p>
              <label htmlFor="firstName">First Name*</label>
              <input data-test-id="checkout-first-name" required />
              <label htmlFor="lastName">Last Name*</label>
              <input data-test-id="checkout-last-name" required />
              <label type="email" htmlFor="email">
                E-mail Address*
              </label>
              <input data-test-id="checkout-email" required />
              <label htmlFor="address">Address*</label>
              <input data-test-id="checkout-address" required />
              <label htmlFor="city">City*</label>
              <input data-test-id="checkout-city" required />
              <label htmlFor="postalCode">Postal Code*</label>
              <input data-test-id="checkout-postal-code" required />
              <label htmlFor="country">Country*</label>
              <input data-test-id="checkout-country" required />
            </div>
            <div css={paymentInfoStyles}>
              <h2 css={headlineStyles}>Payment information</h2>
              <p>* fields are mandatory</p>
              <label htmlFor="creditCardNumber">Credit Card Number*</label>
              <input
                data-test-id="checkout-credit-card"
                pattern="[0-9]{16}"
                placeholder="1234 5678 1234 5678"
                required
              />
              <div>
                <div>
                  <label htmlFor="expirationDate">Expiration Date*</label>
                  <input
                    data-test-id="checkout-expiration-date"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="securityCode">Security Code*</label>
                  <input
                    data-test-id="checkout-security-code"
                    pattern="[0-9]{3}"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
            <button css={buttonStyles} data-test-id="checkout-confirm-order">
              CONFIRM ORDER
            </button>
          </form>
        </div>
        <div css={amountStyles}>
          <h2>Product &amp; shipping costs</h2>
          <div css={sumStyles}>
            <div css={totalAmountStyles}>Total</div>
            <div data-test-id="cart-total">{totalPrice()}</div>
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
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const plants = await getPlants();

  return {
    props: {
      plants: plants,
    },
  };
}
