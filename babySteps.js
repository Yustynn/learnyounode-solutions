var args = process.argv.slice(2);
var argsSum = args.reduce(function(current, element) {
  return current + +element
}, 0);

console.log(argsSum);
