const express = require('express');
const routes = require('./src/routes.js');

const port = process.env.PORT || 4000;

const app = express();

const APP_NAME = 'mutant';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(`/api/${APP_NAME}`, routes);

app.listen(port);

module.exports = app;
