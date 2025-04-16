let timeoutCallbackFunctionVariable = null;
let dataReceivedCallback = null;
let stopSignal = false;
let min = 5;
let max = 97;

class CanDataManager {
  constructor() {
    console.log("can");
    this.message = "Hello from CanDataManager!";
  }

  CanDataManagerMessage() {
    return this.message;
  }

  RegisterTimeoutOccuredCallback(callback) {
    console.log("time out");
    timeoutCallbackFunctionVariable = callback;
    setTimeout(timeoutCallbackFunctionVariable, 5000);
  }

  RegisterDataReceivedCallback(callback) {
    console.log("data received");
    dataReceivedCallback = callback;
    setTimeout(() => this.generateRandomNumber(min, max), 250);
  }

  generateRandomNumber(min, max) {
    if (!stopSignal) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      dataReceivedCallback(randomNumber);
      setTimeout(() => this.generateRandomNumber(min, max), 250);
    } else {
      console.log("Stop signal received. Stopping random number generation.");
    }
  }
}
export default CanDataManager;
