// this is a little special name day app for a friend of mine :)

class NameDay {
  name: string;
  date: string;
  abcletters: string [];

  constructor(name: string, date: string) {
    this.name = name;
    this.date = date;
    this.abcletters = [
      'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 
      'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
      'ö', 'p', 'q', 'r', 's', 'sz', 't', 'ü', 
      'ű', 'u', 'ú', 'v', 'x', 'y', 'z', 'zs'];
  }

  congrat(): string {
    return `\nHappy nameday to ${this.name}!! :-)\n`;
  }

  surprise(): void {
    console.log(`***  ***\n********\n ******\n  ****\n   **\n`);
  }

  nameLetterCounter(name: string): void {
    let splittedName = name.split('');
    let abcLetters = [
      'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 
      'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
      'ö', 'p', 'q', 'r', 's', 'sz', 't', 'ü', 
      'ű', 'u', 'ú', 'v', 'x', 'y', 'z', 'zs'];
      
    splittedName.forEach(function(source){
      console.log(source, 'is at', abcLetters.indexOf(source), 'position in ABC');
    });
  }
    
    happinessCounter(): string {
      let number: number = Math.floor(Math.random()* 20);
      let repeatedString = '*';
      return `\nExpected happiness level tomorrow: ${repeatedString.repeat(number)}\n`;
    }

    nameOfAncientScandinavian(): string {
      let yourScandinavianName: string = '';
      let scandinavianNameList: string [] = ['Aslaug', 'Bjørg', 'Freydis', 'Frida', 'Ingrid', 
      'Nanna', 'Sigrid', 'Siv', 'Tyra', 'Valkyrie'];
      let randomIndexNumber: number = Math.floor(Math.random() * (scandinavianNameList.length -1))
      return yourScandinavianName = `Your scandinavian ancient name is: ${scandinavianNameList[randomIndexNumber]}\n`;
    }
  }

  export { NameDay };
