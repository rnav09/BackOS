var currentIcon=undefined;
var biggestIndex=1;
var topBar=document.querySelector("#top");

//Window
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    var newTop=(elmnt.offsetTop-pos2)
    var minTop=topBar.offsetHeight+elmnt.offsetHeight/2;
    if (newTop<minTop){
      newTop=minTop;
    }
    elmnt.style.top=newTop+"px"
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWindow(element){
  element.style.display="none"
}
function openWindow(element){
  element.style.display="block"
  handleWindowTap(element);

}


//Closing Window
function makeCloseable(name){
  var screen=document.querySelector("#"+name)
  var closeButton=document.querySelector("#"+name+"close")
    closeButton.addEventListener("click",function(){
      closeWindow(screen);
    });
}
function handleWindowTap(element){
  biggestIndex++;
  element.style.zIndex=biggestIndex;
  topBar.style.zIndex=biggestIndex+1;
}
function addWindowTapHandling(element){
  element.addEventListener("mousedown", function(){
    handleWindowTap(element);
  });
}

function initializeWindow(elementName){
  var screen=document.querySelector("#"+elementName)
  addWindowTapHandling(screen);
  makeCloseable(elementName);
  dragElement(screen);
  if (elementName!="welcome"){
    initializeIcon(elementName);
  }
}




//App is selected effect
function selectIcon(element){
  if (currentIcon){
    deselectIcon(currentIcon);
}
  element.classList.add("icon_selected");
  currentIcon=element;
}
function deselectIcon(element){
  element.classList.remove("icon_selected");
  currentIcon=undefined;
}
function handleIconTap(element, appWindow){
  if (element.classList.contains("icon_selected")){
    deselectIcon(element);
    openWindow(appWindow);
  }
  else{
    selectIcon(element);
  }
}
function initializeIcon(name){
  var icon=document.querySelector("#"+name+"Icon");
  var screen=document.querySelector("#"+name);
  icon.addEventListener("click", function(){
    handleIconTap(icon, screen);
  });
}