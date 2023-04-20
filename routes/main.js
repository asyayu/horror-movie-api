const express = require('express');
const router = express.Router();
const { getAllMovies, getAllMoviesTesting } = require('../controllers/main');

router.route('/').get(getAllMovies);
router.route('/testing').get(getAllMoviesTesting);

module.exports = router;
