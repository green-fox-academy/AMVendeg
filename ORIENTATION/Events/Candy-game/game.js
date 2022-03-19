// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandyBtn = document.querySelector('.create-candies');
const candiesNumber = document.querySelector('.candies');
let candyCounter = 0;
const buyLollypopsBtn = document.querySelector('.buy-lollypops');
buyLollypopsBtn.disabled = true;
const lollypopCounter = document.querySelector('.lollypops');
let lollyPopIcon = '🍭';
let lollypopPrice = 100;

createCandyBtn.addEventListener('click', () => {
  candyCounter += 1;
  candiesNumber.textContent = `${candyCounter}`;

  if (candyCounter >= lollypopPrice) {
    buyLollypopsBtn.disabled = false;
    buyLollypopsBtn.addEventListener('click', () => {
      lollypopCounter.textContent += lollyPopIcon;
      candyCounter -= lollypopPrice;
      candiesNumber.textContent = `${candyCounter}`;
    });
  }
});


