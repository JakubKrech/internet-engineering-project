// Konfiguracja aplikacji

const path = require('path')
const merge = require('lodash/merge')  // biblioteka Lodash: https://lodash.com/

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: 9000,
    ip: '127.0.0.1',
    apiRoot: '/api',
    mongo: {
      options : {
          useCreateIndex: true,        // DeprecationWarning: collection.ensureIndex is deprecated.
          useNewUrlParser: true           // DeprecationWarning: current URL string parser is deprecated
        }
    }
  },
  test: { },
  development: {
    mongo: {
      uri: 'mongodb://localhost/recipe_app',
      options: {
          debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
  }
}

module.exports = merge(config.all, config[config.all.env])
