import { css } from '@emotion/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { getPlantsById, Plant } from '../../database/plants';
import { parseIntFromContextQuery } from '../../utils/contextQuery';
import { PlantCookieItem } from '../../utils/cookies';

const singlePlantStyles = css`
  display: flex;
  margin-top: 30px;
`;

const plantTextStyles = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100px 300px 300px;
  grid-template-areas:
    'h1 h1 h1'
    'text text text'
    'originHeadline originText originText'
    'careHeadline careIcons .'
    'price price price'
    'button button button';
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
  margin: 0;
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
  align-self: center;
`;

const careHeadlineStyles = css`
  font-weight: 500;
  grid-area: careHeadline;
`;

const careArrangementStyles = css`
  display: flex;
  justify-content: left;
  align-self: center;
  grid-area: careIcons;
  width: 200px;
`;

const careStyles = css`
  width: 30px;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
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
  padding: 0 10px 0 10px;
  margin-left: 30px;
`;

const priceQuantityStyles = css`
  display: flex;
  grid-area: price;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const quantityStyles = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #587d71;
  color: #f9eccc;
  text-align: center;
  font-weight: 200;
  align-self: center;
`;

const buttonPlusStyles = css`
  background-color: #f9eccc;
  border: 0;
  padding: 0 10px 0 10px;
`;

const buttonStyles = css`
  width: 350px;
  height: 50px;
  padding: 10px 70px;
  border: none;
  border-radius: 40px;
  background-color: #a0bbb2;
  text-decoration: none;
  color: #f9eccc;
  cursor: pointer;
  grid-area: button;
  justify-self: center;
`;

type CartSinglePlant = {
  cart: PlantCookieItem[] | undefined;
  setCart: Dispatch<SetStateAction<PlantCookieItem[] | undefined>>;
};

type Props =
  | {
      plant: Plant;
    }
  | {
      error: string;
    };

export default function SinglePlant(props: Props & CartSinglePlant) {
  const [quantity, setQuantity] = useState<number>(1);

  if ('error' in props) {
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
          <h1 css={plantNameStyles}>{props.plant.name.toUpperCase()}</h1>
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
                src={`/light-${props.plant.careLight}.png`}
                alt="icon for light"
                width="20"
                height="20"
              />
            </div>
            <div css={careStyles}>
              <Image
                src={`/fertilize-${props.plant.careFertilize}.png`}
                alt="icon for fertilizing the plant"
                width="20"
                height="20"
              />
            </div>
          </div>
          <br />
          <div css={priceQuantityStyles}>
            <div css={priceStyles} data-test-id="product-price">
              <span>EUR</span> {props.plant.price}
            </div>
            <button
              onClick={() => {
                if (quantity === 0) {
                  return 0;
                } else {
                  setQuantity(quantity - 1);
                }
              }}
              css={buttonMinusStyles}
            >
              -
            </button>
            <div css={quantityStyles} data-test-id="product-quantity">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              css={buttonPlusStyles}
            >
              +
            </button>
          </div>
          <button
            css={buttonStyles}
            data-test-id="product-add-to-cart"
            onClick={() => {
              if (!props.cart) {
                props.setCart([
                  {
                    id: props.plant.id,
                    cart: quantity,
                  },
                ]);
                return;
              }

              const foundCookie = props.cart.find(
                (cookiePlantObject: PlantCookieItem) =>
                  cookiePlantObject.id === props.plant.id,
              );

              if (!foundCookie) {
                props.cart.push({
                  id: props.plant.id,
                  cart: quantity,
                });
              } else {
                foundCookie.cart = foundCookie.cart + quantity;
              }
              const newQuantity = [...props.cart];

              props.setCart(newQuantity);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Props>> {
  const plantId = parseIntFromContextQuery(context.query.plantId);

  if (typeof plantId === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Product not found',
      },
    };
  }

  const foundPlant = await getPlantsById(plantId);

  if (typeof foundPlant === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Product not found',
      },
    };
  }

  return {
    props: {
      plant: foundPlant,
    },
  };
}
