const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://vskyltlcxqwape:2e2aa65e597c85bdfab4e7195f455fc2bf8be6fd9c6a033719a924e4df44da24@ec2-3-95-85-91.compute-1.amazonaws.com:5432/d49g5pav8mimno' || process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
