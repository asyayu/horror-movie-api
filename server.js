require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const moviesRouter = require('./routes/main');

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to my horror movie API!');
});

app.use('/api/v1/movies', moviesRouter);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`LISTENING ON PORT ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
