var bootLines=[
  "Checking memory... OK",
  "Loading hallways... OK",
  "Searching for exits... 0 found",
  "Welcome back."
];
var currentLine=0

let addingLines=setInterval(function(){
  if (currentLine==bootLines.length){
    clearInterval(addingLines);
    return;
  }
  document.querySelector("#bootText").innerHTML+="<p>"+bootLines[currentLine]+"</p>";
  currentLine++;
},700);

setTimeout(function(){
  document.querySelector("#bootScreen").style.display="none";
},5000);
document.querySelector("#bootScreen").addEventListener("click",function(){
  document.querySelector("#bootScreen").style.display="none";
});

setInterval(function(){
  document.querySelector("#bootVersion").textContent=scrambleText("v0.0.∞")
},200);