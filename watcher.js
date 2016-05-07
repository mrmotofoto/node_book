//THE OUTPUT REQUIRE IS A PLAIN OLD JAVASCRIPT OBJECT ==========================
const fs = require('fs');

//WATCH IS A FS MODULE METHOD WHICH POLLS TARGET FILE FOR CHANGES THEN EXEC FUNC  
fs.watch('text.txt', function() {
   console.log(`File target.txt has changed`); 
});


console.log('Now Watching target.txt');