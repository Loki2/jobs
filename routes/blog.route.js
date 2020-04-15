const express = require('express');
const router = express.Router();



router.get('/', async (req, res, next) =>{
    res.render('blogs/index')
})

router.get('/:blog_id', async (req, res, next) =>{
    res.render('blogs/blog_single')
})
//New blog Router
router.get('/new', async (req, res, next) => {
    res.render('blogs/new_blog');
})

//Create blog post route
router.post('/', async (req, res, next) => {
    res.send('create');
})
module.exports = router;