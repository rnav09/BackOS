var typedPassword="";
var correctPassword="2468";

initializeWindow("keypad");

var endLines=[
  "exit found",
  "it was never in here.",
  "it's the screen in front of you.",
  "reach through it."
];

function startEnding(){
  document.querySelector("#endScreen").style.display="flex";
  var endLine=0;

  let addingEndLines=setInterval(function(){
    if (endLine==endLines.length){
      clearInterval(addingEndLines);

      setTimeout(function(){
        document.querySelector("#endScreen").classList.add("whiteout");
      },1500);

      setTimeout(function(){
        document.querySelector("#endScreen").style.display="none";
        document.querySelector("#bootText").innerHTML="<p>welcome, user 5.</p>";
        document.querySelector("#bootScreen").style.display="flex";
      },4500);
      return;
    }
    document.querySelector("#endText").innerHTML+="<p>"+endLines[endLine]+"</p>";
    endLine++;
  },1200);
}

var keys=document.querySelectorAll(".keypadKey");
for (let i=0; i<keys.length;i++){
  let key=keys[i];

    key.addEventListener("click",function(){
      if (typedPassword.length<4){
        typedPassword+=key.textContent;
        document.querySelector("#keypadDisplay").textContent=typedPassword;

      }
    });
}
document.querySelector("#keypadClear").addEventListener("click",function(){
  typedPassword="";
  document.querySelector("#keypadDisplay").textContent="_ _ _ _";
});

document.querySelector("#keypadEnter").addEventListener("click",function(){
  if (typedPassword==correctPassword){
    document.querySelector(".keypadGrid").style.display="none";
    document.querySelector("#keypadDisplay").style.fontSize="24px";
  let dots="";
  let loading=setInterval(function(){
    dots+=".";
    if (dots.length>3){
      dots="";
    }
    document.querySelector("#keypadDisplay").textContent=scrambleText("VERIFYING")+dots;
  },400);

  setTimeout(function(){
    clearInterval(loading);
    setTimeout(startEnding, 500);
  },3000);
}
  else{
    document.querySelector("#keypadDisplay").textContent="DENIED";
    typedPassword="";
  }
});