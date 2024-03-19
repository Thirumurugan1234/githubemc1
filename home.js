//condition statements:
//if else condition

let condition=false;
let condition2=true;
if(condition&&condition2){
    console.log("yes condition is correct");

}

else{
    console.log("No condition is Wrong")
}

let sum=10;
if(sum==10){
    console.log("yes correct");

}

else{
    console.log("no")
}
//if hour is between 12am(0)to 1pm(13)-->Good morning
//else if hour is between 1pm(13) to 5pm(17)->Goodafternoon
//else hour is between 6pm(18) to 12am(0) ->good evening

let hour=15;
if(hour >=0 && hour<=13)
   console.log("Good Morning");
else if(hour>=13 && hour<=17)
  console.log("Good Afternoon");

else{
    console.log("Good Evening");
}

//Switch-case Condition

let grade="A";
switch(grade){
    case "S":
        console.log("Super Grade");
        break
    case "A":
        console .log("Excellent Grade");
        break
    case "E":
        console .log("Just pass");
        break
    case "U":
        console .log("Failed Grade");
        break
    default:
        console.log("Unknown Grade")
    

    
}
let Mark=60;
switch(true){
    case Mark > 50:
        console.log("pass");
        break
    case Mark > 90:
        console .log("Super mark");
        break
    case Mark < 50:
        console .log("Fail");
        break

    default:
       console.log("Unknown Grade")

}

//for loop:
for (let i=0;i<5; i++){
    console.log("Number ",i);
}
//while loop:
let i=10;
while (i>=1){
   if (i %2==0){
    console.log("Even Number",i);
   }
   i--;
}
//do while loop:

do{
   if (i %2!=0){
    console.log("Odd Number Do-While",i);
   }
   i++;

}while (i<=10);

//for in-loop:
const person={
    name:"Anbu",
    age:24,
    gender:"Male"
};
for(let key in person){
    console.log(key + ":",person[key]);
}

//for-of-loop:
let colors=["red","blue","green"];
for (let color of colors){
    console.log("color:" + color);
}


