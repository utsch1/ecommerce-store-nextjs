import { css } from '@emotion/react';
import Image from 'next/image';
// import Image from 'next/image';
import Link from 'next/link';

// import { NodeNextRequest } from 'next/dist/server/base-http/node';

// const imageStyles = css`
//   position: relative;
// `;

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

  > a:last-child {
    margin-left: 500px;
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

export default function Header() {
  return (
    <header>
      <nav css={navigationStyles}>
        <span>
          <Link href="/">
            <Image src="/planteria.png" alt="logo" width="126" height="43" />
          </Link>
        </span>
        <Link href="/shop">SHOP PLANTS</Link>
        <Link href="/care">CARE</Link>
        <Link href="/about">ABOUT US</Link>
        <Link href="/shoppingcart">CART (0)</Link>
      </nav>
    </header>
  );
}
