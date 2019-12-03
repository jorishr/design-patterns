export default class Logger {
    constructor() {
      this.logs = [];
    };
  
    log(message) {
      this.logs.push(message)
      console.log(`FANCY: ${message}`);
    };
  
    printLogCount() {
      console.log(`${this.logs.length} Logs`);
    };
};