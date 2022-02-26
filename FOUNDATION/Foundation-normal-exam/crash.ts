
import * as fs from 'fs';

function crashCounterByWeather(): string {

  let content: string = '';
  try {
    content = fs.readFileSync('crash-incidents.csv', 'utf-8');
  } catch {
    console.log('The file is missing or not exist or wrong.');
  }
  // read file: OK console.log(content);

  let contentByLines: string[] = content.split('\n');
  // split by rows OK: console.log(contentByLines);
  
  let contentMatrix: string [][] = [[]];
  let goodWeatherArr: string[] = [];
  let badWeatherArr: string[] = [];

  const goodWeather = ["CLOUDY", "CLEAR"]
  const badWeatherArray = ["RAIN", "FREEZING RAIN", "SNOW", "FOG", "SEVERE", "CROSSWINDS"]

  for (let i: number = 0; i < contentByLines.length; i++) {
    contentMatrix[i] = contentByLines[i].split(';');

    // includes solution version
    if (goodWeather.includes(contentMatrix[i][5])) {
        goodWeatherArr.push(contentMatrix[i][5]);
    }
    // === solution version
    else if (contentMatrix[i][5] === 'RAIN' || 
        contentMatrix[i][5] === 'FREEZING RAIN' || 
        contentMatrix[i][5] === 'SNOW' || 
        contentMatrix[i][5] === 'FOG' || 
        contentMatrix[i][5] === 'SEVERE CROSSWINDS') {
        badWeatherArr.push(contentMatrix[i][5]);
    }
  }
  return `The amount of crashes at good weather conditions: ${goodWeatherArr.length}.\nThe amount of crashes at bad weather conditions: ${badWeatherArr.length}`;
} 

console.log(crashCounterByWeather());