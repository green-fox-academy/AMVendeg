--one-to-one

CREATE TABLE person (
  id INT PRIMARY KEY,
  personal_id_number VARCHAR(13),
  name VARCHAR(100)
);

CREATE TABLE personal_id_card (
  number VARCHAR(13) PRIMARY KEY,
  person_id INT --references to person(id)
);


-- SQL workbanch installed :) practice in it.
-- SQL BOLT exercises are done.
