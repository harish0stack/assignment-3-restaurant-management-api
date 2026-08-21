

const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/authDB';

    if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
        return mongoose.connection;
    }

    await mongoose.connect(mongoUri);

    const db = mongoose.connection;

    db.on('connected', () => {
        console.log('Database connected successfully');
    });

    db.on('disconnected', () => {
        console.log('Database disconnected');
    });

    db.on('error', (error) => {
        console.log('Database connection error', error);
    });

    return db;
};

module.exports = connectDB;