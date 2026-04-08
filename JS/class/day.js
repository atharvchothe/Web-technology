console.log("start");
function add (a,b)
{
    return a+b;
}
let result =add(12,34);
console.log(result);
// ayscchornous in js ->>> some task take timelike api call, file read, timer ,database fetching . js does not wait it moves to next line 
    // behaviour is non used in fetching data form server, readting file ,set timeout , api calls
console.log("strat");
setTimeout(() => {
    console.log("Inside timeout")
}, 5000);
console.log("end");
//  settime out it waits 2 sec meanwhile js print end after 2 sec it will print the inside the timeout


// activities -->
/*

 blocking and nonblocking 2 example 
 guess the output game
 real time  exampe
 api fetch  call 

 */ 

// blocking

console.log("Start");

for(let i = 0; i < 3; i++){
    console.log(i);
}

console.log("End");

// non blocking 

function task(){
    console.log("Task running...");
}

console.log("Before");
task();
console.log("After");

// guess the output game
console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);

