// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

// note: VScode says keyCode is deprecated

const myDocument = document.querySelector('body');
const h1 = document.querySelector('h1');

myDocument.addEventListener('keyup', event => {
  console.log(':key press counter in console');
  h1.innerHTML = `Last pressed key code is: ${event.keyCode}`;
});

