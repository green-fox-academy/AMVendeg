import { Student } from './student';

export class Teacher {

  public teachStudent(student: Student): string {
    return student.learn();
  }
  
  public giveAnswer(): string {
    return `The teacher is answering the question.`;
  }
}


