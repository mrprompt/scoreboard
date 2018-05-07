require('dotenv-safe').config();

module.exports = {
  port: process.env.PORT || 3000,
  url: process.env.URL || '0.0.0.0',
};
