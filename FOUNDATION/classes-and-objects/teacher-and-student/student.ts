import { Teacher } from './teacher';

export class Student {

  public learn(): string {
    return `The student is actually learning.`;
  }

  public question(teacher: Teacher): string {
    return teacher.giveAnswer();
  }
}
