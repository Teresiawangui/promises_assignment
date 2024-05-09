function logMessageWithDelay(message, delay) {
// Function body
console.log('Function called with message: ', message); // Log the function call for debugging purposes
setTimeout(function() {
console.log('Logging message: ', message); // Log the message after the delay
}, delay);
}
logMessageWithDelay('Hello World!', 1000);