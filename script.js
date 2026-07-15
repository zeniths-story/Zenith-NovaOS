
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);

var topBar = document.getElementById("top")
var highindx = 1;

//defining screens
var welcomeScreen = document.getElementById("wlcmescrn");
var notesScreen = document.getElementById("NovaNotes");

//dragging elements
//elements we can drag
dragElement(welcomeScreen);
//dragElement(notesScreen);

//defining dragElement
function dragElement(element) {
  var currX = 0, currY = 0, initX = 0, initY = 0;
  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDrag;
  } else {
    element.onmousedown = startDrag;
  };
  function startDrag(e) {
    e = e || window.event;
    e.preventDefault();
    initX = e.clientX;
    initY = e.clientY;
    document.onmouseup = stopDrag;
    document.onmousemove = dragElement;
  };
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currX = initX - e.clientX;
    currY = initY - e.clientY;
    initX = e.clientX;
    initY = e.clientY;
    element.style.top = (element.offsetTop - currY) + "px";
    element.style.left = (element.offsetLeft - currX) + "px";
  };
  function stopDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  };
};

//app stuff
//var slectIcon = undefined;

//function selectIcon(element) {
  //element.classList.add("slect");
  //slectIcon = element;
//};

//function deselectIcon(element) {
  //element.classList.remove("slect");
  //slectIcon = undefined;
//};

//function handleIconSlect(element) {
  //if (element.classList.contains("slect")){
   // deselectIcon(element);
   // openWindow(window);
 // } else {
 //   selectIcon(element);
//  };
  
//};

//opening and closing

//close def.
var welcomeScreenClose = document.getElementById("wlcmeclose");
var notesclose = document.getElementById("novanotesclose")

function closeWindow(element) {
    element.style.display = "none";

};

//open def.
var welcomeScreenOpen = document.getElementById("wlcmeopen");

function openWindow(element){
    element.style.display = "flex";
    highindx++;
    element.style.zIndex = highindx;
    topBar.style.zIndex = highindx + 1
};

//open/close commands
welcomeScreenClose.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});


//notesclose.addEventListener("click", function () {
    //closeWindow(notesScreen);
//});

//window tap handling

//function handWindTap (element) {
 // highindx++;
 // element.style.zIndex = highindx
  //deselectIcon(slectIcon)
//};

//function addWindTapHand(element){
 // element.addEventListener("click", function(){ 
 //   handWindTap(element)
//  });
//};

//initilizing windows
//function initwind(elementName) {
  //var screen = document.querySelector("#"+ elementName);
  //addWindTapHand(screen)
  //dragElement(screen)
  //makeCloseable(elementName);
//}

//initwind(notesScreen)