// Create a simple HTML document with one button.
// If the user clicks the button 3 times, 
// and 5 seconds is already elapsed since the page is loaded, 
// a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const btn = document.querySelector('button');
let counter = 0;

btn.addEventListener('click', (event) => {
    counter += 1;
    if (counter === 3) {
      const timeOut = setTimeout(() => {
       let note = document.createElement('h2');
       note.textContent = `5 seconds elapsed and clicked ${counter} times`;
       document.querySelector('.container').appendChild(note);
       event.stopPropagation();
      }, 5000);
    }
});