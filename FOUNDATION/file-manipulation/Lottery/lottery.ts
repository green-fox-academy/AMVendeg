import * as fs from 'fs';

function getTheMostCommonNumbers(fileName: string): {[key: string]: number} {
  let content: string;
  try {
    content = fs.readFileSync(fileName, 'utf-8');
  } catch (error) {
    throw error;
  }

  const characters: string [] = content.split(';');
  let charactersMap: { [key: string]: number } = {};

  for (let character of characters) {
  
    if (charactersMap[character]) {
      charactersMap[character]++;
    } else {
      charactersMap[character] = 1;
    }
  }
  
  const result = Object.entries(charactersMap).sort((a,b) => b[1] - a[1]);

    // teszt: OK
    console.log(result);
    return {};
  }

// teszt 2 verzio: ezt teszem console.log-ba: OK
getTheMostCommonNumbers('lottery.csv');
