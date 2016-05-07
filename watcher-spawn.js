"use strict";
const fs = require('fs'),
      spawn = require('child_process').spawn,
      //using spawn method of 'child-process' object...ignoring rest of module
      filename = process.argv[2];
      //argv is an array containing-- node[0], runningFile[1], targetfile[2]
      //used for spawning child process
if(!filename) {
    throw Error("A file to watch must be specified");
}

fs.watch(filename, function() {
   let ls = spawn('ls', ['-lh', filename]);
  //The object returned by spawn() is a Child Process
  //Its stdin, stout, stderr properties are Streams that can be used to Read or Write Data
   ls.stdout.pipe(process.stdout);
  //PIPE sends the stdout from the child process to our own output stream 
});


console.log("Now Watching " + filename + " for changes....");