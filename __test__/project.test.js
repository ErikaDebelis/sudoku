import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {
  test ("should create an empty 'sudoku' object", () => {
    let sudoku = new Sudoku();
    expect(sudoku);
  });
  test ("should add 'column' and 'row' as parameters", () => {
    const row = 9;
    const column = 9;
    let sudoku = new Sudoku(row, column);
  });
});



//row, column, (1-9)