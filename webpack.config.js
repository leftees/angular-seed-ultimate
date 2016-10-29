switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/web/webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/web/webpack.test');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/web/webpack.dev');
}
