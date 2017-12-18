'use strict';

class Product {
     getDataFromXLSX (xlsxFile = '../excel/preisliste.xlsx') {
        
            if(typeof require !== 'undefined') {
        
                const XLSX = require('xlsx');
        
                const fs = require('fs'),
                    path = require('path');

                var randomPath;
                
                if(xlsxFile === '../excel/preisliste.xlsx'){
                     randomPath = path.join(__dirname, xlsxFile);
                }else{
                    randomPath = xlsxFile;
                }

                console.log(randomPath);
                    
                const workbook = XLSX.readFile(randomPath);
                    
                //console.log(workbook.Sheets.Tabelle1);
                console.log();
                const produktName = workbook.Sheets.Tabelle1.A2.w;
                const produktPreis = workbook.Sheets.Tabelle1.B2.w;
                const produktWaehrung = workbook.Sheets.Tabelle1.C2.w;
                const produktEigenschaften = workbook.Sheets.Tabelle1.D2.w;
                const produktOptionen = workbook.Sheets.Tabelle1.E2.w;
                
                //console.log(produktName, produktPreis, produktWährung, produktEigenschaften, produktOptionen);
        
                return {produktName, produktPreis, produktWaehrung, produktEigenschaften, produktOptionen};        
            }else {
                console.log('require is not present.');
            }
        };
}

module.exports = Product;

