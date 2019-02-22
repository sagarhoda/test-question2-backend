const express = require('express');
const router = express.Router();

const showController = require('./controllers/show.controller.js');

module.exports = router;

router.get('/', function(req, res){
	res.send("<h1>Test Application</h1>  <h4>/shows displays in calendar format </h4><h4>/api/shows displays the list of shows in json from 3rd party API </h4>");
});

router.get('/api/shows', showController.getAllShows);