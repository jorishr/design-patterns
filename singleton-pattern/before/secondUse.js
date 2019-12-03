import Logger from './logger.js';

const logger = new Logger();

export default function logSecondInstance() {
  logger.printLogCount();
  logger.log('Second file');
  logger.printLogCount();
};