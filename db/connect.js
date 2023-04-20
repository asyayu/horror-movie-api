const mongoose = require('mongoose');

const connectDB = async (URI) => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(URI);
        console.log(`MONGOOSE CONNECTED TO HORRORDB DATABASE`);
    } catch (err) {
        console.log(err);
        console.log('OH NO, MONGO CONNECTION ERROR!');
        process.exit(1);
    }
};

module.exports = connectDB;
