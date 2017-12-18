'use strict';

const Product = require('./db/Product'),
      dbConnection = require('./db/dbConnection');

const path = require('path');

const a = new Product().getDataFromXLSX();

console.log(a);

dbConnection('mongodb://localhost:27017/test');