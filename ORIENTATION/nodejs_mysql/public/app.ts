// test: alert('hello');
import { Movie } from '../types';

const table = document.querySelector('table') as HTMLTableElement;

const BASE_URL = 'http://localhost:3000';

function getMovies(): Promise<Movie[]> {
  return fetch(`${BASE_URL}/movies`)
    .then(resp => resp.json())
    .then(movies => movies);
// a movies az a resp.json eredménye json formátumban a movie-k listája
//     .catch((err) => console.log('Err', err))
//     .finally(() => {
//       console.log('bármi');
//     });
}
// getMovies();



// getMovies() - 10 filmet tartalmaz a getMovies() miatt, 
// rendermovie()-n belül meghívjuk a createCellElement saját function-t
// ami létrehozza a mezőket és feltölti az adatokkal
// megfogtuk querySelectorral a táblázatot, ami a table nevet kapta
// a table row-kat a table-hoz hozzá kell adni, különben ott lesz, de nem jelenik meg

function renderMovies(): void {
   getMovies().then(movies => {
     const tbody = document.createElement('tbody');

    movies.forEach(movie => {
      const tr = document.createElement('tr');
      tr.appendChild(createCellElement(`${movie.movie_id}`));
      tr.appendChild(createCellElement(`${movie.title}`));
      tr.appendChild(createCellElement(`${movie.runtime}`));
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
   });   
}


// create fields and fill with data from sql
function createCellElement(value: string): HTMLTableCellElement {
  const td = document.createElement('td');
  td.innerText = value;
  return td;
}

renderMovies();