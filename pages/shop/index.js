import { css } from '@emotion/react';
// import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Head from 'next/head';
import Image from 'next/image';

const plants = [
  {
    id: 1,
    name: 'alocasia cucullata',
    origin: 'China, India, Sri Lanka, Burma',
    careWater: 3,
    careLight: 2,
    careFertilize: 1,
    price: 24.99,
    alt: 'picture of alocasia cucullata',
  },
  {
    id: 2,
    name: 'monstera',
    origin: 'Mexico, Panama',
    careWater: 1,
    careLight: 1,
    careFertilize: 1,
    price: 30.99,
    alt: 'picture of monstera',
  },
  {
    id: 3,
    name: 'philodendron red cherry',
    origin: 'Caribbean, Colombia, Venezuela',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 19.99,
    alt: 'picture of philodendron red cherry',
  },
  {
    id: 4,
    name: 'scindapsus pictus',
    origin: 'Southeast Asia',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 19.99,
    alt: 'picture of scindapsus pictus',
  },
  {
    id: 5,
    name: 'anthurium clarinervium',
    origin: 'Mexico',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 24.99,
    alt: 'picture of anthurium clarinervium',
  },
  {
    id: 6,
    name: 'peperomia polybotrya',
    origin: 'Central America',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 19.99,
    alt: 'picture of peperomia polybotrya',
  },
];

// const headlineStyles = css`
//   width: 100%;
//   height: 100px;
//   background-color: #754668;
//   margin: 0;
//   position: relative;
//   top: 150px;
// `;

const arrangementStyles = css`
  display: flex;
  flex-wrap: wrap;
`;

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
  height: 30px;
  border-radius: 50%;
  background-color: #754668;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
  padding: 0;

  :hover {
    transform: scale(1.5);
    transition: 0.5s;
  }
`;

export default function Shop() {
  return (
    <div>
      <Head>
        <title>Plant shop</title>
        <meta name="plant shop" content="Shop tropical plants here" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <div css={headlineStyles}>
        <h1>shop</h1>
      </div> */}
      <div css={arrangementStyles}>
        {plants.map((plant) => {
          return (
            <div css={plantStyles} key={`plant-${plant.id}`}>
              <Image
                css={imageStyles}
                src={`/${plant.id}-${plant.name}.jpg`}
                alt={plant.alt}
                width="300"
                height="300"
              />
              <h2 css={plantNameStyles}>{plant.name}</h2>
              <div css={priceStyles}>{plant.price}</div>
              <div css={descriptionStyles}>Origin</div>
              <div css={originStyles}>{plant.origin}</div>
              <div css={descriptionStyles}>Care</div>
              <div css={careArrangementStyles}>
                <div css={careStyles} />
                <div css={careStyles} />
                <div css={careStyles} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
