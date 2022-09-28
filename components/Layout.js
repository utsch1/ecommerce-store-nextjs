import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  padding-left: 150px;
`;

export default function Layout(props) {
  return (
    <>
      <Header />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
