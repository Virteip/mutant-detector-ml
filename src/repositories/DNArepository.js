const DNARepository = module.exports;
const db = require('../dal/Db');
const queryInsert = require('../dal/queries/insert_new_subject');
const queryStats = require('../dal/queries/get_mutant_stats');

DNARepository.isMutant = async (sequence, result) => {
  const value = [sequence, result];

  await db.query(queryInsert.new, value, (err) => {
    if (err) throw err;
  });

  return result;
};

DNARepository.mutantStats = async () => {
  const result = await db.query(queryStats.stats);

  return result.rows[0];
};
