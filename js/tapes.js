var tapes=[
  {
    file:"audio/stage1.mp3",
    title: "It's just a burning memory"
  },
  {
    file:"audio/stage2.mp3",
    title: "Surrendering to despair"
  },
  {
    file:"audio/stage3.mp3",
    title:"Drifting Time Misplaced"
  },
  {
    file:"audio/stage4.mp3",
    title:"Temporary Bliss"
  },
  {
    file:"audio/stage5.mp3",
    title:"Synapse Retrogenesis"
  },
  {
    file:"audio/stage6.mp3",
    title:"Place In The World Fades Away"
  }
];
var currentTape=0;
initializeWindow("tapes");
loadTape(0);

function loadTape(index){
  currentTape=index;
  document.querySelector("#tapeAudio").src=tapes[index].file;
  document.querySelector("#tapeTitle").textContent=tapes[index].title;
}

document.querySelector("#tapePlay").addEventListener("click",function(){
  var audio=document.querySelector("#tapeAudio");
  if (audio.paused){
    audio.play();
    document.querySelector("#tapePlay").textContent="❚❚";
  }
  else{
    audio.pause();
    document.querySelector("#tapePlay").textContent="▶";
  }
});
document.querySelector("#tapeNext").addEventListener("click",function(){
  var audio=document.querySelector("#tapeAudio");
  var wasPlaying=!audio.paused;

  var next=currentTape+1;
  if (next==tapes.length){
    next=0;
  }
  loadTape(next);

  if(wasPlaying){
    audio.play();
  }
});
document.querySelector("#tapePrev").addEventListener("click",function(){
  var audio=document.querySelector("#tapeAudio");
  var wasPlaying=!audio.paused;

  var prev=currentTape-1;
  if (prev<0){
    prev=tapes.length-1;
  }
  loadTape(prev);

  if (wasPlaying){
    audio.play();
  }
});

function formatTime(seconds){
  var mins=Math.floor(seconds/60);
  var secs=Math.floor(seconds%60);
  if (secs<10){
    secs="0"+secs;
  }
  return mins+":"+secs;
}

var audio=document.querySelector("#tapeAudio");
audio.addEventListener("timeupdate",function(){
  var percent=audio.currentTime/audio.duration*100;
  document.querySelector("#tapeBarFill").style.width=percent+"%";
  document.querySelector("#tapeCurrent").textContent=formatTime(audio.currentTime);
});
audio.addEventListener("loadedmetadata",function(){
  document.querySelector("#tapeLength").textContent=formatTime(audio.duration);
});

audio.addEventListener("play",function(){
  document.querySelector("#reelLeft").classList.add("spinning");
  document.querySelector("#reelRight").classList.add("spinning");
});
audio.addEventListener("pause",function(){
  document.querySelector("#reelLeft").classList.remove("spinning");
  document.querySelector("#reelRight").classList.remove("spinning");
});

audio.addEventListener("ended",function(){
  var next=currentTape+1;
  if (next==tapes.length){
    next=0;
  }
  loadTape(next);
  audio.play();
});