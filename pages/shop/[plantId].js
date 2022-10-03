import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { plants } from '../../database/plants';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

const singlePlantStyles = css`
  display: flex;
  margin-top: 30px;
`;

const plantTextStyles = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100px 200px 200px;
  grid-template-areas:
    'h1 h1 h1'
    'text text text'
    'originHeadline originText originText'
    'careHeadline careIcons .';
  margin-left: 30px;
`;

const imageStyles = css`
  border-radius: 25px;
  margin: 0;
`;

const plantNameStyles = css`
  font-size: 30px;
  font-weight: 500;
  grid-area: h1;
`;

const textStyles = css`
  font-weight: 200;
  grid-area: text;
`;

const priceStyles = css`
  font-weight: 700;
`;

const originHeadlineStyles = css`
  font-weight: 500;
  grid-area: originHeadline;
`;

const originStyles = css`
  font-weight: 200;
  grid-area: originText;
`;

const careHeadlineStyles = css`
  font-weight: 500;
  grid-area: careHeadline;
`;

const careArrangementStyles = css`
  display: flex;
  justify-content: center;
  grid-area: careIcons;
`;

const careStyles = css`
  width: 30px;
  height: auto;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
  padding: 0px;

  :hover {
    transform: scale(1.5);
    transition: 0.5s;
  }
`;

const buttonMinusStyles = css`
  background-color: #f9eccc;
  border: 0;
  padding: 10px;
`;

const priceAmountStyles = css`
  display: flex;
`;

const buttonPlusStyles = css`
  background-color: #f9eccc;
  border: 0;
  padding: 10px;
`;

const buttonStyles = css`
  width: 350px;
  height: 50px;
  padding: 10px 70px;
  border-radius: 40px;
  background-color: #a0bbb2;
  text-decoration: none;
  color: #f9eccc;
  cursor: pointer;
`;

export default function Plant(props) {
  if (props.error) {
    return (
      <div>
        <Head>
          <title>Product not found</title>
          <meta name="description" content="Plant not found" />
        </Head>
        <h1>{props.error}</h1>
        Sorry, try the <Link href="/shop">shop page</Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{props.plant.name}</title>
        <meta
          name="plant"
          content={`This is a single ${props.plant.name}'s description site`}
        />
      </Head>

      <div css={singlePlantStyles}>
        <Image
          data-test-id="product-image"
          css={imageStyles}
          src={`/${props.plant.id}-${props.plant.name}.jpg`}
          alt={`photo of ${props.plant.name}`}
          width="400"
          height="400"
        />
        <div css={plantTextStyles}>
          <h1 css={plantNameStyles}>{props.plant.name}</h1>
          <p css={textStyles}>{props.plant.description}</p>
          <h3 css={originHeadlineStyles}>Origin</h3>
          <p css={originStyles}>{props.plant.origin}</p>
          <h3 css={careHeadlineStyles}>Care</h3>
          <div css={careArrangementStyles}>
            <div css={careStyles}>
              <Image
                src={`/water-${props.plant.careWater}.png`}
                alt="icon for watering the plant"
                width="20"
                height="20"
              />
            </div>
            <div css={careStyles}>
              <Image
                src={`/water-${props.plant.careWater}.png`}
                alt="icon for watering the plant"
                width="20"
                height="20"
              />
            </div>
            <div css={careStyles}>
              <Image
                src={`/water-${props.plant.careWater}.png`}
                alt="icon for watering the plant"
                width="20"
                height="20"
              />
            </div>
          </div>
          <br />
          <div css={priceAmountStyles}>
            <div css={priceStyles} data-test-id="product-price">
              {props.plant.price}
            </div>
            <button
              onClick={() => {
                const currentCookieValue = getParsedCookie('amount');

                if (!currentCookieValue) {
                  setStringifiedCookie('amount', [
                    { id: props.plant.id, amount: -1 },
                  ]);
                  return;
                }

                const foundCookie = currentCookieValue.find(
                  (cookiePlantObject) =>
                    cookiePlantObject.id === props.plant.id,
                );

                if (!foundCookie) {
                  currentCookieValue.push({ id: props.plant.id, amount: -1 });
                } else {
                  foundCookie.amount--;
                }

                setStringifiedCookie('amount', currentCookieValue);
                props.setQuantity(foundCookie.amount);
              }}
              css={buttonMinusStyles}
            >
              -
            </button>
            <div data-test-id="product-quantity">{props.quantity}</div>
            <button
              onClick={() => {
                const currentCookieValue = getParsedCookie('amount');

                if (!currentCookieValue) {
                  setStringifiedCookie('amount', [
                    { id: props.plant.id, amount: 1 },
                  ]);
                  return;
                }

                const foundCookie = currentCookieValue.find(
                  (cookiePlantObject) =>
                    cookiePlantObject.id === props.plant.id,
                );

                if (!foundCookie) {
                  currentCookieValue.push({ id: props.plant.id, amount: 1 });
                } else {
                  foundCookie.amount++;
                }
                setStringifiedCookie('amount', currentCookieValue);
                props.setQuantity(foundCookie.amount);
              }}
              css={buttonPlusStyles}
            >
              +
            </button>
          </div>
          {/* <button css={buttonStyles} data-test-id="product-add-to-cart">ADD TO CART</button> */}
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const plantId = parseInt(context.query.plantId);

  const singlePlant = plants.find((plant) => {
    return plant.id === plantId;
  });

  if (typeof singlePlant === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Product not found',
      },
    };
  }

  return {
    props: {
      plant: singlePlant,
    },
  };
}
