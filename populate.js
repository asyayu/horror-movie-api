const connectDB = require('./db/connect');
const Movie = require('./models/movie');
require('dotenv').config();
const jsonMovies = require('./output.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Movie.deleteMany({});
        await Movie.create(jsonMovies);
        console.log('SUCCESS');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();
