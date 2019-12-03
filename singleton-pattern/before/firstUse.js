import Logger from './logger.js';

const logger = new Logger();

export default function logFirstInstance() {
  logger.printLogCount();
  logger.log('First file');
  logger.printLogCount();
};