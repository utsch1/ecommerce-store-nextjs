import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';

const headlineDivStyles = css`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0;
  position: relative;
  bottom: 60px;
  background-color: #a0bbb2;

  h1 {
    font-size: 40px;
    color: #754668;
    font-weight: 300;
    text-align: center;
    padding-top: 50px;
    margin: 0;
  }
`;

const careStyles = css`
  margin-bottom: 10px;
`;

const textStyles = css`
  width: 700px;
  margin-left: 30px;
  font-weight: 200;
`;

const headlineStyles = css`
  border-bottom: 1px solid #587d71;
  margin-bottom: 10px;
`;

export default function Care() {
  return (
    <div>
      <Head>
        <title>Plant care</title>
        <meta name="plant care" content="How to care for your plants" />
      </Head>

      <div css={headlineDivStyles}>
        <h1>care</h1>
      </div>

      <div>
        <h2 css={headlineStyles}>Watering the plants</h2>
        <div>
          <div css={careStyles}>
            <Image
              src="/water-1.png"
              alt="icon for watering the plant often"
              width="20"
              height="20"
            />
            <span css={textStyles}>
              The plant needs water once a week. The soil should stay moist.
            </span>
          </div>
          <div css={careStyles}>
            <Image
              src="/water-2.png"
              alt="icon for watering the plant regularly"
              width="20"
              height="20"
            />
            <span css={textStyles}>
              The plant needs water once a month. The soil can dry out a little
              bit.
            </span>
          </div>
          <div css={careStyles}>
            <Image
              src="/water-3.png"
              alt="icon for watering the plant little"
              width="20"
              height="20"
            />
            <span css={textStyles}>
              The plant does not need a lot of water. The soil should rather be
              dry than moist.
            </span>
          </div>
        </div>
        <h2 css={headlineStyles}>Light for the plants</h2>
        <div css={careStyles}>
          <Image
            src="/light-1.png"
            alt="icon for a lot of light for the plants"
            width="20"
            height="20"
          />
          <span css={textStyles}>
            The plant needs a lot of light to grow well.
          </span>
        </div>
        <div css={careStyles}>
          <Image
            src="/light-2.png"
            alt="icon for half shadow, half light for the plants"
            width="20"
            height="20"
          />
          <span css={textStyles}>
            The plant should not get too much direct sun light. Look for a
            shadowy place.
          </span>
        </div>
        <h2 css={headlineStyles}>Fertilization</h2>
        <div css={careStyles}>
          <Image
            src="/fertilize-1.png"
            alt="icon for fertilization"
            width="20"
            height="20"
          />
          <span css={textStyles}>Fertilize the plant once a month.</span>
        </div>
      </div>
    </div>
  );
}
