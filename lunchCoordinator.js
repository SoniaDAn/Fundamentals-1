/*Scenario: You are preparing lunch for your friend who is coming to your house. You have started making sandwiches and your friend is going to the shop to pick up some crisps.
Start Preparing: Begin making the sandwiches.
Asynchronous Handling: Your friend will text you to let you know the outcome of their shopping:
If the Crisps are Available: Plate up the sandwiches.
If the Crisps are Not Available: Prepare a salad instead.*/

/* Start with a function and if else statement
const makeLunch = crisps => {
 if (crisps === true) {
    console.log('Plate up the sandwiches');
 } else {
    console.log('Make a salad instead');
 }
};
makeLunch(true); */

// Code with async/await

const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve('Plate up the sandwiches!');
    } else {
        reject('Make a salad instead.');
    }
});

async function handlePromise() {
    try {
        const message = await myPromise;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

handlePromise(); //this works, unsure why


function checkCondition(callback) {
    // Simulate a condition check
    let haveCrisps = true; // Change this to false to simulate the condition not being met

    callback(haveCrisps);
}

function handleResult(haveCrisps) {
    if (haveCrisps) {
        console.log("Plate up the sandwiches!");
    } else {
        console.log("Make a salad instead.");
    }
}

// Check the condition and handle the result accordingly
checkCondition(handleResult);