var currentNote=0;
var newNoteButton=document.querySelector("#newNote");
var content=[
  {
    title:"READ_ME",
    date:"09/30/2026",
    content:
     `<p>
     If you're reading this, you found the same computer I did.
     I don't know how I got here. One second I was walking to the kitchen and the next I was surrounded by these walls.
     <br>
     <br>
     I think I'll keep this computer as home base for now.. It's the only unique thing in here. Maybe there are other computers out there. Maybe other people too...
     <br>
     <br>
     I found a few bottles of almond water today. Did some exploring too and found- guess what? More yellow-plastered walls. I'm really starting to lose track of time in here.
     <br>
     <br>
     The hum was louder today. Days, hours, weeks, I can't tell. Whatever time period, I'm starting to lose touch. u3189m3ahe fueah bh3b4187741uhtguir hnj a
     <br>
     eageuahui ejafaenjigjhie
     <br>
     <br>
     Someone has been typing on this. I didn't write all of this gibberish. I don't think I'm alone. I have to find an exit soon.
     <br>
     <br>
     I think I found a way out. Or a way further in. Either way, I'm going. I think I can hear something outside the ro

     </p>`  
    },
];
var deleteNoteButton=document.querySelector("#deleteNote");

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


initializeWindow("notes");

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
  if (content.length==1){
    return;
  }  
  
  content.splice(currentNote,1);
    document.querySelector("#notesTabs").innerHTML=""
    for (let i=0; i<content.length;i++){
      addToTabs(i);
    }
  if (currentNote==0){
    setNotesContent(0);
  }
  else{
    setNotesContent(currentNote-1);
  }
})