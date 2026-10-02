var typedPassword="";
var correctPassword="1234";

initializeWindow("keypad");



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
    document.querySelector("#keypadDisplay").textContent="GRANTED";
    document.querySelector("#keypadUnlocked").style.display="block";
  },3000);
}
  else{
    document.querySelector("#keypadDisplay").textContent="DENIED";
    typedPassword="";
  }
});