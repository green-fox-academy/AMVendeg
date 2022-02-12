// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
//  2) change the <ul> element's background color to 'limegreen'
//  - use css class to change the color instead of the style property

let placeholderList: NodeListOf<HTMLLIElement> = document.querySelectorAll('li');
let fruits: string[] = ['apple', 'banana', 'cat', 'dog'];
let newList: string[] = [];

for (let i: number = 0; i < placeholderList.length; i++) {
  newList.push(placeholderList[i].textContent = fruits[i]);
}

console.log(newList);