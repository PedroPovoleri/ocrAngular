var tesseract = require('node-tesseract');

var tessrectReturn = function reader(dirImage) {

    // Recognize German text in a single uniform block of text and set the binary path

    var options = {
        l: 'por',
        psm: 6,
        binary: 'tesseract'
    };

    tesseract.process(dirImage, options, function(err, text) {
        if(err) {
            console.error(err);
        } else {
            console.log(text);
            return text;
        }
    })

};

module.exports = tessrectReturn;