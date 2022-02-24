const norrisURL = 'http://api.icndb.com/jokes/random';

const norrisBtn = document.getElementById('give-me-joke');

norrisBtn.addEventListener('click', () => {

  fetch(norrisURL)
    .then((response) => response.json())
    .then((resJson) => resJson.value.joke)
    .then((joke) => {
      const jokeDiv = document.querySelector('.jokeDiv');
      const theJoke = document.createElement('p');
      theJoke.textContent = joke.replaceAll('&quot;', '"');
      jokeDiv.appendChild(theJoke);
    })
});

