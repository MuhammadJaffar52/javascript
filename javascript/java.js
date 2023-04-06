//variable

var firstname = "well come ";
document.write(firstname);
var myName = "jaffar khan";
document.write(myName );

//let variable
let well = "jaffar khan  ";
well = "Good   ";
document.write(well );

//constant
const hi = "hello";
document.write(hi); 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

// Data type
var x = "y"; // string
x = 34;      // Number
x = true;    //boolean
x = "true";   //string because true is in double quotes
x = ["h","j","x"];   //object OR  Array
x = {
    name : "jaffar",
    country : "pakistan" // Object
}
x = "2222"; // String bcz it is in double quotes
document.write(x);
document.write("<br>");
document.write(typeof x);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// TYPEOF OPERATOR
let x = typeof 12;
let y = typeof  "Abc";
let z =  4>5;
console.log(typeof z);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Arithmetic operator

a = 66;
b = 5;
c = a + b; //addition
c = a - b; //sub
c = a / b; //div
c = a * b; //mul
c = a % b; //modulus
document.write(c);



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Assignment operator
 var a = 6;
 var b = 8;
a -= b;
a += b;
a *= b;
a /= b;
a **= b;
document.write(a);



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// COMPARISON OPERATOR
var x = 50;
    if(x > 10){
        document.write("jaffar ");
    }

// === equal to will compare data type first



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44
    // Logical operator

    // if statement 
      let age = 22;

    if (age>=21){
        document.write("good");
    }

/

    var age = 22;

    if ( age >= 18 || age <= 21){
        console.log("you are well come");
    }


   //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
//&&  AND operator       ||  OR operator    !  NOT operator




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// If else statement
var x = 20;

if( x < 30){
    document.write(" x is greater")
}
else{
document.write("x  is smaller")
}



// Data Type if x is in quotes
var x = '100';

if( x === 10){
    document.write(" x is same")
}
else{
document.write("x is not same")
}




// if else condition
var Name = "jaffar";
var gender = "Male";

if(gender == "Female"){
    document.write("Hello Mr." + Name)
}else{
    document.write("Hello " + gender)
}



// If else  : if condition with AND Operator
let age = 16;
let voteId = "yes";

if(age>=14 && voteId == "no"){
    alert("you can ")
}else{
    alert("you can't")
}






var per = 99;

if(per >= 80 && per < 100){
    document.write("You are in merit");
} else if(per >= 60 && per < 80){
    document.write("You are in 1st division");
} else if(per >= 50 && per < 60){
    document.write("You are in 2nd division");
} else if(per >= 40 && per < 50){
    document.write("You are in 3rd division");
} else if(per < 33){
    document.write("You are fail")};



   //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ 
// Ternary operator  just used for assignment operator

let islogin = 0;

let option = islogin == 0 ? "Logout" : "Login";
document.write (option);

//  Example 2
var a = 100;
var b;
(a == 200)? b = "True" : b = " False";

document.write("true");


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Switch statement
var day = 6;

switch( day) {
    case 0:
document.write("Monday");
    break;
    case 1:
    document.write("Tuesday");
    break;
    case 2:
        document.write("Wednesday");
    break;
    case 3:
        document.write("Thursday");
    break;
    case 4:
        document.write("Friday");
    break;
    case 5:
        document.write("Saturday");
    break;
    case 6:
        document.write("Sunday");
  break;

  default:
    document.write("Enter the valid value")
}






//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Alert Box
var a = 20;
var b = 30;

if(a < b){
alert("Value of A : "+ a);

}else{
    alert("Value of B : "+ b);
} 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Confirm Box
var a = confirm(" Do you like our website?");

if(a){
    alert("Thanks");
}else{
    alert("Sorry");
}



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Prompt Box
//var a = prompt("I Love You")

//alert(a)
//document.write(a)

var per = prompt("Enter your percentage");

if(per >= 80 && per < 100){
    document.write("You are in merit");
} else if(per >= 60 && per < 80){
    document.write("You are in 1st division");
} else if(per >= 50 && per < 60){
    document.write("You are in 2nd division");
} else if(per >= 40 && per < 50){
    document.write("You are in 3rd division");
} else if(per < 33){
    document.write("You are fail");
}




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Functions : used for repeated tasks
function hi(){
    document.write(" Hi jaffar");
    document.write(" You are great");
    document.write("<br>");
    
    
}
hi();

hi();

//hi(); 


// Examples Table of 2 


for(i = 1; i <= 10; i++){
    document.write(`2 x ${i} = ${2*i}`);
    document.write("<br>");
    }
   
for(i = 1; i <= 10; i++){
document.write(`2 x ${i} = ${2*i}`);
document.write("<br>");
}

