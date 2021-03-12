const StringValidate = module.exports;

StringValidate.containsValidLetters = (body) => {
  const validLetters = ['A', 'T', 'C', 'G'];
  const dnaSequence = body.dna;

  const validDNA = dnaSequence.map((value) => {
    const dnaString = value.split('').map((letter) => validLetters.includes(letter));

    if (dnaString.includes(false)) {
      return false;
    }

    return true;
  });

  if (validDNA.includes(false)) {
    return [false, 'This DNA sequence contains unreadable characters. Please check.'];
  }

  return [true, null];
};
