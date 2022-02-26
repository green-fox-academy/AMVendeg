const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const asteroidList: HTMLElement = document.querySelector('.asteroids');
asteroidList.innerHTML = '';

// console.log(asteroidList);

for (let i: number = 0; planetData.length; i++) {
  if (planetData[i].asteroid) {
    let newElement: HTMLElement = document.createElement('li');
    newElement.classList.add(planetData[i].category);
    newElement.textContent = planetData[i].content;

    asteroidList.appendChild(newElement);
  }
}
