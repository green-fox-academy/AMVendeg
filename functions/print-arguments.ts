// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)


function printParams(name: string = 'Jones ', age: number = 36) {
   return name + age;
}

console.log(printParams());