module.exports = {
  title: 'DNACheckerSchema',
  type: 'object',
  properties: {
    dna: {
      type: ['array'],
      minItems: 4,
      items: {
        type: 'string',
      },
    },
  },
  required: [
    'dna',
  ],
};
