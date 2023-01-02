const router = require('express').Router();
const session = require('express-session');
const passport = require('passport');

router.use(session({ secret: 'keyboard cat' }));
router.use(passport.initialize());
router.use(passport.session());

router.get('/', function(req, res) {
  res.render('home');
});

require('../auth/google');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.redirect('/');
}

router.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
)

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/auth/failure'
  })
)

router.get('/auth/failure', (req, res) => {
  res.send('Something Wrong..');
})

router.get('/profile', isLoggedIn, (req, res) => {
  // console.log(req.user)
  const picture = req.user.picture;
  const nama = req.user.displayName;
  const email = req.user.emails[0].value
  const id = req.user.id;
  res.render('profile', { picture, nama, email, id });
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})

module.exports = router;