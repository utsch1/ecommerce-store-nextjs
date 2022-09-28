import { css } from '@emotion/react';
import Link from 'next/link';

// import { NodeNextRequest } from 'next/dist/server/base-http/node';

const navigationStyles = css`
  width: 100%;
  height: 80px;
  background-color: #587d71;
  padding: 30px 70px 30px 120px;
  position: fixed;
  z-index: 1;

  > a {
    color: #f9eccc;
    text-decoration: none;
    font-weight: 200;
  }

  > a + a {
    margin-left: 30px;
  }

  > a + a:hover {
    border-bottom: 2px solid #754668;
  }
`;

export default function Header() {
  return (
    <header>
      <nav css={navigationStyles}>
        <Link href="/">HOME</Link>
        <Link href="/shop">SHOP PLANTS</Link>
        <Link href="/care">CARE</Link>
        <Link href="/about">ABOUT US</Link>
      </nav>
    </header>
  );
}
