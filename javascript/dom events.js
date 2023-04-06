    
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