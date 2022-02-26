import * as fs from 'fs';

// generate today's wheather with sillyWeather :)


let tempBefore: number[] = [12, 3, 10, 33, 22, 29, 7];
let tempBeforeSum: number = tempBefore.reduce((a, b) => a + b);
// calculate yesterday's AVG temprature
let tempBeforeAVG: number = tempBeforeSum / tempBefore.length;
//console.log(tempBeforeAVG);

const SunShineArrive: number = 8.20; // min
const stratosphereDistance: number = 30; // km


// calculate temprature by distance of the Sun to Earth and stratosphere and AVG temprature of yesterday
function sillyTempToday(): number {
    let temperature: number = (SunShineArrive + stratosphereDistance) / tempBeforeAVG;
    return temperature;
 }

 // cloud generate function
 let cloudForms: string [] = ['cirrus', 'stratus', 'cumulus', 'nimbus'];
 function coludy() {
    let generatedCloud: string = '';
    for (let i: number = 0; i < cloudForms.length; i++) {
        let randomIndex: number = Math.floor(Math.random() * (cloudForms[i].length - 1));
        generatedCloud += cloudForms[i][randomIndex];
       
    }
    return generatedCloud;
}


// windSpeed calculator
// topography level depends on city
let topographyLevel: number = Math.random() * 100; 
const gravityConst: number = 9.8;
let windSpeed = Math.round(gravityConst * topographyLevel);


// wearing shuffle function
function shuffle (arr: string[]) {
    let j, x, y, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[j] = x;
        y = arr[i];
        arr[i] = y;
    }
    return arr;
  }


let wearOnTop: string [] = ['white spotted coat', 'ugly xmas hoodie', 'lipstick', 'terrible parfum', 'no smink', 'leather t-shirt'];
let wearOnBottom: string [] = ['torn jeans', 'stockings', 'knitted skirt', 'pink boots', 'polar socks'];
let wearExtra: string [] = ['hair net', 'fake glasses', 'wrist clamp'];

// calculate wearing to today's wheather
function calculateWearing () {
    wearOnTop = shuffle(wearOnTop);
    wearOnBottom = shuffle(wearOnBottom);
    wearExtra = shuffle(wearExtra);
    let needToWear = wearOnTop.concat(wearOnBottom, wearExtra);
    needToWear = needToWear.filter((v, i, a) => a.indexOf(v) === i);
    return (needToWear); 
}


const takeWithYouKeys: string [] = ['goodToHave', 'important', 'mustHave'];
const takeWithYouValues: string [] = ['Julia Roberts', 'pack of brick', 'chickenburger', 'solar bear'];

let mustTakeWithYou = {};
// takeWithYou: temprate, windspeed, gravity and object: must take with you
function calcTakeWithYou () {
    if (sillyTempToday() + windSpeed > gravityConst) {
        
        let randomKey: number = Math.floor(Math.random() * (takeWithYouKeys.length - 1));
        let randomValue: number = Math.floor(Math.random() * (takeWithYouValues.length - 1));
        return mustTakeWithYou = {[takeWithYouKeys[randomKey]]: takeWithYouValues[randomValue]};
    } 
    return; //  kitalálom mivel térjek vissza
}


// LoveInTheAir level counter  (*****)
let levelCounter: number = Math.random() * 10;
let drawLevel = '';

for (let i = 0; i < levelCounter; i++) {
        drawLevel += '* ';
}
   


// generate today's silly weather:

let sillyWeather = {
    temperature: sillyTempToday().toFixed(2),
    cloudStatus:  coludy(),
    gravity: gravityConst,
    windSpeed: windSpeed + ' km/h',
    shouldWear: calculateWearing(),
    loveInTheAirLevel: drawLevel,
    takeWithYou: calcTakeWithYou(),
}
console.log(sillyWeather);


try {
    fs.writeFileSync('silly_weather_log.txt', JSON.stringify(sillyWeather, null, 2));
    let myFile = fs.readFileSync('silly_weather_log.txt', 'utf-8');
    //console.log(myFile);

} catch (error) {
    console.log("Don't go anywhere, it's cold outside");
}

