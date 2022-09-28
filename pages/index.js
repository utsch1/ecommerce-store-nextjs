import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const sloganStyles1 = css`
  font-size: 100px;
  color: #754668;
  font-weight: 300;
  padding: 130px 150px 0 30px;
`;

const sloganStyles2 = css`
  font-size: 150px;
  color: #4daa57;
  font-weight: 300;
  font-family: 'Lavishly Yours', cursive;
  position: relative;
  bottom: 100px;
  left: 80px;
  z-index: 1;
`;

const sloganStyles3 = css`
  font-size: 100px;
  color: #754668;
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
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="homepage" content="Homepage of leaf" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap');
        </style>
      </Head>

      <main>
        <div css={sloganStyles1}>Make your</div>
        <div css={sloganStyles2}>urban jungle</div>
        <div css={sloganStyles3}>come true!</div>
        <div css={linkStyles}>
          <Link href="/shop">
            <a css={buttonStyles}>Shop Plants</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
