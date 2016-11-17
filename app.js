var express = require('express');

var app = express();

require('./config/middleware.express')(app, express);

require('./config/router.express')(app);

require('./server')(app);

module.exports = app;