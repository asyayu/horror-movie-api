const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    genres: String,
    releaseDte: String,
    releaseCountry: String,
    movieRating: String,
    reviewRating: Number,
    movieRunTime: String,
    plot: String,
    cast: String,
    language: String,
    filmingLocations: String,
    budget: String,
});

module.exports = mongoose.model('Movie', movieSchema);
