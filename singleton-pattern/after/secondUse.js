import logger from './logger.js';

export default function logSecondInstance() {
  logger.printLogCount();
  logger.log('Second file');
  logger.printLogCount();
};