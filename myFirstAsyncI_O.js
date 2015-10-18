var fs = require('fs');

var path = process.argv[2]

fs.readFile(path, 'utf8', function(err, data) {
  // handle errors
  if (err)
    throw err;

  var numLines = data.split('\n').length - 1
  console.log(numLines);
})
