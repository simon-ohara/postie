var path = require('path');

module.exports = {
  entry: './lib/client/index.js',
  output: {
    filename: 'postie-client.js',
    path: path.resolve(__dirname, 'assets/scripts')
  }
};
