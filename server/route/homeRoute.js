var express = require('express');
var router = express.Router();
var tesserect = require('../util/tesserect');
var fs = require('fs');
var path = require('path');
var gm = require('gm');
var tesseract = require('node-tesseract');


// define the home page route
router.get('/', function(req, res) {
    //fileUp.find(function (err, home) {
    //    res.send(home);
    //});
}).get('/:id', function(req, res) {
    //cveUp.find({flFrom: req.params.id}, function(err, p) {
     //   if (!p)
     //       return next(new Error('File unkow pleas try agin.'));
    //    else {
     //       res.send(p);
   //     }
  //  });
}).post('/', function(req,res){
    var options = {
        l: 'eng',
        psm: 6,
        binary: 'tesseract'
    };

    if (req.files != null || req.files != undefined) {
        var targetPath =   __dirname + "\\temp\\"+ req.files.arq.name;
        tesseract.process(targetPath, options, function(err, text) {
        if(err)
             console.error(err);
        fs.writeFile(targetPath ,req.files.arq.data, function(err) {
            if(err)
                return console.log(err);
            console.log("The file was saved!");

        gm(targetPath).monochrome().write(targetPath, function(err){
                if(err)
                    console.log(err);
               console.log(text);
               var file = {
                   item:String
               };
                file.item = text;
               res.send(file);

               })
           })
        });
    }


});
module.exports = router;
