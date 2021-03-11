const mutantStats = module.exports;

mutantStats.stats = 'SELECT\n'
+ 'COUNT(contains_gene) FILTER (WHERE contains_gene=true) as count_mutant_dna,\n'
+ 'COUNT(contains_gene) FILTER (WHERE contains_gene=false) as count_human_dna\n'
+ 'FROM test_results\n';
