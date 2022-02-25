//  console.log('index.js loaded');
const URL = "http://localhost:3000/dogs";
const list = document.getElementById("doglist");

fetch(URL)
  .then(response => response.json())
  // .then((resultJSON) => console.log(resultJSON)
  .then((resultJSON) => {
    for (const dog of resultJSON.dogs) {
      console.log({ dog });
    }
  })
  .catch((error) => console.error(error.message));

// a resultJSON = a dogs listával