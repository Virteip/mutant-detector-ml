const DNAAnalyzer = module.exports;
const directions = [[-1, 0], [1, 0], [1, 1], [1, -1], [-1, -1], [-1, 1], [0, 1], [0, -1]];
let rowAmount = 0;
let columnAmount = 0;
let globalCount = 0;

function findPattern(grid, row, column, pattern) {
  for (let index = 0; index < directions.length; index++) {
    const x = directions[index][0];
    const y = directions[index][1];

    let rowMove = row + x;
    let columnMove = column + y;
    let flag = true;

    for (let key = 1; key < pattern.length; key++) {
      if ((rowMove >= 0 && rowMove < rowAmount)
            && (columnMove >= 0 && columnMove < columnAmount)
            && pattern[key] === grid[rowMove][columnMove]) {
        rowMove += x;
        columnMove += y;
      } else {
        flag = false;
        break;
      }
    }

    if (flag) {
      return true;
    }
  }
  return false;
}

DNAAnalyzer.isMutant = (grid, mutantPattern) => {
  rowAmount = grid.length;
  columnAmount = grid[0].length;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === mutantPattern[0]) {
        const result = findPattern(grid, row, column, mutantPattern);
        if (result) {
          globalCount += 1;
        }
      }
    }
  }
  const result = globalCount;
  globalCount = 0;
  return result / 2;
};
