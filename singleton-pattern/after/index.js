import logFirstInstance from './firstUse.js';
import logSecondInstance from './secondUse.js';

logFirstInstance();
logSecondInstance();

/*
FirstUse
logger.js:29 0 Logs
logger.js:25 FANCY: First file
logger.js:29 1 Logs

SecondUse
logger.js:29 1 Logs     -> the previous log persists in the singleton object
logger.js:25 FANCY: Second file
logger.js:29 2 Logs
*/