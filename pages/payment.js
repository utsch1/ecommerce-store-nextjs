import { css } from '@emotion/react';
import Head from 'next/head';

const divStyles = css`
  width: 600px;
  margin: 0 auto;
  padding-bottom: 30px;
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
    border-radius: 25px;
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
    border-radius: 25px;
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
    border-radius: 25px;
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

export default function Payment() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
            <input data-test-id="checkout-credit-card" required />
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
                <input data-test-id="checkout-security-code" required />
              </div>
            </div>
          </div>
          <button css={buttonStyles} data-test-id="checkout-confirm-order">
            CONFIRM ORDER
          </button>
        </form>
      </div>
    </div>
  );
}
