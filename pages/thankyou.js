import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const sloganStyles1 = css`
  font-size: 100px;
  color: #754668;
  font-weight: 300;
  padding: 35px 150px 0 30px;
`;

const sloganStyles2 = css`
  font-size: 150px;
  color: #a0bbb2;
  font-weight: 300;
  font-family: 'Lavishly Yours', cursive;
  position: relative;
  bottom: 100px;
  left: 160px;
  z-index: 1;
`;

const sloganStyles3 = css`
  font-size: 100px;
  color: #754668;
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
  background-color: #a0bbb2;
  text-decoration: none;
  color: #f9eccc;
  cursor: pointer;
`;

const monsteraImgStyles = css`
  position: absolute;
  left: 780px;
  bottom: 50px;
  z-index: 4;
`;

const pothosImgStyles = css`
  position: absolute;
  left: 780px;
  bottom: 180px;
  z-index: 5;
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

      <div css={monsteraImgStyles}>
        <Image
          src="/monstera-aquarell.png"
          alt="monstera aquarell"
          width="249"
          height="391"
        />
      </div>
      <div css={pothosImgStyles}>
        <Image
          src="/pothos-aquarell.png"
          alt="pothos-aquarell"
          width="500"
          height="500"
        />
      </div>

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
