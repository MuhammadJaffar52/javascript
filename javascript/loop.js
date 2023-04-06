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
