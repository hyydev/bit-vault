const mongoose = require('mongoose');
require('dotenv').config();
// ensure crypto global exists for mongodb driver inside container
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = require('crypto');
}
const MONGO_URL = process.env.MONGO_URL || 'mongodb://admin:admin123@mongodb:27017/?authSource=admin';
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
module.exports = { connectDB };

