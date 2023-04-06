   // query selector : it will return just first element that comes  queryselectorall will return all the values that you have selected
    let elm = document.querySelectorAll("p.intro");
 
  console.log(elm);
 
for(i = 0; i < elm.length; i++){
  elm[i].innerHTML = "hello jaffar";  // it bring change in paragraph that has class intro
}
