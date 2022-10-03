import { css, Global } from '@emotion/react';
import { useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [quantity, setQuantity] = useState(1);

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
      <Layout>
        <Component
          {...pageProps}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </Layout>
    </>
  );
}

export default MyApp;
