//object
let person={
    name:"ganesh",
    age:24,
    interest:['creating, reading newspaper'],
    isAlive:true,
    address:{
        city:"madurai",
        state:"tamilnadu",
    },
    greeting:function(){
        let msg="My name is"+ this. name + "& i love" + this. interest;
        console.log(msg);
        
    }
};
person.greeting();
console.log(person.address.city);
console.log(person.name);

//factory function

function createperson(name){
    return{
        name:name,
        greeting:function(){
            
                let msg="My name is "+ this. name ;
                console.log(msg);
                
            }
        }
    }
    let anbu=createperson("anbu");
    let trisha=createperson("Trisha")
    anbu.greeting();
    trisha.greeting();
    //constructor functions:

    function person2(name){
        this.name=name;
        this.greeting=function(){
            console.log("my name is "+this.name);
        }
    }
    let person1 = new person2("aravind");
    person1.greeting();


//dynamic objects
 const person3={
    name:"siva"
 }
 person3.age=23;
 delete person3.name;//delete the name and only print in age
 console.log(person3);

 //constructor property:

 let age=new Number(4);
 let isAlive=new Boolean(true);
 console.log(name,age,isAlive);

 //function are objects:

 function person2(name){
    this.name=name;
    this.greeting=function(){
        console.log("my name is "+this.name);
    }
}
let per = new person2("aravind");
per.greeting();

//primitive types:
let x=10;
let y=x;
x=20;
//reference types:
let a={
    value:10
};
let b=a;
a.value=20;

//enumerating properties of an objects:
 const user={
    name:"ragu",
    getfullname(){
      console.log("my name is " + this.name );

    }
}
for (let key in user)
console.log(user[key]);

//colning an js object:
const users={
    name:"ragu",
    getfullname(){
      console.log("my name is " + this.name );

    }
}
let another={user
}
console.log(another)
// javascript math object:

console.log(Math.E)        // returns Euler's number
console.log(Math.PI)       // returns PI
console.log(Math.SQRT2)    // returns the square root of 2
console.log(Math.SQRT1_2 ) // returns the square root of 1/2
console.log(Math.LN2  )// returns the natural logarithm of 2
console.log(Math.LN10 )    // returns the natural logarithm of 10
console.log(Math.LOG2E  )  // returns base 2 logarithm of E
console.log(Math.LOG10E )  // returns base 10 logarithm of E
console.log(Math.ceil(4.9));
console.log(Math.sqrt(64));
console.log(Math.pow(8, 2));

//js string object:

let firstname="sibath";
let secondname="vishnu";
console.log(firstname);

//js templete literals:
const message='Thankyou for your watching \n "cyberDude" channel';
console.log(message);

//js DATE:
const d = new Date(99, 11, 24);
console.log(d)

//js Arrays:
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[1];
console.log(car)


//array methods:
// length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

//join
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let sizes= fruit.join("*");
console.log(sizes)

//push:
const things = ["Banana", "Orange", "Apple", "Mango"];
let length = things.push("Kiwi");
console.log(length)

