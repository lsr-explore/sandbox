#!/usr/bin/env node

const logger = require('../../lib/logger');

const http = require('http');

const app = require('../../src/server/main');
const { normalizePort, onError, onListening } = require('../../src/server/utils');
const serverConfig = require('../../src/server/serverConfig');

logger.info('Starting server...');

/**
 * Get port from environment and store in Express.
 */

serverConfig.port = normalizePort(process.env.PORT || '3000');
app.set('port', serverConfig.port);

/**
 * Create HTTP server.
 */

serverConfig.server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

serverConfig.server.listen(serverConfig.port);
serverConfig.server.on('error', onError);
serverConfig.server.on('listening', onListening);
