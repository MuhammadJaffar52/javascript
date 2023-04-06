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
