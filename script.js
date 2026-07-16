
//time in topbar - works; don't move from top
setInterval(function () {
    document.querySelector("#timeOfEarth").innerHTML = new Date().toLocaleString();
}, 1000);


//defining screens
var welcomeScreen = document.getElementById("wlcmescrn");
var novaNotes = document.getElementById("novaNotes")

//dragging elements
//elements we can drag
dragElement(welcomeScreen);
dragElement(document.getElementById("novaNotes"))


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

//opening and closing
var welcomeScreenClose = document.getElementById("wlcmeclose");
var welcomeScreenOpen = document.getElementById("wlcmeopen");
var nnopen = document.getElementById("nnopen");
var nnclose = document.getElementById("nnclose");

//close def.

function closeWindow(element) {
    element.style.display = "none";

};

//open def.

function openWindow(element){
    element.style.display = "flex";
    highIndex++;
    element.style.zIndex = highIndex;
    topBar.style.zIndex = highIndex + 1;
    
};

//open/close commands
welcomeScreenClose.addEventListener("click", function () {
    closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function () {
    openWindow(welcomeScreen);
});

novaNotesopen.addEventListener("click", () => openWindow(novaNotes));
novaNotesclose.addEventListener("click", () => closeWindow(novaNotes));

//function makeClose(element) {
 //
  
//}


//app stuff
var selected = undefined;

function selectIcon(element) {
  element.classList.add("selected");
  selected = element;
};

function deselect (element){
  element.classList.remove("selected");
  selected = undefined;
};

function handIconTap(element){
  if (element.classList.contains("selected")) {
    deselect(element);
    openWindow(window);
  } else {
    selectIcon(element);
  };
};

var highIndex = 1;

function addWindTapHand(element) {
  element.addEventListener("mouseDown", function () {
   handWindTap(element)
  });
};

function handWindTap(element) {
  highIndex++;
  element.style.zIndex = highIndex;
  topBar.style.zIndex = highIndex + 1;
  deselect(selected);
};

var topBar = document.getElementById("top")

function initWind(elementName){
  var screen = document.getElementById("elementName");
  addWindTapHand(screen);
  dragElement(screen);
  makeClose(elementName);
};

//initilized windows
//initWind(welcomeScreen);
initWind(novaNotes);

var content = [
  {
    title: "struggles",
    date: "7/15/26",
    content: `
    <p contenteditable="true"> javascript doesn't like me very much. 
    <br> What am I doing wrong??? 
    <br/>Why no able read addEventListener??</p>
   <br />`,
  },
  {
    title: `<p contenteditable = "true"> Title </p>`,
    date: "7/16/26",
    content: `
    <p contenteditable="true">
    start typing here
    </p>`
  }
];

function setNoteContent(index) {
  var notetext = document.getElementById("noteText");
  notetext.innerHTML = content[index].content;
};

setNoteContent(0)

function addToSideBar(index) {
  var sidebar = document.getElementById("sidebar");
  var note = content[index];
  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <p>
  ${note.title}
  </p>
  <p>
  ${note.date}
  </p>`;

  newDiv.addEventListener("click", function(){
    setNoteContent(index);
  });
  sidebar.appendChild(newDiv);
};

for (let i=0; i< content.length; i++) {
    addToSideBar(i);
};