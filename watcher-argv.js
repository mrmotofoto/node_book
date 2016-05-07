const fs = require('fs'),
      filename = process.argv[2];
//argv is an array containing node[0], runningFile[1], targetfile[3]
//used for spawning child process
      
if(!filename) {
    throw Error("A file to watch must be specified");
}

fs.watch(filename, function() {
   console.log('File ' + filename + " just changed!!!"); 
});

console.log('Now Watching '+ filename + ' for changes');