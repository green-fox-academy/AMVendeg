import { Student } from './student';

class Teacher {

  public teachStudent(student: Student): void {
    student.learn();
  }
  
  public giveAnswer() {
    return console.log('The teacher is answering the question.');
  }

}
export { Teacher };

