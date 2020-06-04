const express = require('express');
const router = express.Router();
const projects = require('../data.json');

router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});



module.exports = router;