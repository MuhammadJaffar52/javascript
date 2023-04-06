
// LOCATION OBJECCT : get info about URL  and move from one url to another

 console.log(location.href);
      console.log(location.pathname);
console.log(location.protocol);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
        <body>
    <h1>jaffar khan</h1>
    <button id="btn" onclick="fun()" target="blank">Redirect to Google</button>
    <script>
      //set interval : to stop the function  repitition when you want
      function fun() {
        // window.location = "https://www.google.com";
        //location.assign("https://www.google.com");
        //location.replace("https://www.google.com");
        location.reload();   // for refreshing the page
      }
    </script>
  </body>
