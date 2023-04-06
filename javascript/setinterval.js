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