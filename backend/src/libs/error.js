const Boom = require('@hapi/boom');
const { log: Log } = require('../libs/log');

const generalErrorHandler = (err, request, reply) => {
  const { stack } = err;

  const { params, raw } = request;
  const { url, method } = raw;
  Log.error(`Request: ${method} ${url} with params`, params, err, stack);

  const error = err.isBoom ? err : Boom.boomify(err);

  return reply
    .code(error.output.statusCode)
    .type('application/json')
    .headers(error.output.headers)
    .send(error.output.payload);
};

module.exports = generalErrorHandler;