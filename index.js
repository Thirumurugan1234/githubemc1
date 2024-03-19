//  variables:
let name="raja";
let msg="Hi da"+" "+ name +" "+"how are you";
let arr="123";
console.log(msg,arr);
//  constant it is permenant and it is a immutable:
const nam="raja";
const dob="13/05/2005";
let sms="Hello my is " +nam + " & i born in " + dob;
console.log(sms);
//data types(primitive type):
let firstname="anand";//string
let age=24;//integer
let isyoung=true;//Boolean
let lastname=undefined;//undefined
let trophy=null;//null
console.log(firstname,age,isyoung);

//object:
let person={
    name:"shankar",
    age:23,
    gender:"Male",
    address:"chennai,tamilnadu"
}
//dot notation
console.log(person.gender)
//bracket notation
console.log(person['address'])
 let favcolors=["red","white","blue"]
 //{}-object
 //[]-Array
 favcolors[3]="yellow"
 console.log(favcolors[1])
 console.log(favcolors[3])

 function greetuser(name){
    //set the statment:
    
    let msg="Hello " + name + " i'am learning Javascript!";
    console.log(msg)
 }
 greetuser("senthil")

 function add(num1,num2){
    console.log(num1+num2)
 }
 add(5,6)
 //assignment operators:
let x=9;
x-=2
console.log(x)

//Arithmetic operators:
let num1=5;
let num2=4;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1%num2)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1**num2)

console.log(++num2)
//comparison operator:
let y=2;
console.log(y<3);//lessthan
console.log(y>=5);//greater than equal too
console.log(y==4);
console.log(y!=4);

//equality operator:
let z=5;
console.log(z===5);//strict equality opeartor
console.log(z==3);//lose equality operator

//Ternary opeartors
let ages=23;
let type=age>18?"Adult Ticket":"Child Ticket"
console.log(type)

//logical operators
let highincome=true;
let cibilscore=false;
let eligibleperson=highincome&& cibilscore
let eligible=highincome|| cibilscore
console.log(eligibleperson)
console.log(eligible)

//Bitwise opeartor
//Human code-> machine code(0,1)
//1->00000001->1
//2->00000010->2
//3->00000011->3
console.log(1 & 2);


























