import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const headlineDivStyles = css`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0;
  position: relative;
  bottom: 60px;
  background-color: #a0bbb2;

  h1 {
    font-size: 40px;
    color: #754668;
    font-weight: 300;
    text-align: center;
    padding-top: 50px;
    margin: 0;
  }
`;

const textStyles = css`
  width: 700px;
  margin-left: 30px;
  font-weight: 200;
  margin-bottom: 5px;
`;

const headlineStyles = css`
  border-bottom: 1px solid #587d71;
  margin-bottom: 10px;
`;

export default function Credits() {
  return (
    <div>
      <Head>
        <title>Credits</title>
        <meta name="description" content="Picture Credits" />
      </Head>

      <div css={headlineDivStyles}>
        <h1>credits</h1>
      </div>

      <div>
        <h2 css={headlineStyles}>Flaticon:</h2>
        <Link
          href="https://www.flaticon.com/free-icons/water"
          title="water icons"
        >
          <div css={textStyles}>Water icons created by Freepik</div>
        </Link>
        <Link
          href="https://www.flaticon.com/free-icons/water-drop"
          title="water drop icons"
        >
          <div css={textStyles}>Water drop icons created by Good Ware</div>
        </Link>
        <Link
          href="https://www.flaticon.com/free-icons/fertilizer"
          title="fertilizer icons"
        >
          <div css={textStyles}>Fertilizer icons created by Good Ware</div>
        </Link>
        <Link
          href="https://www.flaticon.com/de/kostenlose-icons/sonne"
          title="sonne Icons"
        >
          <div css={textStyles}>Sun icons created by IYAHICON</div>
        </Link>
        <Link
          href="https://www.flaticon.com/de/kostenlose-icons/wetteralarm"
          title="wetteralarm Icons"
        >
          <div css={textStyles}>Wetteralarm icons created by Freepik</div>
        </Link>
        <Link
          href="https://www.flaticon.com/free-icons/monstera"
          title="monstera icons"
        >
          <div css={textStyles}>Monstera icons created by Icongeek26</div>
        </Link>

        <h2 css={headlineStyles}>Plants:</h2>
        <div css={textStyles}>Plants in Pots: Photo by feey on Unsplash</div>
        <div css={textStyles}>
          Wallpaper: Photo by Jeremy Bishop on Unsplash
        </div>
      </div>
    </div>
  );
}
