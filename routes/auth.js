const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', (req,res)=>{
    res.json('logging in');
});

//auth logout
router.get('/logout', (req,res)=>{
    res.json('logging out');
});

//auth with google
router.get('/google', passport.authenticate('google', {
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req,res)=>{
    res.json('redirect page');
});

module.exports = router;