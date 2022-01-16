// Write a program which selected a number between 1 and 100 at random. 
// The player is then asked to enter a guess. 
// If the guess wrong the program gives feedback and keeps asking for new guesses until one is correct.
// Make the range customizable (ask for it before starting the guessing).
// You can add lives. (optional)

function selectRandomNum(tipNum: number): void {
  let selectedNum: number = Math.floor(Math.random() * 100 + 1);
  
    if (tipNum === selectedNum) {
      console.log('Yaay, you won!');
    } else {
      console.log('your tip does not match.');
    }
  }

selectRandomNum(30);

