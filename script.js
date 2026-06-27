
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);



//opening and closing
var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element){
    element.style.display = "flex";
}

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");


//welcomeScreenClose.addEventListener("click", function () {
    //closeWindow(welcomeScreen);
//});

//document.querySelector("#welcomeclose").addEventListener("click", function () {
    //closeWindow(document.querySelector("#welcome"));
//});

welcomeScreenClose.addEventListener("click", closeWindow(welcomeScreen));



//welcomeScreenOpen.addEventListener("click", function () {
    //openWindow(welcomeScreen);
//});

//document.querySelector("#welcomeopen").addEventListener("click", function () {
    //openWindow(document.querySelector("#welcome"));
//});

welcomeScreenOpen.addEventListener("click", openWindow(welcomeScreen));



//dragging elements - buggy; needs fixed

//dragElement(document.getElementById("welcome")); //

//function dragElement(elmnt) {
  //var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  //if (document.getElementById(elmnt.id + "header")) {
   // document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  //} else {
    //elmnt.onmousedown = dragMouseDown;
  //}

  //function dragMouseDown(e) {
    //e = e || window.event;
    //e.preventDefault();
    //pos3 = e.clientX;
    //pos4 = e.clientY;
    //document.onmouseup = closeDragElement;
    //document.onmousemove = elementDrag;
 // }

  //function elementDrag(e) {
   // e = e || window.event;
   // e.preventDefault();
    //pos1 = pos3 - e.clientX;
    //pos2 = pos4 - e.clientY;
    //pos3 = e.clientX;
    //pos4 = e.clientY;
    //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 // }

  //function closeDragElement() {
    //document.onmouseup = null;
    //document.onmousemove = null;
  //}
//}