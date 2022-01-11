// két leggyakoribb karakter visszaadása, és melyik hányszor fordul elő: kulcs - érték pár, vagyis objektum
// filename as a parameter
// 0. function név, paraméter, retrun típusának megadása -- git commit
// 1. let content: string
// 2. file beolvasás: try - catch: read file és mentés a content-be -- git commit
// 3. mivel a file-ból a characterek kellenek, ezért splittel array létrehozás: character array
// 4. létrehozom a characterMap-et amibe a character array értékei kerülnek, de most még üres
// 5. végigitárálás a characters tömbön for of-al: 
// 6. HA a character már szerepel a characters array-ben, akkor a character érétkét növelem eggyel
// 7. characterMap[character]-nek deklárálás 1-t, ezzel kerül bele az objektumba

// 8. let result, ami egy objektum
// 9. let most common character KEY
// 10. most common character VALUE
// 11. mivel a második leggyakoribb is kell, ezért ezt is létre kell hozni, key-t és value-t is
// 12. végig megyünk a charactersMap-n for ciklussal: Object.entries: visszaadja a keyt és value-t egy tömbben: let [key, value]

// 13. IF: a value nagyobb mint a mostcommonvalue, akkor:
// 2 dolog: mostcommanvalue-ban lévő dolgokat tegye át a secondbe és az uj most common dolokat, tegye bele a most common valueba
// 14. else if: 
// ha a value nagyonn mint a second common, akkor:
// a second key-be tegye a key-t, és a second valueba tegye a value-t

// 15. let result üres objektum
// 16. a result key-e a most common key, aminek a value-ja a most common value
// 17. a result key-e a second most common key, aminek a value-ja a second most common value
// 18. teszt: console.log(result)

// note: for ciklus if-else if mégegyszer:
// ha a leggyakoribbnál nagyobb az adott cuccmó, akkor bekerül a leggyakoribba, 
// ha csak a második leggyakoribbnál nagyobb csak a cuccmó, akkor a második leggyakoribba kerül bele


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

    // longer solution:
    
    let mostCommonCharacterKey: string = '';
    let mostCommonCharacterValue: number = 0;

    // plusz kell a második leggyakoribb is az objektumba, ezért:
    let secondMostCommonCharacterKey: string = '';
    let secondMostCommonCharacterValue: number = 0;

    for (let [key, value] of Object.entries(charactersMap)) {
      if (value > mostCommonCharacterValue) {

        // első helyről áttesszük a második helyre: key-t és value-t is
        secondMostCommonCharacterKey = mostCommonCharacterKey;
        secondMostCommonCharacterValue = mostCommonCharacterValue;

        // az újat pedig tegye bele a mostCommonba, key-t és value-t is
        mostCommonCharacterKey = key;
        mostCommonCharacterValue = value;

        // else if: ha a value nagyobb mint a second most character value, akkor:
        // az adott körben a second helyre kell elmenteni az adott key-t és adott value-t
      } else if (value > secondMostCommonCharacterValue) {
        secondMostCommonCharacterKey = key;
        secondMostCommonCharacterValue = value;
      }
    }

    let result: { [key: string]: number } = {};
    // eredmény kulcs érték párok:
    // result: key: most common key, value: most common value
    // result 2nd: key: second most common key, value: second most common value

    result[mostCommonCharacterKey] = mostCommonCharacterValue;
    result[secondMostCommonCharacterKey] = secondMostCommonCharacterValue;

    // teszt: OK
    console.log(result);
    return result;
  }

// teszt 2 verzio: ezt teszem console.log-ba: OK
getTwoMostCommonCharacters('countchar.txt');
