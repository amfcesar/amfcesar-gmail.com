const app = require('express')();
const BodyParser = require('body-parser');
const { log, logger } = require('../libs/log');
const allowCors = require('./cors')
require('dotenv').config();

app.use(logger);
app.use(BodyParser.json());
app.use(allowCors);

app.listen(process.env.PORT, ()=> {
  log.info(`Running in port ${process.env.PORT}`)
});

module.exports = app;