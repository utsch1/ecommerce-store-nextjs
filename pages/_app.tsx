import { css, Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  getParsedCookie,
  PlantCookieItem,
  setStringifiedCookie,
} from '../utils/cookies';

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<PlantCookieItem[]>();

  useEffect(() => {
    const getCookie = getParsedCookie('cart');
    if (getCookie) {
      setCart(getCookie);
    }
  }, []);

  useEffect(() => {
    if (typeof cart !== 'undefined') {
      setStringifiedCookie('cart', cart);
    }
  }, [cart]);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;
            height: 100vh;
            background-color: #f9eccc;
            font-size: 16px;
          }
        `}
      />
      <Layout cart={cart} setCart={setCart}>
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Layout>
    </>
  );
}

export default MyApp;
