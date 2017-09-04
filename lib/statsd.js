const config = require('./project.config');
const SDC = require('statsd-client');

const statsd = new SDC(config.statsd);

module.exports = statsd;
