// Database configuration
const databaseUrl = "todoApp";
const collections = ["todos"];
const mongojs = require("mongojs");

// Hook mongojs config to db constiable
const db = mongojs(databaseUrl, collections);

module.exports = db;
