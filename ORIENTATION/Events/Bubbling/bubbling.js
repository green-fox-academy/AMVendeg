// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//  - one for navigation
//  - one for zooming

const moveButtons = document.querySelectorAll('button');
const backgroundPicture = document.querySelector('.img-inspector');
let positionX = 0;
let positionY = 0;
const positionMove = 10;
let bgSize = 200;
const zoom = 20;

for (let i = 0; i < moveButtons.length; i++) {
  if (moveButtons[i].dataset.action === 'move') {
    moveButtons[i].addEventListener('click', () => {
      if (moveButtons[i].dataset.direction === 'up') {
        positionY -= positionMove;
        backgroundPicture.style.backgroundPositionY = `${positionY}px`;
      }
      if (moveButtons[i].dataset.direction === 'down') {
        positionY += positionMove;
        backgroundPicture.style.backgroundPositionY = `${positionY}px`;
      }
      if (moveButtons[i].dataset.direction === 'left') {
        positionX -= positionMove;
        backgroundPicture.style.backgroundPositionX = `${positionX}px`;
      }
      if (moveButtons[i].dataset.direction === 'right') {
        positionX += positionMove;
        backgroundPicture.style.backgroundPositionX = `${positionX}px`;
      }
    });
  }
  else {
    if (moveButtons[i].dataset.action === 'zoom') {
      moveButtons[i].addEventListener('click', () => {
        if (moveButtons[i].dataset.direction === 'in') {
          bgSize += zoom;
          backgroundPicture.style.backgroundSize = `${bgSize}%`;
        }
        if (moveButtons[i].dataset.direction === 'out') {
          bgSize -= zoom;
          backgroundPicture.style.backgroundSize = `${bgSize}%`;
        }
      });
    }
  }
}