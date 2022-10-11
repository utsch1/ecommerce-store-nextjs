import { sql } from './connect';

export type Plant = {
  id: number;
  name: string;
  origin: string;
  careWater: number | null;
  careLight: number | null;
  careFertilize: number | null;
  price: number;
  description: string | null;
};

// get all plants
export async function getPlants() {
  const plants = await sql<Plant[]>`
    SELECT * FROM plants
  `;
  return plants;
}

// get single plant
export async function getPlantsById(id: number) {
  const [plant] = await sql<Plant[]>`
    SELECT
      *
    FROM
      plants
    WHERE
      id = ${id}
  `;
  return plant;
}
