import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { plants } from '../../database/plants';

const plantStyles = css`
  width: 300px;
  height: 500px;
  border-radius: 25px;
  border: 2px solid #587d71;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const imageStyles = css`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin: 0;
`;

const plantNameStyles = css`
  background-color: #587d71;
  color: #f9eccc;
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: 'Lavishly Yours', cursive;
  height: 40px;
`;

const priceStyles = css`
  font-weight: 700;
  position: relative;
  bottom: 325px;
  left: 240px;
  text-decoration: underline overline #587d71;
`;

const descriptionStyles = css`
  font-weight: 500;
  text-align: center;
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
`;

const originStyles = css`
  font-weight: 200;
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
`;

const careArrangementStyles = css`
  display: flex;
  justify-content: center;
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

      <div css={plantStyles} key={`plant-${props.plant.id}`}>
        <Image
          css={imageStyles}
          src={`/${props.plant.id}-${props.plant.name}.jpg`}
          alt={`photo of ${props.plant.name}`}
          width="300"
          height="300"
        />
        <h1 css={plantNameStyles}>{props.plant.name}</h1>
        <div css={priceStyles}>{props.plant.price}</div>
        <h3 css={descriptionStyles}>Origin</h3>
        <p css={originStyles}>{props.plant.origin}</p>
        <h3 css={descriptionStyles}>Care</h3>
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
