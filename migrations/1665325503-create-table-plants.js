exports.up = async (sql) => {
  await sql`
    CREATE TABLE plants(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  origin varchar(300) NOT NULL,
  care_water integer,
  care_light integer,
  care_fertilize integer,
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
