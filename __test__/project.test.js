import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {
  test ("should create an empty 'sudoku' object", () => {
    let sudoku = new Sudoku();
    expect(sudoku);
  });
  test ("should add 'column' and 'row' as parameters", () => {
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const column = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sudoku = new Sudoku(row, column);
  });
  test ("should create a Sudoku prototype to check rows", () => {
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const column = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sudoku = new Sudoku(row, column);
    sudoku.checkRow();
  });
});



//row, column, (1-9)