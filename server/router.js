// export a function in nodejs environment
// app.get expect get request
// req = request, res = response, next = error handling
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport'); //dependency for strategies
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
