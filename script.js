
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);

//clicktest
//document.getElementById("test").onclick =test();
  
//function test() {
    //document.getElementById("test").innerHTML= "success";
//};

//opening and closing - does not work currently
//original

var welcomeScreen = document.querySelector("#wlcmescrn");
//var welcomeScreen = document.getElementById("wlcmescrn");

//close
var welcomeScreenClose = document.querySelector("#wlcmeclose");

//welcomeScreenClose.addEventListener("click", function () {
    //closeWindow(welcomeScreen);
//});


function closeWindow(element) {
    element.style.display = "none";
}
//open
var welcomeScreenOpen = document.querySelector("#wlcmeopen");

//welcomeScreenOpen.addEventListener("click", function () {
    //openWindow(welcomeScreen);
//});

function openWindow(element){
    element.style.display = "flex";
}

//other/messing around

//welcomeScreenClose.addEventListener("click", closeWindow(welcomeScreen));
//welcomeScreenOpen.addEventListener("click", openWindow(welcomeScreen));
document.querySelector("#wlcmeclose").onclick = function(){closeWindow()};

//document.querySelector("#welcomeclose").addEventListener("click", function () {
    //closeWindow(document.querySelector("#welcome"));
//});

//document.querySelector("#welcomeopen").addEventListener("click", function () {
    //openWindow(document.querySelector("#welcome"));
//});





//dragging elements - buggy; needs fixed

dragElement(welcomeScreen);

function dragElement(element) {

  var currX = 0, currY = 0, initX = 0, initY = 0;

  if (document.getElementById(element.id + "header")) {

    document.getElementById(element.id + "header").onmousedown = startDrag;

  } else {

    element.onmousedown = startDrag;

  }

  function startDrag(e) {
    e = e || window.event;
    e.preventDefault();
    initX = e.clientX;
    initY = e.clientY;
    document.onmouseup = stopDrag;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currX = initX - e.clientX;
    currY = initY - e.clientY;
    initX = e.clientX;
    initY = e.clientY;
    element.style.top = (element.offsetTop - currY) + "px";
    element.style.left = (element.offsetLeft - currX) + "px";
  }

  function stopDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}