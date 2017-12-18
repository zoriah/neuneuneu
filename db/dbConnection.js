'use strict';

const MongoClient = require('mongodb').MongoClient;

const CRUD = require('../mongo/CRUD');

//const express = require('express')

const defaultPath = 'mongodb://localhost:27017/admin';


const dbConnection = function (connPath = defaultPath){
    MongoClient.connect(connPath, (err, db) => {
        if(err){
            throw new Error(err);
        }
        console.log('Connected without problems to server.');

        // here follows db operations.

        // db should be closed after bd operation.
        db.close();
    });    
};

module.exports = dbConnection;