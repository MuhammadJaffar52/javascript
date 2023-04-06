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