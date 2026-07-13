
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);



//clicktest
//document.getElementById("wlcmeclose").onclick =test();
  
function test() {
    closeWindow(welcomeScreen);
    document.getElementById("test").innerHTML= "success";
  
};






//opening and closing - does not work currently

//defining screens
var welcomeScreen = document.querySelector("#wlcmescrn");
var welcomeScreen = document.getElementById("wlcmescrn");

//close def.
var welcomeScreenClose = document.querySelector("#wlcmeclose");

function closeWindow(element) {
    StyleSheet.display = "none";

}

//open def.
var welcomeScreenOpen = document.querySelector("#wlcmeopen");

function openWindow(element){
    StyleSheet.display = "flex";
}

//open/close commands
welcomeScreenClose.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});




//dragging elements - buggy; needs fixed
//elements we (are trying to) drag
dragElement(welcomeScreen);


//defining dragElement
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
    element.StyleSheet.top = (element.offsetTop - currY) + "px";
    element.StyleSheet.left = (element.offsetLeft - currX) + "px";
  }

  function stopDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}