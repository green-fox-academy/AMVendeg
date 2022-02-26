SELECT title, director, year
FROM movies;

SELECT * 
FROM movies
WHERE Id = 6;

SELECT * 
FROM movies
WHERE year NOT BETWEEN 2000 AND 2010;

SELECT *
FROM movies
WHERE director = 'John Lasseter';

SELECT title, year 
FROM movies
WHERE year <= 2003;


SELECT title, director 
FROM movies 
WHERE title LIKE "Toy Story%";


SELECT title, director 
FROM movies 
WHERE director != "John Lasseter";


SELECT title
FROM movies 
WHERE title LIKE ("WALL-%");


SELECT DISTINCT director 
FROM movies
ORDER BY director ASC;


SELECT title, year 
FROM movies
ORDER BY year DESC
LIMIT 4;


SELECT title, year 
FROM movies
ORDER BY year DESC
LIMIT 4;


-- all city in US by latitude desc
SELECT * 
FROM north_american_cities
WHERE country = 'United States'
ORDER BY latitude DESC;


-- cities west from Chicago
SELECT city, longitude 
FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude ASC;


-- 2 largest cities in Mexico by population
SELECT city, population
FROM north_american_cities
WHERE country = 'Mexico'
ORDER BY population desc
LIMIT 2;


-- third and fourth largest cities in US by population
SELECT city, population
FROM north_american_cities
WHERE country = 'United States'
ORDER BY population desc
LIMIT 2 OFFSET 2;


-- INNER JOIN: international sales are bigger, order by rating desc
SELECT * 
FROM movies
INNER JOIN boxoffice 
    ON movies.id = boxoffice.movie_id
WHERE international_sales > domestic_sales
ORDER BY rating DESC;


-- moives only by rating desc
SELECT * 
FROM movies
INNER JOIN boxoffice 
    ON movies.id = boxoffice.movie_id
ORDER BY rating DESC;


-- list of all buildings that have employees
SELECT DISTINCT building 
FROM employees;


-- list of all buildings and their capacity
SELECT building_name, capacity 
FROM buildings;


-- List all buildings and the distinct employee roles in each building - empty is also in
SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;


-- name and role of all employees who have not been assigned to a building
SELECT name, role
FROM employees
WHERE building IS NULL;


-- names of the buildings that hold no employees
SELECT building_name
FROM buildings
LEFT JOIN employees
    ON buildings.building_name = employees.building
WHERE employees.name IS NULL;


-- longest time that an employee has been at the studio
SELECT MAX(years_employed)
FROM employees;


-- average number of years employed by employees in that role
SELECT role, AVG(years_employed)
FROM employees
GROUP BY role;


-- total number of employee years worked in each building 
SELECT building, SUM(years_employed)
FROM employees
GROUP BY building;



