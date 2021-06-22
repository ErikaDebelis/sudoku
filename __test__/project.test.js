import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {
  test ("should create an empty 'sudoku' object", () => {
    let sudoku = new Sudoku();
    expect(sudoku);
  });
});

//row, column, (1-9)