// At the beginning, add (append) ten stars to random coordinates via JavaScript. 
// You'll have to create an element with class 'star' and set it an inline style. 
// The left and top coordinates should be in % or vw/vh units so that the stars move 
// if the window size changes.


const myWorld = document.querySelector('.world');
let numberOfStars: number = 10;

for (let i: number = 0; i < numberOfStars; i++) {
  const widthCoordinate: number = Math.floor(Math.random()*100);
  const heightCoordinate: number = Math.floor(Math.random()*100);

  const newStar = document.createElement('div');
  newStar.className = 'star';
  newStar.style.left = `${widthCoordinate}vw`;
  newStar.style.top = `${heightCoordinate}vh`;

  myWorld.appendChild(newStar);
}
