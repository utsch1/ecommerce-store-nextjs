import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPlants, Plant } from '../../database/plants';

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

const arrangementStyles = css`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;

const plantStyles = css`
  width: 300px;
  height: 500px;
  border-radius: 25px;
  border: 1px solid #587d71;
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
  font-size: 20px;
  position: relative;
  bottom: 325px;
  left: 260px;
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

type Props = {
  plants: Plant[];
};

export default function Shop(props: Props) {
  return (
    <div>
      <Head>
        <title>Plant shop</title>
        <meta name="plant shop" content="Shop tropical plants here" />
      </Head>

      <div css={headlineDivStyles}>
        <h1>shop</h1>
      </div>

      <div css={arrangementStyles}>
        {props.plants.map((plant) => {
          return (
            <div css={plantStyles} key={`plant-${plant.id}`}>
              <Link
                href={`/shop/${plant.id}`}
                data-test-id="product-<product id>"
              >
                <Image
                  css={imageStyles}
                  src={`/${plant.id}-${plant.name}.jpg`}
                  alt={`photo of ${plant.name}`}
                  width="300"
                  height="300"
                />
              </Link>
              <h2 css={plantNameStyles}>{plant.name}</h2>
              <div css={priceStyles}>{plant.price}</div>
              <h3 css={descriptionStyles}>Origin</h3>
              <p css={originStyles}>{plant.origin}</p>
              <h3 css={descriptionStyles}>Care</h3>
              <div css={careArrangementStyles}>
                <div css={careStyles}>
                  <Image
                    src={`/water-${plant.careWater}.png`}
                    alt="icon for watering the plant"
                    width="20"
                    height="20"
                  />
                </div>
                <div css={careStyles}>
                  <Image
                    src={`/light-${plant.careLight}.png`}
                    alt="icon for light"
                    width="20"
                    height="20"
                  />
                </div>
                <div css={careStyles}>
                  <Image
                    src={`/fertilize-${plant.careFertilize}.png`}
                    alt="icon for fertilizing the plant"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const plants = await getPlants();
  return {
    props: {
      plants: plants,
    },
  };
}
