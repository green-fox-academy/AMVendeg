import { textFromMatrix } from "./text-from-matrix";

describe('Matrix which retrun a text', () => {
  test('Input matrix should return a text', () => {
    const matrix: string[][] = 
    [
      ["n", "x"],
      ["m", "o"]
    ];

    const result: string = 'no';
   

    expect(textFromMatrix(matrix)).toBe(
      result
    );
  });

  test('Empty matrix should return a console log message', () => {
    const matrix: string[][] = [];
    const error: string = 'The matrix is empty';

    expect(textFromMatrix(matrix)).toBe(
      error
    );
  });
});