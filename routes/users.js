const express = require('express');
const router = express.Router();



router.get('/register', (req, res, next) =>{
    res.render('users/register')
})


router.get('/login', (req, res, next) =>{
    res.render('users/login')
})



module.exports = router;