const serve = require('serve');

const server = serve(__dirname, {
  port: 80,
  ignore: ['node_modules']
});
