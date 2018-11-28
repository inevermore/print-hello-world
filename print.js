exports.print = function() {
  [].unshift.call(arguments, 'hello world')
  console.log.apply(null, arguments);
}