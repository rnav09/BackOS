initializeWindow("settings");

var wallpaperVideo=document.querySelector("#wallpaperVideo");


function updateMotion(){
  var choice=document.querySelector("#settingWallpaper").value;

  if (document.querySelector("#settingMotion").checked){
    document.body.style.animation="none";
  }
  else if (choice=="images/funrooms_wall.jpg"){
    document.body.style.animation="panFun 10s ease-in-out infinite alternate";
  }
  else{
    document.body.style.animation="";
  }
}



document.querySelector("#settingWallpaper").addEventListener("change", function(){
  var choice=document.querySelector("#settingWallpaper").value;

  if (choice.endsWith(".mp4")){
    wallpaperVideo.src=choice;
    wallpaperVideo.style.display="block";
    document.body.style.backgroundImage="none";
  }
  else{
    wallpaperVideo.style.display="none";
    document.body.style.backgroundImage="url("+choice+")";
    if (choice=="images/funrooms_wall.jpg"){
      document.body.style.backgroundSize="1800px";
      document.body.style.backgroundRepeat="no-repeat";
      document.body.style.backgroundPosition="0% 0%";
    }
    else{
      document.body.style.backgroundSize="";
      document.body.style.backgroundRepeat="";
      document.body.style.backgroundPosition="";
    }
  }
  updateMotion();

});

var dimmer=document.querySelector("#dimmer");
document.querySelector("#settingBrightness").addEventListener("input", function(){
  var value=document.querySelector("#settingBrightness").value;
  dimmer.style.opacity=(100-value)/100;
});

document.querySelector("#settingMotion").addEventListener("change", function(){
  updateMotion();
});

document.querySelector("#settingResetNotes").addEventListener("click",function(){
  localStorage.removeItem("notes");
  location.reload();
});

document.querySelector("#settingResetAll").addEventListener("click",function(){
  localStorage.clear();
  location.reload();
});


setInterval(function(){
  document.querySelector("#settingsVersion").textContent=scrambleText("0.0.∞");
},200);