var currentNote=0;
var newNoteButton=document.querySelector("#newNote");
var content=[
  {
    title:"READ_ME",
    date:"09/30/2026",
    content:
     `<p>
     If you're reading this, you found the same computer I did.
     I don't know how I got here. One second I was walking to the kitchen to make a Caesar salad and the next I was surrounded by these walls.
     <br>
     <br>
     I think I'll keep this computer as home base for now... It's the only unique thing in here. Maybe there are other computers out there. Maybe other people too.
     <br>
     <br>
     The computer calls me user 3. I wonder where users 1 and 2 went.
     <br>
     <br>
     I found a few bottles of almond water today. Did some exploring too and found- guess what? More yellow-plastered walls. I'm really starting to lose track of time in here.
     <br>
     <br>
     There are photos on here from before I came. Twelve rooms, one of which is circled. I keep going back to it. Something about that room feels wrong. 
     <br>
     <br>
     There's a game on here. I lost the first few times but when I finally won, all it gave me was a number.
     <br>
     <br>
     That symbol at the top of the screen is everywhere here. Infinite halls, infinite rooms. Or maybe its just an 8 that fell over.
     <br>
     <br>
     I don't understand this padlock app at all. My best theory is that the password is hidden somewhere in these hallways. Its the only hope I have left.
     <br>
     <br>
     The hum was louder today. Days, hours, weeks, I can't tell. Whatever time period, I'm starting to lose touch.
     <br>
     mddmzsq uz meoqzpuzs adpqd
     <br>
     <br>
     What... That gibberish.. it wasn't me. Who???? What.. what. what. what. what. im not alone but i dont think i can trust whatevers here with me. I want to but... god.
     <br>
     <br>
     ii think I foundd a way ou. or a way furhte in. either wway, im ggoin. i tienk i can hear ssomethng  outsidei the roo

     </p>`  
    },
];
var savedNotes=localStorage.getItem("notes");
if (savedNotes){
  content=JSON.parse(savedNotes);
}
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
      saveNotes();
    });

    var allTabs=document.querySelector("#notesTabs").children;
    for (let i=0; i<allTabs.length;i++){
      allTabs[i].classList.remove("activeFolderTab");
    }
    allTabs[index].classList.add("activeFolderTab");
    allTabs[index].scrollIntoView();
   }
function saveNotes(){
  localStorage.setItem("notes", JSON.stringify(content));
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
    saveNotes();
    addToTabs(content.length-1);
    setNotesContent(content.length-1);
  })

deleteNoteButton.addEventListener("click",function(){
  if (content.length==1){
    return;
  }  
  
  content.splice(currentNote,1);
  saveNotes();
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