'use strict';

const logger = require('winston');
const Emitter = require('./emitter');
const emtr = new Emitter();

emtr.on('greet', () => {
  logger.info('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
  logger.info('A greeting occurred!');
});

emtr.on('load', () => {
  logger.info('We are now loading!');
});

logger.info('Hello!');
emtr.emit('greet');
emtr.emit('load');
