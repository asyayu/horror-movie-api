const Movie = require('../models/movie');

const getAllMoviesTesting = async (req, res) => {
    res.status(200).json({ msg: 'This is the testing route' });
};

const getAllMovies = async (req, res) => {
    try {
        const { title, releaseCountry } = req.query;
        const queryObject = {};
        if (title) {
            queryObject.title = { $regex: title, $options: 'i' };
        }
        if (releaseCountry) {
            queryObject.releaseCountry = {
                $regex: releaseCountry,
                $options: 'i',
            };
        }
        console.log(queryObject);
        const movies = await Movie.find(queryObject);
        res.status(200).json({ nbHits: movies.length, movies });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllMovies, getAllMoviesTesting };
