const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('index')
});

router.get('/contact', async (req, res, next) => {
    res.render('contact')
});

router.get('/about', async (req, res, next) => {
    res.render('about')
});

router.get('/service', async (req, res, next) => {
    res.render('service')
});
module.exports = router;