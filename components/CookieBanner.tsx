import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const cookieStyles = (isOpen: boolean | undefined) => css`
  padding: 10px;
  background-color: #f9eccc;
  transition: all 1s ease-in-out;
  height: 80px;
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;

  ${!isOpen &&
  css`
    padding: 0;
    height: 0;
    overflow: hidden;
  `};
`;

const textStyles = css`
  text-align: center;
  padding: 10px;
`;

const buttonStyles = css`
  background-color: #587d71;
  color: #f9eccc;
  border: 0;
  margin-top: 5px;
`;

export default function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>();

  useEffect(() => {
    const initialValue = getLocalStorage('bannerOpen');
    if (initialValue === null) {
      setBannerOpen(true);
    }
  }, []);

  return (
    <div css={cookieStyles(bannerOpen)}>
      <div css={textStyles}>
        <div>Please accept our cookie policy. </div>{' '}
        <button
          css={buttonStyles}
          onClick={() => {
            setBannerOpen(false);
            setLocalStorage('bannerOpen', false);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
