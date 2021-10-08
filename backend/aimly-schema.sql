CREATE TABLE scores_classic (
  id SERIAL PRIMARY KEY,
  name VARCHAR(3) CHECK (name = upper(name)),
  score INTEGER
);

CREATE TABLE scores_tracking (
  id SERIAL PRIMARY KEY,
  name VARCHAR(3) CHECK (name = upper(name)),
  score INTEGER
);
