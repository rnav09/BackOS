var photos=[
  {
    image:"images/christmasstreeroom.jpg",
    caption:"if you can hear the",
    location:"Christmas Area"
  },
  {
    image:"images/classroom.jpg",
    caption:"nobody ever rings the bell",
    location:"Classroom Area"
  },
  {
    image:"images/commercialofficearea.jpg",
    caption:"still waiting for someone to clock in",
    location:"Commercial Office Area"
  },
  {
    image:"images/conferenceroomarea.jpg",
    caption:"the meeting never started",
    location:"Conference Office Area"
  },
  {
    image:"images/cottageforestarea.jpg",
    caption:"again.",
    location:"Cottage Forest Area"
  },
  {
    image:"images/emptygalleryarea.jpg",
    caption:"...",
    location:"Empty Gallery Area",
    marked: true
  },
  {
    image:"images/householdarea.jpg",
    caption:"just like home",
    location:"Household Area"
  },
  {
    image:"images/laundryroomarea.jpg",
    caption:"3:33 AM",
    location:"Piled Laundry Area"
  },
  {
    image:"images/maintenencearea.jpg",
    caption:"have you tried turning it off and on again?",
    location:"Maintenance Area"
  },
  {
    image:"images/playroomarea.jpg",
    caption:"someone keeps tidying up",
    location:"Playroom Area"
  },
    {
    image:"images/redoutdoorsarea.jpg",
    caption:"the sun hasn't moved in hours",
    location:"Red Outdoors Area"
  },
  {
    image:"images/tiledpoolarea.jpg",
    caption:"lifeguard on break?",
    location:"Tiled Pool Area"
  }
];

initializeWindow("photos");

function addFrame(index){
  var sheet=document.querySelector("#photoWall");
  var photo=photos[index];
  var frame=document.createElement("div");
  frame.className="filmFrame";
  if (photo.marked){
    frame.classList.add("marked");
  }
  frame.innerHTML=
    `<img src="${photo.image}">`+
    `<p>${index+1}</p>`

    frame.addEventListener("click",function(){
      document.querySelector("#photoWall").style.display="none";
      document.querySelector("#viewerImage").src=photo.image;
      document.querySelector("#viewerLocation").textContent=photo.location;
      document.querySelector("#viewerCaption").textContent=photo.caption;
      document.querySelector("#photoViewer").style.display="block";
    })

    sheet.appendChild(frame);
}
for (let i=0; i<photos.length; i++){
  addFrame(i);
}
document.querySelector("#viewerBack").addEventListener("click",function(){
  document.querySelector("#photoViewer").style.display="none";
  document.querySelector("#photoWall").style.display="grid";
});