//DOM 
  How to select the id    
let elm = document.getElementById("first");
  console.log(elm);
 
  

  // how to select the class
  
  let elm = document.getElementsByClassName("cls");

 for(let i = 0; i < elm.length; i++ ){
  elm[i].innerHTML = "<p> hello jaffar</p>"; // to change html value in javascript
 } 
console.log(elm);



    // select element by Tag Name
    let div1 = document.getElementById("div1");
let elm = div1.getElementsByTagName("h2");

for(let i = 0; i < elm.length; i++ ){
  elm[i].innerHTML = " hello jaffar"; // to change html value in javascript
 }
  console.log(elm);



      // insert before: within element               change position 
      let list1 = document.getElementById("list"); //parent

      let item = document.createElement("li");
      item.textContent = "new list 5";

      let position =
      list1.insertBefore(item, position);
        list1.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling;



           
      // insert before within body

      let parent = document.body;

      let elm = document.createElement("h2");
      elm.textContent = " This is new text";

      let list = document.getElementById("list");

      parent.insertBefore(elm, list);



         // Removed child element
      let parent = document.getElementById("list");
      let elm = parent.firstElementChild.nextElementSibling;

      parent.removeChild(elm);



         //Clone the element or copy
      let parent = document.getElementById("list");

      let clon = list.cloneNode(true); // if we dont write the true then it will return just parent lin not all its childs

      document.body.appendChild(clon);



        // set attribute in js

      let btn = document.getElementById("btn");

      btn.setAttribute("name", "form");




      //get  attribute in js

      let btn = document.getElementById("btn");

      let val = btn.getAttribute("name");

      console.log(val)
       //remove    and Has  attribute in js

      let btn = document.getElementById("btn");

      let val = btn.removeAttribute("name");



      
         // Has  attribute in js

      let btn = document.getElementById("btn");

      let val = btn.hasAttribute("name");

      console.log(val)

