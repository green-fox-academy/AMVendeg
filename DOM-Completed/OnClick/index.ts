'use strict';

//  Turn the party on and off by clicking the button. (the whole page)
const button = document.querySelector('button');

button.onclick = () => {
  document.querySelector('body').classList.add('party');

  // toggle is better, I can swtich off that terrible gif army
  document.querySelector('body').classList.toggle('party');
};