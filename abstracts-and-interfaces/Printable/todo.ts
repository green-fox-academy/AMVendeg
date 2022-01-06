// Create a new class called Todo that has three fields representing the task as a string, the priority as string and whether it is done or not as a boolean
// Implement this interface on the Domino and Todo classes
// The todo should have the following string representation: Task: Buy milk | Priority: high | Done: true

import { PrintableInterface } from "./printable";

class Todo implements PrintableInterface {
  task: string;
  priority: string;
  isDone: boolean;

  constructor(task: string, priority: string, isDone: boolean) {
    this.task = task;
    this.priority = priority;
    this.isDone = isDone;
  }

  printAllFields(): void {
      console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.isDone}`);
  }
}
export { Todo };
 
let myTodo = new Todo('Buy milk','high',true);
myTodo.printAllFields();
