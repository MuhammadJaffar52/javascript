    // TRAVERSE :  indirect selection; or if we want to select element with another reference eg from parent to children or siblings mean from one element to another
let elm = document.getElementById("intro");
let node = elm.firstElementChild; // lastelementchild  for all child:    children for all child elements   previous node:  previouselement siblings   for next:    nextelementsiblings
console.log(node);
