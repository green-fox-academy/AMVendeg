// array elemeinet balra rotációja, vagyis az első elem mindig az utolsó helyre kerül

let arr: number[] = [1,2,3,4,5];


function leftRotation(rotationNumber: number, arr: number[]): number[] {

  for (let i: number = 0; i < rotationNumber; i++) {
    let tempNum: number = arr[0]; 
    arr.forEach((element, index) => {if (element === arr[0]) arr.splice(index, 1);});
    arr.push(tempNum);
  }
  return arr;
}


console.log(leftRotation(4,arr));