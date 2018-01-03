'use strict';

const logger = require('winston');
const Emitter = require('./emitter');
const eventsConfig = require('./config').events;
const emtr = new Emitter();

emtr.on(eventsConfig.GREET, () => {
  logger.info('Somewhere, someone said hello.');
});

emtr.on(eventsConfig.GREET, () => {
  logger.info('A greeting occurred!');
});

emtr.on(eventsConfig.LOAD, () => {
  logger.info('We are now loading!');
});

logger.info('Hello!');
emtr.emit('greet');
emtr.emit('load');
