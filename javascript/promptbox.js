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

