import * as fs from 'fs';

function getTwoMostCommonCharacters(fileName: string): { [key: string]: number } {
    let content: string;
    try {
      content = fs.readFileSync(fileName, 'utf-8');
    } catch (error) {
      //console.log('Houston, We have a problem.');
      throw error;
    }
    // file read test:
    // console.log(content);
    // return {}

    const characters: string [] = content.split('');
    // character array létrehozás teszt: OK
    // console.log(characters);

    // objektumom így néz ki {'a': 4, 'b': 3, ...}
    let charactersMap: { [key: string]: number } = {};
    
    for (let character of characters) {
      if (charactersMap[character]) {
        charactersMap[character]++;
      } else {
        charactersMap[character] = 1;
      }
    }

    // for ciklus és if teszt: OK
    // console.log(charactersMap);

    // shorter solution:
    // entries tömböt csinál a key-value-kból, majd sort-olom, a,b alapján: a: első, b a második elemet veszi fel, 
    // majd a 3 és 4 elemet veszi fel és így tovább
    // a[1] - b[1]--- ez pedig megmondja hogyan rendezze arraybe value alapján a leggyakoribb kerül a tömb a végére
    // b[1] - a[1]--- a leggyakoribb kerül a tömb elejére

    const result = Object.entries(charactersMap).sort((a,b) => a[1] - b[1]);

    // teszt: OK
    console.log(result);
    return {};
  }

// teszt 2 verzio: ezt teszem console.log-ba: OK
getTwoMostCommonCharacters('countchar.txt');



