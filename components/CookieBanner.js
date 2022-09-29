import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const cookieStyles = (isOpen) => css`
  padding: 10px;
  background-color: lightgrey;
  transition: all 1s ease-in-out;
  height: 40px;

  ${!isOpen &&
  css`
    padding: 0;
    height: 0;
    overflow: hidden;
  `};
`;

export default function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const initialValue = getLocalStorage('bannerOpen');
    if (initialValue === null) {
      setBannerOpen(true);
    }
  }, []);

  return (
    <div css={cookieStyles(bannerOpen)}>
      <span>Please accept our cookie policy. </span>{' '}
      <button
        onClick={() => {
          setBannerOpen(false);
          setLocalStorage('bannerOpen', false);
        }}
      >
        Ok
      </button>
    </div>
  );
}
