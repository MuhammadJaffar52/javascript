var bluecar = document.getElementById("bluecar");
var racecar = document.getElementById("racecar");

//bluecar
bluecar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    bluecar.style.left = random + "px"
});

//racecar
window.addEventListener("keydown", function (e) {
   if(e.keyCode=="39") var racecarLeft=parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racecarLeft < 260) { racecar.style.left = (racecarLeft + 130) + "px" }
    if (e.keyCode == "37") {
    var racecarLeft=parseInt(window.getComputedStyle(racecar).getPropertyValue("left"))
    if (racecarLeft > 0) { racecar.style.left = (racecarLeft - 130) + "px" }
}
})
