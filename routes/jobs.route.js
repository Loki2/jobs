const express = require('express');
const router = express.Router();



router.get('/', async (req, res, next) =>{
    res.render('jobs/index')
});

router.get('/new', async (req, res, next) =>{
    res.render('jobs/new_job')
});


router.post('/', async (req, res, next) => {
    console.log(req.body.jobtitle);
    console.log(req.body.orgname);
    console.log(req.body.location);
    console.log(req.body.jobdesc);
})
module.exports = router;