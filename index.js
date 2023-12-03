// Define "first-class function"
//Functions in JavaScript are first-class objects. Can be treated like any other obect (they can be assigned to a variable, passed as values to other functions, returned as the value from another function, etc)


// Use inline functions
//use one time, define it inline as an anonymous function, passing it as the argument
//exerciseRoutine(() => console.log("Stretch! Work that core!"));


// Use functions as return values
//Functions can also return other functions

// Define "higher-order function"
// A higher-order function is a function that can accept functions as arguments and/or return a function.


//receivesAFunction
function receivesAFunction (myCallback) {
    return myCallback();
}

function myCallback() {
    return ("Good");
}
myCallback(receivesAFunction);


// returnsANamedFunction
function returnsANamedFunction(){
    return function named(){};
}

// returnsAnAnonymousFunction
function returnsAnAnonymousFunction () {
    return function (){};
}