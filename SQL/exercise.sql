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

SELECT title, year FROM movies
WHERE year <= 2003;

