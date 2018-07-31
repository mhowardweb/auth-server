// export a function in nodejs environment
// app.get expect get request
// req = request, res = response, next = error handling
module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['hello', 'my', 'dear']);
  });
}
