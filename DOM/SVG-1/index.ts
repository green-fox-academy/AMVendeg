// 1) Select the rectangle by the ID: "very-rectangle"
// 2) Change the rectangle's position to x:50, y:50
// 3) Change its fill to tomato

const theRectangle = document.getElementById('very-rectangle');
theRectangle.setAttribute('x', '50');
theRectangle.setAttribute('y', '50');

theRectangle.style.fill = 'tomato';

