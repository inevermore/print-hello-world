exports.print = function() {
  console.log('hello wolrd');
  console.log.apply(null, arguments);
}