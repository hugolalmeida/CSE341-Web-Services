const routes = require('express').Router();
const jokes = require('../controllers/');

routes.get('/', jokes.displayJoke);
routes.get('/luffy', jokes.displayLuffy);
routes.get('/data', jokes.displayData);

module.exports = routes;