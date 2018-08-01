// export a function in nodejs environment
// app.get expect get request
// req = request, res = response, next = error handling
const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
}
