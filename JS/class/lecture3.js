// while loop
let i =1;
while(i<10){ // conditonal 
    console.log(i);
    i++;
}

// do-while --->atleast once 
do{
    console.log("i = ",i);
    i++;
}while(i<=15);


// for -of  ---->used only for the array and string .
/*
let size =0;
let str ="hello";
for(let k of str){
    console.log(k)
    size++;
}
console.log("string size = ",size);

*/

// for in loop ---> used for the objects

let student ={
    name :"Atharv ",
    age :20,
    cgpa :8.2,
    ispass : true,
};

for(let k in student){
   // console.log(k);  --> returns only key not value 
   console.log("key = ",K ,"value ",student[key]);
} 