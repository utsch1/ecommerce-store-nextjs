import { css } from '@emotion/react';

// import { NodeNextRequest } from 'next/dist/server/base-http/node';

const footerStyles = css`
  width: 100%;
  height: 40px;
  background-color: #587d71;
  padding: 10px 70px 10px 120px;

  > div {
    color: #f9eccc;
    font-weight: 200;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div>© planteria 2022</div>
    </footer>
  );
}
