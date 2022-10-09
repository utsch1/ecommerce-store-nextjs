export const plants = [
  {
    id: 1,
    name: 'alocasia cucullata',
    origin: 'China, India, Sri Lanka, Burma',
    careWater: 3,
    careLight: 2,
    careFertilize: 1,
    price: 25,
    description: `Alocasia Cucullata is a rare Aroid with arrowhead-shaped foliage in an amazing metallic blue colour. If you want to keep this Alocasia happy, you should keep it in a very well aerated potting mix that dries out completely between waterings. If you prefer making potting mixes yourself, the best mix would be very light on peat moss, but with addition of sand, perlite and bark.`,
  },
  {
    id: 2,
    name: 'monstera deliciosa',
    origin: 'Mexico, Panama',
    careWater: 1,
    careLight: 1,
    careFertilize: 1,
    price: 30,
    description: `A true houseplant classic- the iconic Monstera Deliciosa also commonly known as fruit salad or swiss cheese plant. The split leaves are so beautiful that they’ve been extensively used in art and design. Monstera Deliciosa features large, heart-shaped leaves. As the plant matures, the leaves get splits and eventually holes. It’s a perfect plant for anyone looking to add some bold foliage into their room. It’s an avid grower and you’ll find yourself trimming it regularly or else it will take over your apartment. Monstera loves to climb and if you’ll let her, she will produce more mature foliage quicker. Good tip: if your plant’s aerial roots are all over the place, you can either trim them or bury them in the soil with the plant.`,
  },
  {
    id: 3,
    name: 'philodendron red cherry',
    origin: 'Caribbean, Colombia, Venezuela',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 20,
    description: `Philodendron Red Cherry is a new and highly decorative variety with glossy foliage that changes colour! New leaves emerge a bright red fading into burgundy and eventually mature to green. If you love colourful Aroids, then this plant is your perfect match! Philodendron Red Sun is a climber and can grow quite tall, so it will love you for giving it a pole on its way up!`,
  },
  {
    id: 4,
    name: 'scindapsus pictus',
    origin: 'Southeast Asia',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 20,
    description: `Scindapsus Pictus Exotica, also known as Satin Pothos, is part of the Aracae family and known for its large matte green foliage with silver markings. Despite many common names it is not a Pothos nor a Philodendron however it is also a very hardy plant. One of the most sought after characteristics of Scindapsus Pictus Exotica is it’s foliage- matte green with silver splashes. Although the leaves look similar on all three varieties of Scindapsus, they do have a differentiating factor- Exotica’s leaves are larger than its sister plants with a lot of silver markings.`,
  },
  {
    id: 5,
    name: 'anthurium clarinervium',
    origin: 'Mexico',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 25,
    description: `Anthurium Clarinervium is a very interesting plant which unlike other Anthuriums is grown for its thick, green, heart-shaped & leather-like leaves with bright coloured veins. It’s a spectacular plant from Araceae family, endemic to Mexico which grows naturally as an epiphyte. That being sad, your Anthurium will be happiest grown in soil-less medium, for example an orchid mix.Although Anthurium Clarinervium produces a flower, it is a rather unexciting one. We recommend cutting it off so that the plant can focus its energy on producing new growth.`,
  },
  {
    id: 6,
    name: 'peperomia polybotrya',
    origin: 'Central America',
    careWater: 3,
    careLight: 2,
    careFertilize: 2,
    price: 20,
    description: `The Peperomia polybotrya is a compact peperomia speciesplant well suited for life as an easy to care for house plant.The plant features heart-shaped, succulent foliage and typically only achieves a maximum height of one foot. Some call the plant the “Chinese Money Plant” assuming they are the same. They do have similar leaf shapes. Caring for the coin-leaf peperomia is not hard, but you may want to review a few basic plant care tips.`,
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO plants ${sql(
      plants,
      'name',
      'origin',
      'careWater',
      'careLight',
      'careFertilize',
      'price',
      'description',
    )}
  `;
};

exports.down = async (sql) => {
  for (const plant of plants) {
    await sql`
      DELETE FROM
        plants
      WHERE
        name = ${plant.name} AND
        origin = ${plant.origin} AND
        careWater = ${plant.careWater} AND
        careLight = ${plant.careLight} AND
        careFertilize = ${plant.careFertilize} AND
        price = ${plant.price} AND
        description = ${plant.description}
    `;
  }
};
