 /* 
 promises fetch in js ---->
     promises is an object that is represent a future result of an asynchornuos opreations.
     it means i will give the result 100%
     real life example - zomatoo application
     promises has 3 states - 1 pending 
                             2 resolved 
                             3 regected 
activt                           
*/




let mypromises = new Promise((resolve, reject) => {
  let success = true;

  if (success === true) {   // use comparison, not assignment
    resolve("data fetched successfully");
  } else {
    reject("not found");
  }
});

mypromises.then((result) => {
    console.log(result);
  })
  .catch(() => {            // .catch should be chained to the promise, not console.log
    console.log("error");
  });





const mp1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Asynchronous task completed");
    resolve();
  }, 3000);  
});

mp1.then(() => {
  console.log("completed");
});


/*
const mp3 = new Promise((resolve, reject) => {
  setTimeout(() => {
   
    resolve({
        user :"Atharv",
        ID :123;
    });
  }, 3000);   
});
mp1.then(() => {
  console.log("completed");
});

create 4 promises example 
promises in functions using 
*/
