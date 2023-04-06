
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

