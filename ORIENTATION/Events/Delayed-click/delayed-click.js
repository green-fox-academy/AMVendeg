// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const timeOut = setTimeout(() => {
    // noteElement.classList.remove('.noteOff');
    const delayNote = document.createElement('h2');
    delayNote.textContent = '2 seconds elapsed';
    document.querySelector('.container').appendChild(delayNote);
  }, 2000);
});



