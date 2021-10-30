'use strict';


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

  

    let lineCount:number  = 4;
    let pyramidSelf: string ='';
    for (let i = 0; i < lineCount; i++) {                              // addig csináld a benned lévő space és * létrehozást, amig el nem éred a sorok számát (4)
        let pyramidSpace: string = '';                              

        for(let j = 0; j < (lineCount-i-1); j++) {                     // közben benne j for ciklussal hozd létre a space-eket, amíg k kisebb mint 4-i-1
             pyramidSpace += ' ';
        }
       
        for (let k = 1; k <= 2*i + 1; k++) {                        // és közben a k ciklussal csinálj *-kat, amig k kisebb v egyenlo mint a az adott sor * 2 + 1
            pyramidSelf +='*';                                      // * karakterekkel csináld meg
        }

        console.log(pyramidSpace+pyramidSelf);                     // space és piramis maga együtt uccu a console-ra
        pyramidSelf='';                                           // következő sorok elején lévő első karakter, ha ez nincs akkor viszont dupla * kerünk minden kövi sorba
    }



export function drawPyramid(lineCount: number) {
  // write your code here for Gradescope testing
}
