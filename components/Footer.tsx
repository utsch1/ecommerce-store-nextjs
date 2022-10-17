import { css } from '@emotion/react';
import Link from 'next/link';

// import { NodeNextRequest } from 'next/dist/server/base-http/node';

const footerStyles = css`
  width: 100%;
  height: 40px;
  background-color: #587d71;
  padding: 10px 70px 10px 120px;

  > span {
    color: #f9eccc;
    font-weight: 200;
  }
`;

const creditsStyles = css`
  color: #f9eccc;
  font-weight: 200;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #754668;
    cursor: pointer;
  }
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <span>© planteria 2022 | </span>
      <Link href="/credits">
        <span css={creditsStyles}>credits</span>
      </Link>
    </footer>
  );
}
