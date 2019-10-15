// Database configuration
require("dotenv").config();

const databaseUrl = process.env.MONGODB_URI || process.env.MONGO_DB;
const collections = ["todos"];
const mongojs = require("mongojs");

// Hook mongojs config to db constiable
const db = mongojs(databaseUrl, collections);

module.exports = db;
