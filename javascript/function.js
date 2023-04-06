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

