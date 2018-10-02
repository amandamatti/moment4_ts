// DT173G - Moment 4 TypeScript
// Amanda Matti 208
var fs = require('fs');
var FilePublisher = /** @class */ (function () {
    function FilePublisher(name) {
        this.filename = name;
    }
    FilePublisher.prototype.showFile = function () {
        //Read the file content
        fs.readFile(this.filename, 'utf-8', function (err, data) {
            if (err)
                throw err;
            //Make the text cleaner
            var reg = /\n| /;
            var clean = data.split(reg);
            //Array with all words and how many times they show up
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
            }
            //Sort the words based on how many times they show up
            var sorted = [];
            for (var key in count)
                sorted.push([key, count[key]]);
            sorted.sort(function (a, b) {
                return a[1] - b[1];
            });
            sorted.reverse();
            //Show the 10 most common words and how many times the show up
            console.log(sorted.slice(0, 10));
        });
    };
    return FilePublisher;
}());
var obj = new FilePublisher("hitch.txt");
obj.showFile();
