
// activity 1 
document.write("<BR> Data Types <br>");
const a = 10; // const values cannot 
let b = 20; // let access the varibles only in block of code.
var c = 30; // older method --global access
/*
console.log(a);
console.log(b);
console.log(c);
*/
document.write(a,"<br>");
document.write(b,"<br>");
document.write(c,"<br>");
// Activity 2
/*
console.log("Activity 2")
{
    let x =20;
    var y =40;
    const z =50;
}

 // console.log(x);// cannot be print the value block scope
console.log(y);
//console.log(z); // cannot access coz scope

*/

 // Activity 3 --  data types 
//undefined 
let x;
document.write(x,"<br>")
document.write("typeof(x) = ",typeof(x),"<br>")
document.write("\n")

/*
console.log(x); //  x = undefined 
console.log("typeof(x) = ",typeof(x))
console.log("\n")
*/ 

//number
let number = null;  //
/*
console.log("typeof(number) = ",typeof(number)) // number = Null
console.log("\n")
*/
document.write("typeof(number) = ",typeof(number),"<br>") // number = Null
document.write("\n")


// BigInt 
let y = BigInt("123");
/* 
console.log(typeof(y));
console.log("typeof(y) = ", y);
console.log("\n")*/
(typeof(y),"<br>");
document.write("typeof(y) = ", y,"<br>");
document.write("\n")


// symbol/*
let z = Symbol("Hello");
/*console.log(z);
console.log("typeof(z) = ",typeof(z))
console.log("\n")
*/
/*
document.write(z);
document.write("typeof(z) = ",typeof(z));
document.write("\n");
*/

// string 
let string = "Atharv";
document.write(string,"<br>");
document.write("typeof(string ) = ",typeof(string),"<br>")
document.write("\n")


document.write(" Collecting Student Information <br>");
let fristname = "Atharv";
let age = 22;
let email = "atharvchothe711@gmail.com";
let  lastname = "Chothe" ;
let collagename ="DKTE";
/*
console.log("Frist name : ",fristname);
console.log("Last name : ",lastname);
console.log("Age =",age);
console.log("Email = ",email);
console.log("Colllage name : ",collagename);
*/
document.write("Frist name : ",fristname,"<br>");
document.write("Last name : ",lastname,"<br>");
document.write("Age =",age,"<br>");
document.write("Email = ",email,"<br>");
document.write("Colllage name : ",collagename,"<br>");


// activity 7 --print 1 t0 20
document.write("<br>IF-ELSE Program <BR> ");
for(let p = 1; p <= 10; p++){
    document.write(p);
    document.write("<br>");
}

// activity 5 ---even or odd

let num=10;
if(num % 2 == 0)
{
    document.write(num, " is even<br>");
}
else{
    document.write(num, " is odd<br>");
}


// activity 6 ---pass or fail
let result = 80;

if(result >= 70){
    document.write("Student is pass<br>");
}
else{
    document.write("Student is fail<br>");
}





