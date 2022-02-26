//  console.log('index.js loaded');
// const URL = "http://localhost:3000/dogs";
const list = document.getElementById("doglist");

fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  // .then((resultJSON) => console.log(resultJSON)
  .then((resultJSON) => {
    for (const dog of resultJSON.dogs) {
      // console.log({ dog });
      const li = document.createElement("li");
      li.textContent = `Dog name: ${dog.name}, age: ${dog.age}`;
      list.appendChild(li);
    }
  })
  .catch((error) => console.error(error.message));


const dogform = document.getElementById("dogform");
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");


dogform.addEventListener("submit", (e) => {
  
  fetch("http://localhost:3000/dogs", { 
    method: "POST",
    headers: {
      'content-type': 'application/json',
    },
     body: JSON.stringify({ name: nameField.value, age: ageField.value })
  })
  .then(response => response.json())
  .then((resultJSON) => {
      const dog = resultJSON.dog;
      const li = document.createElement("li");
      li.textContent = `Dog name: ${dog.name}, age: ${dog.age}`;
      list.appendChild(li);
  })
  .catch((error) => console.error(error.message));
})

