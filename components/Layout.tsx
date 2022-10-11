import { css } from '@emotion/react';
import Head from 'next/head';
import { Dispatch, SetStateAction } from 'react';
import { Cart } from '../pages/_app';
import CookieBanner from './CookieBanner';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  min-height: calc(100vh - 40px);
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 100px;
`;

type CartNumber = {
  cart: Cart[] | undefined;
  setCart: Dispatch<SetStateAction<Cart[] | undefined>>;
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
      <Header cart={props.cart} setCart={props.setCart} />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
