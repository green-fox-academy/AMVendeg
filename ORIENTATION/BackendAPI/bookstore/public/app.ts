
import { Book } from '../books';


const table = document.querySelector('table') as HTMLTableElement;

const BASE_URL = 'http://localhost:3000';

function getBooks(): Promise<Book[]> {
  return fetch(`${BASE_URL}/booklist`)
    .then(resp => resp.json())
    .then(books => books);
}


// test getBooks: console.log(getBooks());


function renderBooks(): void {
  getBooks().then(books => {
  
    books.forEach(book => {
      const tr = document.createElement('tr');
      tr.appendChild(createFields(`${book.book_name}`));
      tr.appendChild(createFields(`${book.aut_name}`));
      tr.appendChild(createFields(`${book.cate_descrip}`));
      tr.appendChild(createFields(`${book.pub_name}`));
      tr.appendChild(createFields(`${book.book_price}`));
      table.appendChild(tr);
    });
  });
}



function createFields(value: string): HTMLTableCellElement {
  const td = document.createElement('td');
  td.innerHTML = value;
  return td;
}

renderBooks();
