import logger from './logger.js';

export default function logFirstInstance() {
  logger.printLogCount();
  logger.log('First file');
  logger.printLogCount();
};