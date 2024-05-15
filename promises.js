//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
    //The function should log the message to the console after the specified delay time.
    function logMessageWithDelay(message, delay) {
        setTimeout(function() {
        console.log('message after delay time: ', message); // Log the message after the delay
        }, delay);
        }
        logMessageWithDelay('I love coding', 1000);
        //You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
        //Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
        
        const getUserData = async (id) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ id: id, name: `User ${id}`, data: `Data for User ${id}` });
                }, Math.random() * 2000); // Random delay to simulate asynchronous behavior
            });
        };
        const fetchAndLogUserData = async () => {
            for (let id of userIds) {
                try {
                    const userData = await getUserData(id);
                    console.log(userData);
                } catch (error) {
                    console.error(`Error fetching data for user ${id}: ${error.messaging}`);
                }
            }
        };
        const userIds = [1, 2, 3, 4, 5];
        fetchAndLogUserData();
        //You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. 
        //Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

           const successfulTask = true;
           function performTask() {
    return new Promise((resolve, reject) => {
            if (successfulTask) {
                resolve("Task has being completed successfully!");
            } else {
                reject("Task failed due to an error.");
            }
        }
    )
};
async function handleTask() {
    try {
        const result = await performTask();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}
handleTask();
 /*Retry Logic:
        Scenario:
        Write a function unstableTask that:
        
        1.Accepts a taskName and failureProbability (a number between 0 and 1).
        2. Returns a Promise that:
        Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
        Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
        Write another function executeWithRetry that:
        
        Accepts a taskName, retries, and failureProbability.
        Uses a retry mechanism to attempt the unstableTask up to retries times.
        Logs whether the task succeeded or failed after all attempts.*/
        const randomGeneratedNumber = Math.random();
        function unstableTask(taskName, failureProbability) {
            return new Promise((resolve, reject) => {
                if (randomGeneratedNumber > failureProbability) {
                    resolve(`${taskName} succeeded`);
                } else {
            reject(`${taskName} failed`);
        }
    });}
    async function executeWithRetry(taskName, retries, failureProbability) {
    let attempt = 0;
    while (attempt < retries) {
        attempt++;
        try {
            const result = await unstableTask(taskName, failureProbability);
            console.log(`Success: ${result}`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: ${error}`);
            if (attempt >= retries) {
                console.log(`Task "${taskName}" failed after ${retries} attempts.`);
            }
        }const ourPromise = new Promise((resolve,reject)=>{
            if(internship){
                resolve('I made it');
            }
            else{
                reject('I will try harder')
            }
        })
        ourPromise.then((response)=>{
            console.log({response});
            console.log('I will continue working hard')
        })
    }
}
executeWithRetry("Pass Assessment", 5, 0.5);
        
showMessageAfterDelay("Hello, receive your money after the beep!", 5000)
