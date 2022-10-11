import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const sloganBackgroundStyles = css`
  background-color: #f9eccc;
  width: 550px;
  height: 550px;
  position: absolute;
  bottom: 100px;
  z-index: -1;
  opacity: 0.6;
  border-radius: 20px;
`;

const sloganStyles1 = css`
  font-size: 100px;
  color: #587d71;
  font-weight: 300;
  padding: 35px 150px 0 30px;
`;

const sloganStyles2 = css`
  font-size: 150px;
  color: #754668;
  font-weight: 300;
  font-family: 'Lavishly Yours', cursive;
  position: relative;
  bottom: 100px;
  left: 160px;
  z-index: 1;
`;

const sloganStyles3 = css`
  font-size: 100px;
  color: #587d71;
  font-weight: 300;
  position: relative;
  bottom: 155px;
  left: 220px;
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
  right: 0px;
  bottom: 10px;
  z-index: -2;
`;

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>Thank you for your order</title>
        <meta name="thank you" content="Thank you for your order" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
        </style>
      </Head>

      <div css={jungleImgStyles}>
        <Image src="/jungle.jpg" alt="jungle" width="1459" height="972" />
      </div>
      <div css={sloganBackgroundStyles}>{''}</div>
      <div css={sloganStyles1}>Thank you</div>
      <div css={sloganStyles2}>for your</div>
      <div css={sloganStyles3}>order!</div>
      <div css={linkStyles}>
        <Link href="/">
          <a css={buttonStyles}>HOME</a>
        </Link>
      </div>
    </div>
  );
}
