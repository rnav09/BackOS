initializeWindow("terminal");

var apps=["notes","photos","tapes","keypad","terminal","welcome","settings","desmiler"];
var output=document.querySelector("#terminalOutput");
var input=document.querySelector("#terminalInput");

function printLine(text){
  var line=document.createElement("div");
  line.textContent=text;
  output.appendChild(line);
  output.scrollTop=output.scrollHeight;
  return line;
}

function runCommand(command){
  command=command.trim().toLowerCase();


  if (command=="help"){
    printLine("help   - show this list");
    printLine("clear  - clear the screen");
    printLine("whoami - display current user");
    printLine("date   - display system date");
    printLine("open   - open a program");
    printLine("exit   - close terminal");
    printLine("dir    - list files");
  }
  else if (command=="clear"){
    output.innerHTML="";
  }
  else if (command=="whoami"){
    printLine("you are the 4th user of this computer.");
    printLine("the others left.");
  }
  else if (command=="date"){
    printLine(scrambleText(new Date().toLocaleDateString()));
  }
  else if (command=="exit"){
    printLine("searching for exits... 0 found.");
  }
  else if (command=="dir"){
    printLine("notes.exe");
    printLine("photos.exe");
    printLine("tapes.exe");
    printLine("keypad.exe");
    printLine("terminal.exe");
    printLine("desmiler.exe");
    printLine("settings.exe");
    printLine("escape_plan.txt  [CORRUPTED]");
    printLine("user_4.log       [ACCESS DENIED]");
  }
  else if (command=="open terminal"){
    printLine("You're already here.")
  }
  else if (command.startsWith("open ")){
    var appName=command.slice(5);
    var appWindow=document.querySelector("#"+appName);
    if (appWindow && apps.includes(appName)){
      printLine("opening "+appName+".exe...");
      openWindow(appWindow);
      }
    else{
      printLine("program not found.")
    }
    }
  else{
      printLine("command not recognized.");
  }
}

input.addEventListener("keydown",function(e){
  if (e.key=="Enter"){
    var command=input.value;
    printLine("C:\\LEVEL0> "+command);
    input.value="";
    runCommand(command);
  }
});

var versionLine=printLine("BackOS Terminal v.0.0.∞");
setInterval(function(){
  versionLine.textContent="BackOS Terminal v"+scrambleText("0.0.∞")
},200);

printLine("type 'help' for a list of commands.");
printLine("");