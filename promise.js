//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
    //The function should log the message to the console after the specified delay time.
 function logMessageWithDelay(message, delay) {
// Function body
console.log('Function called with message: ', message); // Log the function call for debugging purposes
setTimeout(function() {
console.log('Logging message: ', message); // Log the message after the delay
}, delay);
}
logMessageWithDelay('I love coding', 1000);
//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
const userIds = [1, 2, 3, 4, 5];
const getUserData = async (id) => {
    return new Promise((resolve, reject) => {
        // Simulating fetching user data asynchronously
        setTimeout(() => {
            resolve({ id: id, name: `User ${id}`, data: `Data for User ${id}` });
        }, Math.random() * 1000); // Random delay to simulate asynchronous behavior
    });
};
const fetchAndLogUserData = async () => {
    for (let id of userIds) {
        try {
            const userData = await getUserData(id);
            console.log(userData);
        } catch (error) {
            console.error(`Error fetching data for user ${id}: ${error.message}`);
        }
    }
};
fetchAndLogUserData();
//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. 
//Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
function handleTask() {
    performTask()
        .then(() => {
            console.log("Custom success message");
        })
        .catch(() => {
            console.log("Custom error message");
        });
}

handleTask();