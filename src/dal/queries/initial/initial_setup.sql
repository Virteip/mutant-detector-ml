CREATE TABLE test_results
(
    id SERIAL NOT NULL,
    dna_sequence character varying UNIQUE NOT NULL,
    contains_gene boolean NOT NULL,
    CONSTRAINT test_results_pkey PRIMARY KEY (id)
    );