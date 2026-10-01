//Elements
var welcomeScreen=document.querySelector("#welcome")
var welcomeScreenOpen=document.querySelector("#welcomeopen")
var notesIcon=document.querySelector("#notesIcon");
var notesScreen=document.querySelector("#notes");
var currentIcon=undefined;
var biggestIndex=1;
var currentNote=0;
var topBar=document.querySelector("#top");
var newNoteButton=document.querySelector("#newNote");
var content=[
  {
    title:"Welcome",
    date:"09/30/2026",
    content:
     `<p>Notenotesnotesnotes</p>`  
    },
  {
    title:"Day 1",
    date:"09/30/2026",
    content:`
    <p>The hum hasn't stopped since I got here.</p>
    <p>I found a bottle of almond water.</p>
    ` 
}
];
var deleteNoteButton=document.querySelector("#deleteNote");

//Clock
  setInterval(function(){
    document.querySelector("#timeElement").innerHTML=scrambleText(new Date().toLocaleString())
  },200);
//


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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
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
  biggestIndex++;
  element.style.zIndex=biggestIndex;
  topBar.style.zIndex=biggestIndex+1;

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
}
function setNotesContent(index){
  var notesContent=document.querySelector("#notesContent")
  notesContent.innerHTML=
      `<p class="noteDate">Date of entry: <span id="noteDate">${content[index].date}</span></p>` + 
      `<div id="noteText" contenteditable="true">${content[index].content}</div>`;
    currentNote=index;

    var updatednoteText=document.querySelector("#noteText")
    updatednoteText.addEventListener("input",function(){
      content[currentNote].content=updatednoteText.innerHTML
    });

    var allTabs=document.querySelector("#notesTabs").children;
    for (let i=0; i<allTabs.length;i++){
      allTabs[i].classList.remove("activeFolderTab");
    }
    allTabs[index].classList.add("activeFolderTab");
    allTabs[index].scrollIntoView();
   }
function addToTabs(index){
  var tabs=document.querySelector("#notesTabs");
  var note=content[index];
  var newTab=document.createElement("div");
  newTab.className="folderTab";
  newTab.innerHTML=note.title;

  newTab.addEventListener("click",function(){
    setNotesContent(index);
  });
  tabs.appendChild(newTab);
}
function scrambleText(text){
  var glitchChars="?#%&█▓▒░¿‽";
  var result="";
  for (let i=0; i<text.length; i++){
    if (Math.random()<0.6){
      result+=text[i];
    }
    else{
      result+=glitchChars[Math.floor(Math.random()*glitchChars.length)];
    }
  }
  return result;
}

//App is selected effect
function selectIcon(element){
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

//Setup
initializeWindow("welcome");
initializeWindow("notes");

welcomeScreenOpen.addEventListener("click",function(){
  openWindow(welcomeScreen);
})

notesIcon.addEventListener("click", function(){
  handleIconTap(notesIcon, notesScreen);
});


for (let i=0; i<content.length;i++){
  addToTabs(i);
}
setNotesContent(0);

setInterval(function(){
  var dateElement=document.querySelector("#noteDate");
  if (dateElement){
    dateElement.textContent=scrambleText(content[currentNote].date);
  }
},120);


newNoteButton.addEventListener("click",function(){
    var newNote={
      date:new Date().toLocaleDateString(),
      content:
        `<p></p>`,
      title:"Entry_"+(content.length+1), 
    };
    content.push(newNote);
    addToTabs(content.length-1);
    setNotesContent(content.length-1);
  })

deleteNoteButton.addEventListener("click",function(){
    content.splice(currentNote,1);
    document.querySelector("#notesTabs").innerHTML=""
    for (let i=0; i<content.length;i++){
      addToTabs(i);
    }
    setNotesContent(currentNote-1)
})