// WINDOW OPEN AND CLOSE() METHODS   window.open (URL,name,speciification )
var myWindow;
function openWindow(){
 myWindow= window.open("http://www.yahoobaba.net" , "", "width=500px, height=200px , left=500px, top=200px");
}
function closeWindow(){
    myWindow.close();
}