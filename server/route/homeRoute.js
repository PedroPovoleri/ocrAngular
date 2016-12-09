var express = require('express');
var router = express.Router();
var tesserect = require('../util/tesserect');
var fs = require('fs');
var path = require('path');
var gm = require('gm');
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
    var ret = {};
    if (req.files != null || req.files != undefined) {
        var targetPath =   __dirname + "\\temp\\"+ req.files.arq.name;
        fs.writeFile(targetPath ,req.files.arq.data, function(err) {
            if(err)
                return console.log(err);
            console.log("The file was saved!");

        var a = path.basename(targetPath) ;
        console.log(a);
           gm(targetPath).monochrome().write(targetPath, function(err){
                if(err)
                    console.log(err);
                 ret = tesserect(targetPath);
           })
        });
    }
    res.send(ret);


});
module.exports = router;
