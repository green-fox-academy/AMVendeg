// const URL = 'https://api.kanye.rest';

const myAsyncAjax = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

myAsyncAjax(URL).then(response => {
  console.log(response);
});


// NOTES
/*
THEN:
URL - API, amire elmegy a GET kérés
Van egy myAsyncAjax nevű function-m, ami egy új promise-al tér viszza, ami azt csinálja hogy létrehoz egy GET-response-error folyamatot

Ennek a promise-nak 2 paramétere van: a resolve és a reject
ebben a new Promise-ban létrehozok egy új xmlhttprequest-t, amivel:
- GET-el megyek az URL-re
- onload-al csinálok egy response text-t, ami a resolve lesz
- onerror-al pedig a reject-t kezelem, létrehozok hozzá egy status text-t
- majs send()-el elküldöm (ez mindig kell)

Meghivom ezt az async functiont a megadott URL-n és a then-el kezelem hogy micsináljön a visszaérkező válasszal, pl. írja ki konzolra

*/


// error
const erroredFunction = () => {
  return new Promise(() => {
    throw new Error('Uh-oh!');
  });
};

const promise = erroredFunction();
promise.catch(error => {
  console.log(error.message);
});

// NOTE for catch:
/* 
létrehozok egy functiont ami új promise-ként létrehoz egy throw error-t
majd ezt a function-t beleteszem egy promise nevü változóba

a promise változóra ráteszem a catch-t, és console logozom 
*/ 


// const URL = 'http://api.icndb.com/jokes/random';

// fetch(URL)
//   .then(response => response.json())
//   .then(myJson => console.log(myJson));


// NOTE for fetch:
/*
Fetch alapértelmezettem GET metódus, elmegy a paraméterben megadott URL-re
- első then ágban megmondom h a response-al micsináljon, általában azt kell mondanom h alakítsa json()-né
- másodikban már azt mondhatom, h ezzel a json-nel micsináljon, pl. tegye ki consoleba
*/