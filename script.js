
var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
    element.style.display = "none"
}

//time in topbar - works; don't touch
setInterval(function (){
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000)

//dragging elements - buggy; needs fixed
dragElement(document.getElementById("welcome"))

function dragElement(element) {
    var initx = 0;
    var inity = 0;
    var currx = 0;
    var curry = 0;
    if (document.getElementById(element.id + "header")){
        document.getElementById(element.id + "header").onmousedown = startDragging;
    }else{
        element.onmousedown = startDragging;
    }
}
  function startDragging(e) {
      e = e || window.event;
      e.preventDefault();
      initx = e.clientx;
      inity = e.clienty;
      document.onmouseup = stopDragging;
      document.onmousemove = dragElement;
}
function dragElement(e){
    e = e || window.event;
    e.preventDefault();
    currx = initx - e.clientx;
    curry = inity - e.clienty;
    initx = e.clientx;
    inity = e.clienty;
    element.style.top = (element.offsetTop - curry) + "px";
    element.style.left = (element.ofsetLeft - currx) + "px";
}

function stopDragging () {
    document.onmouseup = null;
    document.onmousemove = null;
}