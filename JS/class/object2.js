//singleton object
const user = new Object
console.log(user)
const user1 = {}//non singleton object
user1.id= 123
user1.name = 'abc'
user.email = 'atharvchothe2gmail'
user1.islogin = true
console.log(user1)

//object inside object
const user3 = {
   email:'abc2gmail.com',
   username : {
      name:{
        fullname: 'Atharv',
        lastname:'Chothe'
      }
    }
}
console.log(user3)
console.log(user3.username.name.fullname)

let x =0;
x = x+1;
console.log(x);

let y =0;
++y;
console.log(y);