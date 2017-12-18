'use strict';

const MongoClient = require('mongodb').MongoClient;

class CRUD {

    insertDocument (product, db) {
        if(product == null){
            throw new Error('overgiven productparameter is not present!');
        }

        
    }
}

module.exports = CRUD;