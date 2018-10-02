// DT173G - Moment 4 TypeScript
// Amanda Matti 208

// Kodhjälp av Uppgiftsbeskrivning samt föreläsning TypeScript

//Write out the data from hitch.txt-file
declare function require(name:string);
var fs = require('fs');

class FilePublisher {
    filename: string;

    constructor(name: string) {
        this.filename = name;
    }

    showFile(): void {
        //Read the file content
        fs.readFile(this.filename, 'utf-8', function(err, data) { 
            if(err)throw err;
            
            //Make the text cleaner
            let reg: RegExp = /\n| /; 
            let clean = data.split(reg);

            //Array with all words and how many times they show up
            let count = {};
            for(let i of clean) {
                count[i] = (count[i]||0) +1;
            }
       
            //Sort the words based on how many times they show up
            let sorted = [];
            for (let key in count) sorted.push([key, count[key]]);
            
            sorted.sort(function(a, b) { 
                return a[1] - b[1]; 
            });

            sorted.reverse();

            //Show the 10 most common words and how many times the show up
            console.log(sorted.slice(0,10)); 
            
        });
    }
}

let obj = new FilePublisher("hitch.txt");
obj.showFile(); 







