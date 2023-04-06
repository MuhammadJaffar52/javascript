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

