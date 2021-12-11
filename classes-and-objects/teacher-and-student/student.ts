import { Teacher } from './teacher';

class Student {

  public learn(): void {
    return console.log('The student is actually learning.');
  }

  public question(teacher: Teacher) :void {
    teacher.giveAnswer();
  }

}

export { Student };