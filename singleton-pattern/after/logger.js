/* 
  no longer export the entire, just a specific instance of that class
  to garantuee there is only one single instance of the constructor add a 
  static variable 'instance' to the Logger.
  
  If that var is null, there is no instance of the Logger created, thus
  iniate the this.logs = []; and set the instance var to this (the instance
  that is being created, no longer null).

  Now, the next time the code runs and an instance of Logger is present, the
  constructor will return that instance.
*/  
class Logger {
    constructor() {
      if(Logger.instance == null){
        this.logs = [];
        Logger.instance = this;
      };
      return Logger.instance;

    };
  
    log(message) {
      this.logs.push(message)
      console.log(`FANCY: ${message}`);
    };
  
    printLogCount() {
      console.log(`${this.logs.length} Logs`);
    };
};

const logger = new Logger();
Object.freeze(logger);
// freeze the Logger instance that has been created so that nowhere else in the
// app variables or methods can be added or removed.
export default logger;