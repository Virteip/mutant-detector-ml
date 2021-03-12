const DNAAnalyzer = module.exports;

const mutantPattern = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];

function vertical(matrix) {
  let counter = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    let sequence = '';

    for (let i = 0; i < matrix.length; i++) {
      sequence += matrix[i][j];
    }

    const result = mutantPattern.map((xgen) => sequence.includes(xgen));

    if (result.includes(true)) {
      counter += 1;
    }
  }
  return counter;
}

function horizontal(matrix) {
  let counter = 0;
  for (let j = 0; j < matrix[0].length; j++) {
    let sequence = '';

    for (let i = 0; i < matrix.length; i++) {
      sequence += matrix[j][i];
    }

    const result = mutantPattern.map((xgen) => sequence.includes(xgen));

    if (result.includes(true)) {
      counter += 1;
    }
  }
  return counter;
}

function rightDiagonal(matrix) {
  let sequence = '';
  let counter = 0;

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (i + j >= matrix.length) break;
      sequence += matrix[i].charAt(i + j);
    }
    const result = mutantPattern.map((xgen) => sequence.includes(xgen));

    if (result.includes(true)) {
      counter += 1;
    }
  }

  for (let j = 1; j < matrix.length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (i + j >= matrix.length) break;
      sequence += matrix[i + j].charAt(i);
    }
    const result = mutantPattern.map((xgen) => sequence.includes(xgen));

    if (result.includes(true)) {
      counter += 1;
    }
  }

  return counter;
}

function leftDiagonal(matrix) {
  let sequence = '';
  let counter = 0;

  for (let j = 0; j < matrix.length; j++) {
    for (let i = j; i >= 0; i--) {
      sequence += matrix[j - i].charAt(i);
    }
    const result = mutantPattern.map((xgen) => sequence.includes(xgen));

    if (result.includes(true)) {
      counter += 1;
    }
  }

  for (let j = 1; j < matrix.length; j++) {
    for (let i = j; i < matrix.length; i++) {
      sequence += matrix[matrix.length - i + j - 1].charAt(i);
    }
    const result = mutantPattern.map((xgen) => sequence.includes(xgen));

    if (result.includes(true)) {
      counter += 1;
    }
  }

  return counter;
}

function diagonal(matrix) {
  return rightDiagonal(matrix) + leftDiagonal(matrix);
}

DNAAnalyzer.isMutant = (sequence) => {
  const result = horizontal(sequence) + vertical(sequence) + diagonal(sequence);

  if (result >= 2) {
    return true;
  }
  return false;
};
