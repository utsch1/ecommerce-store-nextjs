import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const sloganBackgroundStyles = css`
  background-color: #f9eccc;
  width: 630px;
  height: 550px;
  position: absolute;
  bottom: 100px;
  opacity: 0.6;
  border-radius: 20px;
  z-index: 0;
`;

const sloganStyles1 = css`
  font-size: 100px;
  color: #587d71;
  font-weight: 300;
  position: relative;
  padding: 35px 150px 0 30px;
  z-index: 20;
`;

const sloganStyles2 = css`
  font-size: 150px;
  color: #754668;
  font-weight: 300;
  font-family: 'Lavishly Yours', cursive;
  position: relative;
  bottom: 100px;
  left: 80px;
  z-index: 1;
`;

const sloganStyles3 = css`
  font-size: 100px;
  color: #587d71;
  font-weight: 300;
  position: relative;
  bottom: 155px;
  left: 130px;
`;

const linkStyles = css`
  position: relative;
  bottom: 100px;
  left: 170px;
`;

const buttonStyles = css`
  width: 350px;
  height: 50px;
  padding: 10px 70px;
  border-radius: 40px;
  background-color: #587d71;
  text-decoration: none;
  color: #f9eccc;
  cursor: pointer;
`;

const jungleImgStyles = css`
  position: absolute;
  right: 1px;
  bottom: 30px;
  width: 125%;
  z-index: -2;
  background-image: url('jungle.jpg');
  background-size: cover;
  min-height: calc(100vh - 70px);
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage of planteria" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
        </style>
      </Head>

      <div css={jungleImgStyles} />
      <div css={sloganBackgroundStyles} />
      <div css={sloganStyles1}>Make your</div>
      <div css={sloganStyles2}>urban jungle</div>
      <div css={sloganStyles3}>come true!</div>

      <div css={linkStyles}>
        <Link href="/shop">
          <a css={buttonStyles}>SHOP PLANTS</a>
        </Link>
      </div>
    </div>
  );
}
