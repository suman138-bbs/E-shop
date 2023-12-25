const dotenv = require("dotenv");
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
};

module.exports = config;
