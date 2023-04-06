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
