import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const sloganBackgroundStyles = css`
  background-color: #f9eccc;
  width: 630px;
  height: 550px;
  position: absolute;
  bottom: 100px;
  z-index: -1;
  opacity: 0.6;
  border-radius: 20px;
`;

const sloganStyles1 = css`
  font-size: 100px;
  /* color: #754668; */
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
  left: 80px;
  z-index: 1;
`;

const sloganStyles3 = css`
  font-size: 100px;
  /* color: #754668; */
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

  :hover {
    filter: brightness(120%);
  }
`;

// const monsteraImgStyles = css`
//   position: absolute;
//   left: 780px;
//   bottom: 50px;
//   z-index: 4;
// `;

// const pothosImgStyles = css`
//   position: absolute;
//   left: 780px;
//   bottom: 180px;
//   z-index: 5;
// `;

const jungleImgStyles = css`
  position: absolute;
  right: 0px;
  bottom: 10px;
  z-index: -2;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="homepage" content="Homepage of leaf" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
        </style>
      </Head>

      {/* <div css={monsteraImgStyles}>
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
      </div> */}
      <div css={jungleImgStyles}>
        <Image src="/jungle.jpg" alt="jungle" width="1459" height="972" />
      </div>
      <div css={sloganBackgroundStyles}>{''}</div>
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
