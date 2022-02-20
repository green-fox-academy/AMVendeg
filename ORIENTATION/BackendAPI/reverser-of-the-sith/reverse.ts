let inputText: string = 'This is my example sentence. Just for fun.';
let randomWordArr: string[] = ['Arrgh', 'Errr-Errr', 'Uhm', 'Hahaha', 'Khmm'];

let sentences: string[] = [];
let words: string[] = [];
let result: string = '';

export function reverse(text:string) {

if (!text || text === '') {
  let error = {
    "error": "Feed me some text you have to, padawan young you are. Hmmm."
  }
  console.log(error);
}

let sentences = text.split('.');
console.log(sentences);

for (let i: number = 0; i < sentences.length; i++) {

  words = sentences[i].split(' ');

    for (let i = 0; i < words.length; i = i + 2) {
      [words[i], words[i + 1]] = [words[i + 1], words[i]];
    }
  
  sentences[i] = words.join(' ');
  sentences.push(sentences[i]);
  sentences.push(randomWordArr[i]);
  result = sentences.join('. ').replace('..','.').replace('  . ',' ');
  }
}

// reverse(inputText);