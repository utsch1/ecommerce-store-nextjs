import { css } from '@emotion/react';
import Head from 'next/head';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  padding-left: 150px;
  padding-top: 100px;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CookieBanner />
      <Header />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
