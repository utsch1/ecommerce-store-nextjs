exports.up = async (sql) => {
  await sql`
    CREATE TABLE plants(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  origin varchar(30) NOT NULL,
  careWater integer,
  careLight integer,
  careFertilize integer,
  price integer NOT NULL,
  description varchar(1000)
  )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE plants
  `;
};
