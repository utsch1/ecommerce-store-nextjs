import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { PlantCookieItem } from '../utils/cookies';

const navigationStyles = css`
  width: 100%;
  height: 80px;
  background-color: #587d71;
  padding: 30px 70px 30px 120px;
  position: fixed;
  z-index: 3;
  margin-bottom: 10px;
  display: flex;

  > span {
    margin: 0;
    position: relative;
    bottom: 10px;
  }

  > span + a {
    margin-left: 50px;
  }

  > a {
    color: #f9eccc;
    text-decoration: none;
    font-weight: 200;
    margin-left: 30px;
  }

  a:hover {
    border-bottom: 2px solid #754668;
  }
`;

const cartStyles = css`
  color: #f9eccc;
  font-weight: 200;
  margin-left: 600px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #754668;
    cursor: pointer;
  }
`;

export default function Header(props) {
  const cartSum = () => {
    return props.cart?.reduce(
      (accumulator, item) => accumulator + item.cart,
      0,
    );
  };

  return (
    <header>
      <nav css={navigationStyles}>
        <span>
          <Link href="/">
            <Image src="/planteria.png" alt="logo" width="126" height="43" />
          </Link>
        </span>
        <div>
          <Link href="/products">
            <a data-test-id="products-link">SHOP</a>
          </Link>
        </div>
        <Link href="/care">CARE</Link>
        <Link href="/about">ABOUT US</Link>
        <Link href="/cart">
          <a data-test-id="cart-link">
            CART
            <span css={cartStyles} data-test-id="cart-count">
              ({props.cart ? cartSum() : 0})
            </span>
          </a>
        </Link>
      </nav>
    </header>
  );
}
