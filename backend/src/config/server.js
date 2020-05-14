const app = require('express')();
const BodyParser = require('body-parser');
const { log, logger } = require('../libs/log');
swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../config/swagger/swagger.json');
const allowCors = require('./cors')
require('dotenv').config();


app.use(logger);
app.use(BodyParser.json());
app.use(allowCors);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, ()=> {
  log.info(`Running in port ${process.env.PORT}`)
});

module.exports = app;