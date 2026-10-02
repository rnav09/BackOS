//glitchtext
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
//

//Clock
  setInterval(function(){
    document.querySelector("#timeElement").innerHTML=scrambleText(new Date().toLocaleString())
  },200);
//