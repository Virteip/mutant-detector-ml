const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://docker:docker@localhost:6776/postgres',
  ssl: process.env.DATABASE_URL ? {
    rejectUnauthorized: false,
  } : false,
});

client.connect();

module.exports = client;
