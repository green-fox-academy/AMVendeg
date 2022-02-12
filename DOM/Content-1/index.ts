// 1)  Append every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.

// first solution
let myApple: string = document.querySelector('.apple').textContent;
let myBanana: string = document.querySelector('.balloon').innerHTML;
let myCar: string = document.querySelector('.cat').innerHTML;

let animal: Element = document.querySelector('.animals');
animal.append(myApple);
animal.append(myBanana);
animal.append(myCar);


// second solution
let animalList: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');
let newAnimals: string[] = [];
for (let i: number = animalList.length - 1; i >= 0; i--) {
  newAnimals.push(animalList[i].textContent);
}
console.log(newAnimals);


// second solution
let animalList2: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');
let newAnimals2: string[] = [];
for (let i: number = animalList2.length - 1; i >= 0; i--) {
  newAnimals2.push(animalList2[i].innerHTML);
}
console.log(newAnimals2);
