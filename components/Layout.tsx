import { css } from '@emotion/react';
import Head from 'next/head';
import { PlantCookieItem } from '../utils/cookies';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  min-height: calc(100vh - 40px);
  max-width: calc(100vw - 70px);
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 100px;
`;

type CartNumber = {
  cart: PlantCookieItem[] | undefined;
};

type ChildrenProps = {
  children: JSX.Element;
};

export default function Layout(props: CartNumber & ChildrenProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CookieBanner />
      <Header cart={props.cart} />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