//function Table 2
function MulTable(){
    for(i=1; i<=10; i++){
        document.write(`2 x ${i} = ${2*i}`);
        document.write("<br>");
       // document.write("hello world");
      
        }
        
        document.write("<br>");
}
MulTable();
MulTable();



// Parameter function
  
function add(num1 , num2){
    document.write(num1 * num2);
}

add(90,80);



// ARGUMENT FUNCTION : This is an array in this method you can print  multiple function withiout declaring function name
function add(){

if(arguments.length == 0){
    console.log("no arguments passed");

}else{
let sum = 0; 
for(let i = 0; i < arguments.length; i++){
    sum = sum + arguments[i];
      }
console.log(sum);

   }

}
add();
add(90,80,9,6);
add(2*6);
add(90/10);
add(20%5);





// MATH FUNCTION
//console.log(Math.PI);    min : show smallest number    max : show maximum numbers


var x = Math.round(4.6) ;   // ceil: upper        floor: down number should be shown 
console.log(x);              // trunc : remove point          pow:show power         sqrt: sqayare root




// Anonymous function : functin which has no name
setTimeout(function(){
    console.log("Hello jaffar");
})();





// Immediately invoked function  FOR EARLY WORK  this function start and close with parentheses
(function(){
    console.log("Hello jaffar");
    alert("Hi  jaffar");
})();




