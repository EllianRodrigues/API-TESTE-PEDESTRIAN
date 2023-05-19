const express = require('express');
const routes = express.Router();
const fs = require('fs');
const csv = require('csv-parser');


const FILE_PATH = 'result_20230517120510.csv';

// Buscar Dados locais
routes.get('/', (req, res) => {
  const results = [];
  fs.createReadStream(FILE_PATH)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      return res.json(results);
    });
});

module.exports = routes;
