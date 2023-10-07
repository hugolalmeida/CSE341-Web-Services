const express = require('express');
const router = express.Router();
// const jokes = require('../controllers/');

// routes.get('/', jokes.displayJoke);
// routes.get('/luffy', jokes.displayLuffy);
// routes.get('/data', jokes.displayData);
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
