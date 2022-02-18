
export interface User {
  id: number,
  name: string
};

const USERS: User[] = [
  {id: 1, name: 'Tomi'},
  {id: 2, name: 'Levi'},
  {id: 3, name: 'Balázs'},
  {id: 4, name: 'Vili'}
];


export class Database {
  private mentors: User[] = USERS;

  addMentor(user: User): void {
    this.mentors.push(user);
  }

  getMentors(): User[] {
    return this.mentors;
  }

  getMentorById(id: number): User | undefined {
    return this.mentors.find(user => user.id === id);
  }
  
  removeMentor(id: number): void {
    this.mentors = this.mentors.filter(user => user.id !== id);
  }
  
  getBiggestId(): number {
    return Math.max(...this.mentors.map(user => user.id));
  }

  newNamebyId(id: number, name: string): void {
    for (let i: number = 0; i < this.mentors.length; i++) {
      if (id === this.mentors[i].id) {
        this.mentors[i].name = name;
      }
    }
  }
}


// find visszaadja az első elemet a tömbből aminek az id-ja az amit paraméterként megadok
// filter: minden olyan tagra legyen true, akinek az ID-ja nem egyenlő ezzel, 
// amit a paraméterbe adok, mertt ezt ki akarjuk venni a tömbből, felülírjuk az eredeti tömböt
// generálunk egy következő ID-t, ehhez kell h melyik a legnagyobb
// math.max megkeresi a legynagyobb számot, 
// de csak akkor ha nem tömbben lévő számokat kap, hanem csak számokat vesszővel elválasztva
// ...[] a 3 ponttal szét tudom bontani a tömb elemeit, h max function működjön rajta