function MulTable(num){
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i} = ${num*i}`);
        document.write("<br>");
       // document.write("hello world");
      
        }
        
        document.write("<br>");
}
MulTable(12);  // table of 12
MulTable(8);   //table of 8
MulTable(20);     //table of 20


function mul(a,b){
    document.write(a * b );
    document.write("<br>");
}
// sum   sub    div  

mul(30,40);
mul(20,1);



//function with Return value
/
function add(a,b){
    let d = a+b;
    return d;
}
 let c = add(90,70);

 document.write(c);




//eXAMPLES   RETURN ARRRAY
 function add(a,b){
    let d = [1,3,8,9,0];
    return d;
}
 let c = add(90,70);

 document.write(c);

 function compare(a,b){
    if(a > b){
        return 1;

    }else if(b > a){
        return -1;

    }else{
        return 0;
    }
 }

 let c = compare(7,6);
document.write(c);

function fullname(fname = "jaffar", lname = "khan"){
    var a = fname +"-" +lname;
    return a;
}
var fn = fullname("jaffar", "khan");
document.write(fn);

// Global and Local variables    global variables can work within and outside of the function but local variable just work within the function.

var a = "jaffar";

function hello(){
    document.write(a);
}

hello(); 







//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//RANDOM NUMBERS  NUMBER WILL COME AUTOMATICALLY
//let x = Math.random();   // it show 0 to 1
let x = Math.floor(Math.random() *9);   // it show 0 to 10
console.log(x);







//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// GLOBAL VS LOCAL VARIABLES


// LOCAL VARIABLES : this variable just work within the function   we can use another same name variable with another function

function add(){

    let result = 23;

    document.write(result);
}

add();

// GLOBAL VARIABLES : this variable work both in and out of the function   but same name variable cannot be used 

 let car = "Audi";

 //let car = "tudi";    we cannot use this just  one used  

function add(){

    let result = 23;

  
}

add();
document.write(car);





//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

 // To save from the conflict of the thirdparty data that we take from programmer community
let msg = "Hello jaffar.";

function greet(){
    console.log(msg);
}
   greet();

   
   
   

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

// Click Event
function hello(){
prompt("jaffar");
    }


//double click event
function hello(){
    alert("jaffar");
        }
        





        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
     // While loop  increment   +++++
    let loop = 1;   // initialize from 1
    
    while(loop <= 10){
        document.write("jaffar bhai   ");
        document.write("<br>");
        loop++;
    }

  
    let loop = 10;    //initialize from 10 and decrement 1  1   1
    
    while(loop >= 1){
        document.write("jaffar khan  ");
        document.write("<br>");
        loop--;
    }


// examples  if we want to print the values that should be Even less tahn 10 thousands time
let count = 1;  // start from 1
let sum = 0;

while( count <= 10000){
if( count % 2 ==0){
   sum = sum + count;
}
count++;
}
 document.write(sum);



    // Examples of loop

     var a = 1;
     while(a <= 20){
        document.write(a+" ) hello world <br>");
        a = a + 3;
     }  
     


     // decrement    -----
     var a = 10;
     while(a >= 1){
        document.write(a+" ) hello world <br>");
        a = a - 2;
     } 



     // Do while loop
     var a = 1;
     do{
        document.write("Hello Jaffar <br>");
        a++;
     } while(a <= 10) 




     // For loop  and break   All these var or any other will be written in 1 condition()
 
     for(var a = 1; a <= 10; a++){

        if(a == 5){
         break;
        }
        document.write("Hi jaffar <br>" );
     } 




     // Statements check even and odd   ! is for odd
     for(var a = 1; a <= 50; a++){
        if(a % 2 != 0){
            document.write( a + "<br>");
        }
     }



     // Nested loop
     for( var a = 1; a <= 100; a = a + 10){
        for(var b = a; b < a + 10; b++){
            document.write( b + " ");
        }
        document.write("<br>");
     }

     // Examples of Nested loops
     for(var a =1; a<=5; a++){
        for(var b = 1; b <= a; b++){
            document.write(b + " " );
        }
        document.write("<br>");
     }



 // Examples of Nested loops
 for(var a =1; a<=5; a++){
    for(var b = 1; b <= a; b++){
        document.write(a + " " );
    }
    document.write("<br>");
 }

 
 // Examples of Nested loops
 for(var a =5; a>=1; a--){
    for(var b = 1; b <= a; b++){
        document.write(a + " " );
    }
    document.write("<br>");
 }

 // Examples of Nested loops
 for(var a =5; a>=1; a--){
    for(var b = a; b >= 1; b--){
        document.write(b + " " );
    }
    document.write("<br>");
 }




// ForEach loop


var a = ["Asif","jaffar","Basit","Saqib"];

a.forEach (loop);

function loop( value, index){
document.write(index + " :" + value + "<br>")
};


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

 // Arrays
 var ary = [20,30,40,50,60,70];

document.write(ary[0]);

//ARRAYS
var ary = new Array();
ary[0] = 10;
ary[1] =20;
ary[2] =30;

for(var a = 0; a< 5; a++){
    document.write(ary);
    document.write("<br>");
}



// Change and delete the value of Array
var a = ["12","13","14","abc"];

document.write(a + "<br>");

a[0] = "hi";
document.write(a + "<br>");
a[2] = "jaffar";
document.write(a + "<br>");

// Delete an Arrays
var a = ["jaffar","Ghani","Affan"];
document.write(a +"<br>");
delete a[1];
document.write(a);


// Sort and reverse Arrays
var a = [ "jaffar","imran","sajjad","Usman"];
document.write(a +"<br>");
a.sort();
document.write(a +"<br>");
a.reverse();
document.write(a +"<br>");


// pop and push arrays pop method used to delete the last value   and push method used to enter an value into end

var a = [ "jaffar","imran","sajjad","Usman"];
document.write(a +"<br><br>");
a.pop();
document.write(a +"<br><br>");

a.push("Rashid AD");
document.write(a +"<br><br>");


//shift and unshift arrays    shift del the first value of array    unshift is used to enter the value in the first place 

var a = [ "jaffar","imran","sajjad","Usman"];
document.write(a +"<br><br>");
a.unshift("Rashid AD , Asif ,Nadeem");
document.write(a +"<br><br>");



var a = [ "jaffar","imran","sajjad","Usman"];
document.write(a +"<br><br>");
a.shift();
document.write(a +"<br><br>"); 



// Concatination Array  that can be used to merge different var arrays data

var a = ["Jaffar","Murshid", "Abbas"];
var b = [ "Nadeeeem", "Imran","Farooq"];
var d= ["Jaffar","Murshid", "Abbas"];
var c = a.concat(b,d);
document.write(c); 

// join() function arrays
var a = ["Jaffar","Murshid", "Abbas"];
var b = [ "Nadeeeem", "Imran","Farooq"];
var c = a.concat(b);
var d = c.join("  ")
document.write(d);



// slice() Array

var a = ["Asif","jaffar","Basit","Saqib"];
document.write(a  +"<br><br>");

var b = a.slice(1,3)
document.write(b +"<br><br>");


//splice array : to remove the element from the middle of the array giving just index numbers    

var a = ["Asif","jaffar","Basit","Saqib"];
document.write(a  +"<br><br>");
a.splice(2,0,"Imran","Raham ");
document.write(a  +"<br><br>");

// split  Array : separating the words with each others

let text = "Allah is the most Greatest";
let wordarray = text.split(' ');

console.log(wordarray);




// indexOf   ARRAY  for searching special name or value

var a = ["Asif","jaffar","Basit","Saqib"];
document.write(a  + "<br><br>");
var b = a.indexOf("Saqib");
document.write(b  + "<br><br>");



// isArray     to check this element is   array or not
var a = ["Asif","jaffar","Basit","Saqib"];
document.write(a  + "<br><br>");
var b = Array.isArray(a);
document.write(b  + "<br><br>");



// includes()  for searching values in an array

var a = ["Asif","jaffar","Basit","Saqib"];
document.write(a  + "<br><br>");
var b = a.includes("Basit");
document.write(b  + "<br><br>");



//some() checking for adult values or ages  and every function in this all values should be adult

var ages = [10,20,30,14];
document.write(ages  + "<br><br>");
var b = ages.some(checkAdult);
document.write(b  + "<br><br>");

function checkAdult(age){
    return age >=18;
} 


// find method return the value of the first element in an array that passes the test      Findindex function find method return the value of the first element index in an array that passes the test



// Filter function  that can be used to print all the values that will be greater than specific values


var ages = [10,20,30,14];
document.write(ages  + "<br><br>");

var b = ages.filter(checkAdult);
document.write(b  + "<br><br>");

function checkAdult(age){
    return age >= 18;
}


// tostring function    valueOf function     fill() 


var a = ["Asif","jaffar","Basit","Saqib"];
a.toString();

document.write(a  +"<br><br>"); 





//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Objects   : The difference b/w object and Array is in Array we use square bracket and in object we use curly brackets

let car = {
car1 :'crolla', 
  car2:'mehran',   
};

console.log(car);




var person = new Object();

person.firstName = 'jaffar';
person.lastName ='khan';
person.age = 23;

console.log(person);
document.write(person.firstName);



// ARRAYS OF OBJECTS

var student = [
     {name : 'jaffar', age : 15},
     {name : 'Imaran', age : 23},

     {name : 'Farooq', age : 37},

];
console.log(student); 


//Change constant values
const a = [10,20,30];
a[1] = 24;
a[2] = 98;
    
console.log(a);  


// For in loop just used for objects it print all the values at once


var std = {
    fname : 'jaffar',
    lname : 'khan',
    age : 23,
    email :" hello@gmail.com"

};

for(var hi in std){
    document.write( hi + " : "+std[hi] +"<br>"  );
}  



// Map function  used for calculation to multipllying


var a = [ 2,3,4,6];

var b = a.map(y);

document.write(b);

function y(x){
    return x * 10;
}  

// another example of map function
var a = [
    { fname : "jaffar", lname : "khan"},
    { fname : "Arslan ", lname :" mota"},
    { fname : "Ameer", lname : "khan"},
];

var b = a.map(test);
document.write(b);

function test(x){
    return x.fname + "  " + x.lname;
}


// object with  new keywords in javascript

var person = new Object();

person.name = "jaffar khan";

console.log(person.name);




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// OBJECT CONSTRUCTOR FUNCTION  : same properties ka multiple function k lye use hota hai we just changed the values

function Student(first, last, age, cls) {
    this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.class = cls;
}



var student1 = new Student("jaffar", "khan", "25", 2);
var student2 = new Student("kashif", "jani", "23", 8);
var student3 = new Student("Usman", "bhai", "21", 9);


student1.nationality = "Pakistani"; // add something after



console.log(student2);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//NESTED OBJECT   object within another object is 

var user = {
    id: 109,
    email: "@gmail.com",
    
personalInfo: {

    name: "abd",
  
        address: {
        
        city: "delhi",
            street: "jagfsg",
        countary:"pakistan",
        }


            
    }
};

console.log(user.personalInfo.address);






//%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// STRING PROPERTIES OR METHODS         // GETTER AND SETTER FUNCTION IN OBJECT

var a = "javascript is a largest language in the world";
var b = a.length;

document.write(b);    

// tolowercase
  
var a = "javascript is a largest language in the world";
var b = a.toLowerCase();

document.write(b); 



// touppercase
  
var a = "javascript is a largest language in the world";
var b = a.toUpperCase();

document.write(b); 


// includes    for searching any special word
  
var a = "javascript is a largest language in the world";
var b = a.includes("language");

document.write(b);


//starts with
var a = "javascript is a largest language in the world";
var b = a.startsWith("javascript");

document.write(b);

//search 
var a = "javascript is a largest language in the world";
var b = a.search("world");

document.write(b);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$444444
//match function   it can make an array of your searched value
var a = "javascript is a largest is  language  is in the world";
var b = a.match(/is/g);

document.write(b);


//replace USED FOR REPLACING
var a = "javascript is a largest is  language  is in the world";
var b = a.replace("javascript", "PHP");

document.write(b);



//TRIM IS USED TO removing SPACE
var a = "javascript is a largest is  language  is in the world";
var b = a.trim();

document.write(b);



// charAt it give character number
var a = "javascript is a largest is  language  is in the world";
var b = a.charAt(8);

document.write(b);



// charCodeAt it returns the uni code number
var a = "javascript is a largest is  language  is in the world";
var b = a.charCodeAt(8);

document.write(b);


// fromcharcode it returns any value or signs of unicode
var b = String.fromCharCode(97);

document.write(b);


// split
var a = "javascript is a largest language  is in the world";
var b = a.split(" ");

document.write(b);



// repeat  it repeat the whole statement any time as you wish
var a = "javascript is a largest language  is in the world";
var b = a.repeat(2);

document.write(b);


//slice piece of any character part
var a = "javascript is a largest language  is in the world";
var b = a.slice(0,8);

document.write(b);




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//NUMBER METHODS

var a = false;
var num = Number(a);

document.write(num );


//parsInt   Return without decimal numbers
var a = 20.23;
var num = parseInt(a);

document.write(num);




//parsefloat  Return with decimal numbers
var a = 20.23;
var num = parseFloat(a);

document.write(num);



//isFinite()

var a = 20.-23;
var num = isFinite(a);

document.write(num);



//isInteger()

var a =  -20;
var num = Number.isInteger(a);

document.write(num);




//tofixed
var a =  -20.3546464784836;
var num = a.toFixed(1);

document.write(num);



//toprecision
var a =  20.3546464784836;
var num = a.toPrecision(2);

document.write(num);







//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// DATE METHODS

var x = new Date();

document.write(x);


// toDateString     print just todys date and year

var x = new Date();

document.write(x.toDateString());



//getDate()  print just todays date

var x = new Date();

document.write(x.getDate());



//getFullYear    RETURN YEAR
var x = new Date();

document.write(x.getFullYear());



//GETMONTH
var x = new Date();

document.write(x.getMonth());


//GETMONTH
var x = new Date();

document.write(x.getDay());



//GETMONTH
var x = new Date();

document.write(x.getDay());

// getHour     getMinutes    getseconds    



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$







//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 //DOM 
  How to select the id    
let elm = document.getElementById("first");
  console.log(elm);
 
  

  // how to select the class
  
  let elm = document.getElementsByClassName("cls");

 for(let i = 0; i < elm.length; i++ ){
  elm[i].innerHTML = "<p> hello jaffar</p>"; // to change html value in javascript
 } 
console.log(elm);


 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // select element by Tag Name
    let div1 = document.getElementById("div1");
let elm = div1.getElementsByTagName("h2");

for(let i = 0; i < elm.length; i++ ){
  elm[i].innerHTML = " hello jaffar"; // to change html value in javascript
 }
  console.log(elm);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      // insert before: within element               change position 
      let list1 = document.getElementById("list"); //parent

      let item = document.createElement("li");
      item.textContent = "new list 5";

      let position =
      list1.insertBefore(item, position);
        list1.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling;



             //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44
      // insert before within body

      let parent = document.body;

      let elm = document.createElement("h2");
      elm.textContent = " This is new text";

      let list = document.getElementById("list");

      parent.insertBefore(elm, list);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44$$$$$$$

         // Removed child element
      let parent = document.getElementById("list");
      let elm = parent.firstElementChild.nextElementSibling;

      parent.removeChild(elm);



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4444444
         //Clone the element or copy
      let parent = document.getElementById("list");

      let clon = list.cloneNode(true); // if we dont write the true then it will return just parent lin not all its childs

      document.body.appendChild(clon);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        // set attribute in js

      let btn = document.getElementById("btn");

      btn.setAttribute("name", "form");



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44$$$$$$$$$$$$
      //get  attribute in js

      let btn = document.getElementById("btn");

      let val = btn.getAttribute("name");

      console.log(val);



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
       //remove    and Has  attribute in js

      let btn = document.getElementById("btn");

      let val = btn.removeAttribute("name");



      //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         // Has  attribute in js

      let btn = document.getElementById("btn");

      let val = btn.hasAttribute("name");

      console.log(val)


     

      
      //NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
        //inline css style in js   : it can remove previously work and give priority to next work

      let btn = document.getElementById("btn");

      //btn.style.cssText = "background-color:red; color: white ";    first method

      // btn.setAttribute('style', 'color:white; background-color:red;');  second methods

      // btn.style.color = "red";          third method
      // btn.style.background = "yellow";

      btn.style.cssText += "background:green; border:10px solid yellow;";    // use for multiple styling and authentic method



      //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
     
     
     
     HTML
        <div id="box" class="color dim">
      <p>this is my web page styling point</p>
    </div>

// CSS classes
      // to check which class is inserted or not
      
       let box = document.getElementById("box");
      box.classList.toggle("dim");
      
    
      let result = box.classList.contains("dim");
      console.log(result);

      //box.classList.replace("color", "jaffar");   // for replacing
      // box.classList.remove("str");    for removing class
      //box.classList.add("str");     for add class
      //console.log(box.className);  to check kitni classes lgi hoi hain

      //box.className += " dim";

      //console.log(box.classList);   check in array




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
        <div id="box" class="color dim">
      <p>this is my web page styling point</p>
    </div>

    <script>
      //CSS
      // to CHECK   HEIGHT AND WIDTH    OFFSET WIDTH : BORDER AND PADDING BOTH ARE INCLUDED
      // client width : inwhich border is not included
      let box = document.getElementById("box");

      let width = box.clientWidth;
      let height = box.clientHeight;

      console.log(width);
      console.log(height);
    </script>




         //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      //insert adjacent HTML   IT CAN CONVERT A NORMAL TEXT IN HTML
      // Before beginning    afterbegin       afterend      beforeend
      let elm = document.getElementById("intro");

      let html = "<h1> New h1 tag</h1>";

      elm.insertAdjacentHTML("afterbegin")




  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // query selector : it will return just first element that comes  queryselectorall will return all the values that you have selected
    let elm = document.querySelectorAll("p.intro");
 
  console.log(elm);
 
for(i = 0; i < elm.length; i++){
  elm[i].innerHTML = "hello jaffar";  // it bring change in paragraph that has class intro
}



  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // TRAVERSE :  indirect selection; or if we want to select element with another reference eg from parent to children or siblings mean from one element to another
let elm = document.getElementById("intro");
let node = elm.firstElementChild; // lastelementchild  for all child:    children for all child elements   previous node:  previouselement siblings   for next:    nextelementsiblings
console.log(node);




 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //innerHTML CHANGE AND FETCH DATA

 let elm =  document.getElementById("intro");
elm.innerHTML = " <h1> this is another text video </h1>"  // for set value

 //let content = elm.innerHTML;            

   //console.log(content);       // for fetching data
 






DOM  How to edit and delete special 
tag or statement in the javascrip 
use of get and set 


HOW TO TARGET

 by  Id         document.getElementBy Id(id)
by  Class        document.getElelmentByClassName(name)
by tag name      document.getelementbytagname(name)
document.images
document.anchor
document.links
document.forms    doctype     URL   baseURL  domain
document.all
document.head
document.title
document.body


// DOM Get Methods
//innerText    It fetches all the text in the html page without tags

//innerHTML     it fetches all the HTML with tags and data

//innerAttribute

//.getAttributeNode

//Attributes



//DOM SET ATTRIBUTE
//innerHTML
//innerText
//setAttribute
//Attribute
//removeAttribute



//CSS SELECTORs

// querySelector   document.querySelector(CSS Selector) it target just first element

// querySelectorAll   document.querySelector(CSS Selector) it target all selected CSS selector element


//IN DOM CSS STYLING



document.getElementById("header").onclick = abc;

function abc(){ 
    document.getElementById("header").style.background = "green";
}



DOM addEvevtListner()  Method in  this method we cannot use onclick or any on function 

document.getElementById("header").addEventListner("mouseenter",abc);
document.getElementById("header").addEventListner("click",function(){
        document.getElementById("header").style.border = "10px solid yellow";
});
function abc(){ 
    document.getElementById("header").style.background = "green";
}



DOM traversal methods  used for targetting



// js Animation     83
var a = 0;
setInterval(Anim,500);

function Anim(){
a = a + 10;

    var target = document.getElementById("test");
target.style.marginLeft = a + 'px'; 
}



// DOM EVENTS
//ONCLICK EVENT   inline method

  <</HTML>   :<button id="btn" onclick="btnclick()">Click on Me</button>

    
      // DOM EVENTS

      //click function

      function btnclick() {
        alert("button was clicked");
    }
      


     <</HTML>  :  <button id="btn">Click on Me</button>

    
      // DOM EVENTS

      //click function    : Method 2

      function btnclick() {
        alert("button was clicked");
      }

      let btn = document.getElementById("btn");

btn.addEventListener("click", btnclick);
      




    
      // DOM EVENTS

      //click function    : Method 2

        //HTML   :<button id="btn">Click on Me</button> let btn = document.getElementById("btn");

      btn.addEventListener("click", function () {
        console.log("click function is activated");
      });

      
 //    HTML :<button id="btn">Click on Me</button>

      btn.addEventListener("mouseout", function () {
        alert("click function is activated");
      });


      
 //  HTML  :<button id="btn">Click on Me</button>

      btn.addEventListener("mouseover", function () {
        console.log("click function is activated");
      });




      //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4444
      // HTML : <button id="btn">Click on Me</button>

    
      // DOM EVENTS

      //remove eventlistner    : Method
      let btn = document.getElementById("btn");

      function click1() {
        console.log("click1 activated");
      }

      function click2() {
        console.log("click2 activated");
      }

      btn.addEventListener("click", click1);
      btn.addEventListener("click", click2);

      btn.removeEventListener("click", click2);





//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
       // HTML: <form action="">
      <label for="text">Submit :</label>
      <input type="text" id="myinput" />
    </form>
//Jsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjsjjsjsjsjjsjsjjsjsjsjjsjsjsjsjjsjsjsj
      // DOM EVENTS
      //scrolling
      let x = document.getElementById("myinput");

      x.addEventListener("focus", myFocusFunction);
      x.addEventListener("blur", myBlurFunction);

      // for every time changing
      x.addEventListener("change", function () {
        console.log(this.value);
      });

      // for  input every character show
      x.addEventListener("input", function () {
        console.log(this.value);
      });

      // for focusing
      function myFocusFunction() {
        x.style.background = "yellow";
      }

      //for blurring
      function myBlurFunction() {
        x.style.background = "white";
      }


//#%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      <style>
      body {
        width: 50%;
        padding: 100px;
        background-color: gray;
      }
      #mydive {
        border-radius: 5%;
        padding: 50px;
        background-color: orange;
      }
      #btn {
        background-color: red;
        border-radius: 30%;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>hello</h1>
    <div id="mydive">
      <button id="btn">Click Me</button>
    </div>

    <script>
      // DOM EVENTS
      //EVENT BUBBELING  EVENT CAPTURING
      let d = document.getElementById("mydive");
      let b = document.getElementById("btn");

      b.addEventListener("click", btnClicked);
      d.addEventListener("click", diveClicked);

      document.body.addEventListener("click", bodyClicked);

      function btnClicked() {
        console.log("button clicked....");
      }

      function diveClicked() {
        console.log("div clicked....");
      }

      function bodyClicked() {
        console.log("body clicked....");
      }
    </script>
  </body>
</html>


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 <body>
    <h1>hello</h1>
    <a href="https://www.google.com" id="anchor" target="_blank">Click Me</a>

    <script>
      // DOM EVENTS
      //prevent default: just check not going to  google
      let link = document.getElementById("anchor");

      link.addEventListener("click", function (e) {
        console.log("link clicked....");
        e.preventDefault();
      });
    </script>
  </body>
</html>



  <body>
    <h1>hello</h1>
    <form action="" id="myform">
      <input type="text" />
      <input type="submit" />
    </form>
    <script>
      // DOM EVENTS
      //prevent default: just check not submitting data
      let form = document.getElementById("myform");

      form.addEventListener("submit", function (e) {
        event.preventDefault();
      });
    </script>
  </body>
</html>







$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// BOM  BROWSER OBJECT MODEL

   <script>
      //innerheight and innerwidth and outer height and outer width
     
     
       console.log(window.innerHeight);
       console.log(window.innerWidth);

      console.log(window.outerHeight);
      console.log(window.outerWidth);
    </script>




var iHeight = window.innerWidth; //Hieght
console.log(innerWidth);


var oHeight = window.outerWidth; //Height
console.log(outerWidth);   

//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
// WINDOW OPEN AND CLOSE() METHODS   window.open (URL,name,speciification )
var myWindow;
function openWindow(){
 myWindow= window.open("http://www.yahoobaba.net" , "", "width=500px, height=200px , left=500px, top=200px");
}
function closeWindow(){
    myWindow.close();
}



//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
  <body>
    <h1>jaffar khan</h1>

    <button id="btn1">Google</button>

    <script>
      //innerheight and innerwidth and outer height and outer width

      let btn1 = document.getElementById("btn1");

      let url = "https://www.google.com";
      let feature = "height = 300,width=300 left= 300,  top=200";

      btn1.addEventListener("click", function () {
        window.open(url, "google", feature);
      });
    </script>
  </body>





//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    <body>
    <h1>jaffar khan</h1>

    <button id="btn1">Google</button>
    <button id="btn2">yahoo</button>
    <button id="btn3">close</button>
    <script>
      //innerheight and innerwidth and outer height and outer width

      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let btn3 = document.getElementById("btn3");

      let url = "https://www.google.com";
      let feature = "height = 300,width=300 left= 300,  top=200";
      let win; // Global variable

      btn1.addEventListener("click", function () {
        win = window.open(url, "google", feature);
      });

      btn2.addEventListener("click", function () {
        window.open("https://www.yahoo.com", "google");
      });

      btn3.addEventListener("click", function () {
        win.close();
      });
    </script>
  </body>

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

// time out function: after giving time your function will appear

      let timeoutid = setTimeout(myfunction, 2000);
      function myfunction() {
        alert("well done Tiger");
      }

      clearTimeout(timeoutid);  // to finish this function
    

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44
 <body>
    <h1>jaffar khan</h1>
    <button id="btn">button</button></button>
    <script>
      //set interval : to stop the function  repitition when you want
      let t1 = setInterval(fun, 2000);

      function fun() {
        console.log("repitition execution");
      }

      let btn1 = document.getElementById("btn");

      btn1.addEventListener("click", function () {
        clearInterval(t1);
      });
    </script>
  </body>






//moveBy and moveTo window

// resizeBy and resizeTO METHODS IN WINDOWS

//scrollTo and scrollBy methods

function scrollWindow(){
    window.scrollBy(-10,0);
}


// LOCATION OBJECCT : get info about URL  and move from one url to another

 console.log(location.href);
      console.log(location.pathname);
console.log(location.protocol);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
        <body>
    <h1>jaffar khan</h1>
    <button id="btn" onclick="fun()" target="blank">Redirect to Google</button>
    <script>
      //set interval : to stop the function  repitition when you want
      function fun() {
        // window.location = "https://www.google.com";
        //location.assign("https://www.google.com");
        //location.replace("https://www.google.com");
        location.reload();   // for refreshing the page
      }
    </script>
  </body>




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44
   <script>
      // Navigator object: info about browser and capabilities that java can be run or not etc

      console.log(navigator.appName);
      console.log(navigator.appVersion);
      console.log(navigator.appCodeName);
      console.log(navigator.cookieEnabled);
      console.log(navigator.userAgent);
      console.log(navigator.platform);
      console.log(navigator.javaEnabled());
    </script>




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

   <script>
      // Screen object: give intro about the curent screen in which you are working

      console.log(screen.width);
      console.log(screen.height);
      console.log(screen.colorDepth);
      console.log(screen.orientation);
    </script>


//TECH GUN TUTORIAL

//statement
var a;
a = 2;
alert(a); 

// VAR   let and const is the advance form of 

var jaffar = 10;
var imran = 2;
var x = jaffar + imran;
prompt(x);



//let it can work like a variable

let jaffar = 10;
let imran = 2;
let x = jaffar * imran;
console.log(x);





// javascript type conversion
let type = 10;
console.log( typeof type);
                                //  number to string  conversion
let newtype = String(type);
console.log(typeof  newtype);
 


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//Hoisting


EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//ECMASCRIPT :ES6   ES2015JUNE
   // default parameter: in this jaffar is default value
      function talk(msg = "jaffar") {
        console.log(msg);
      }
      talk();


22222222222222222222222222222222222222222222222222222222222222
      //Rest parameter: it is defined on three dots(...)wo parameter jis main hm already define kye bghair jitnay bhi parameter bhi pass kr lain wo work kre ga
      function sum(...args) {
        let result = 0;

        for (let i = 0; i < args.length; i++) {
          result += args[i];
        }
        console.log(result);
      }
      sum(23, 98);
      sum(98, 90, 09, 786);
      sum(9);
      sum(1234, 876, 987);


22222222222222222222222222222222222222222222
        //spread  operator: to join the data
      let array1 = [1, 4, 6, 8];

      let array2 = [9, 8, 5, ...array1];

      let array3 = [2, 4, ...array1, ...array2];
      console.log(array3);


222222222222222222222222222222222222222222222222222222222222222
       // for of loop: it make  easy to iterate

      //let score = [90, 80, 76, 54, 45];
      let score = "hello jaffar";
      for (let x of score) {
        console.log(x);
      }




      2222222222222222222222222222222222222222222222222222222222222222222

       //Template ritelar
      let baktick = `
      O       Y              L        O
                     I

       U                            V
                               
         J                        E

           A                    F
             
              F               B
                
                  B         H
                      A   I
                         J`;
      console.log(baktick);

      // template literal operator
      let str = "Muhammad Jaffar";
      console.log(` My Name is ${str}. Thank You!`);
      



      dddddddddddddddddddddddddddddddddddddddddddddd
       // ES6_ARRAY DESTRUCTURING
      //nested array
      let book = ["jaffar", 22, 700, ["asif", 2023], 09];

      //let name = book[0];
      //let page = book[1];
      //let price = book[2];

      let [name, page, price, [bhai, year], value] = book;
      console.log(value);


  // ES6_ARRAY DESTRUCTURING
      function book() {
        return ["jaffar", 98, 45];
      }
      // let name = book();
      let [name, price, value] = book();

      console.log(price);

      
222222222222222222222222222222222222222222222222222222222222222
        // ES6_OBJECT DESTRUCTURING
      let book = {
        name: "advance js",
        page: 200,
        price: 234,
      };
      //let name = book.name;
      //we also can access with title by the place of name
      let { name: title, page, price } = book;

      console.log(title);


      444444444444444444444444444444444444444444444444444444444444444
      
      //OOP CONCEPT
      let person1 = {
        firstName: Muhammad,
        lastName: Jaffar,
        age: 24,

        fullname: function(){
          console.log(this.firstName + "" + this.lastname);
        }
      };

     // person1.age = 30;   // modified age 
     // document.write(person1.age);

     person1.fullname();


     2222222222222222222222222222222222222222222222222222
       //OOP CONCEPT
      let person1 = {};   // new Object();
      person1.name = "jaffar";

      console.log(person1);


2222222222222222222222222222222222222222222222222222222
     //CONSTRUCTOR FUNCTION
        function person(first,last,a){
          this.firstName=first;
          this.lastName=last;
          this.age=a;

          //using method to access or enter new value
          this.sayjaffar = function(){
            alert("jaffar");
          }
        }

        let person1 = new person("jaffar","khan",23);
        let person2 = new person("kashif","bhai",28);


        console.log(person1);
        console.log(person2);

















