let inputObj = {
  "text": "This is my example sentence. Just for fun."
};

let sentence = [];
let words = [];

export function reverseWords(text) {
let sentences = text.split('. ');

console.log(sentences);
  for (let i = 0; i < sentences.length; i++) {
    words.push(sentences[i].split(' '));

    
    for (let j = 0; j < words[i].length - 1; j = j + 2) {
      [words[i][j], words[i][j + 1]] = [words[i][j + 1], words[i][j]];
    }
  }
  sentence = words.join();
}

// reverseWords(inputObj.text);
// console.log(sentence);
