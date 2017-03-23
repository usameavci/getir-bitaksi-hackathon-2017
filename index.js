const serve = require('serve');

const server = serve(__dirname + '/public', {
  port: 80,
  ignore: ['node_modules']
});
