import { css } from '@emotion/react';
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
  z-index: 1;
  margin-bottom: 10px;

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
      {/* <Image
        css={imageStyles}
        src="/planteria.png"
        alt="logo planteria"
        width="200"
        height="200"
      /> */}
      <nav css={navigationStyles}>
        <Link href="/">planteria</Link>
        <Link href="/shop">SHOP PLANTS</Link>
        <Link href="/care">CARE</Link>
        <Link href="/about">ABOUT US</Link>
      </nav>
    </header>
  );
}
