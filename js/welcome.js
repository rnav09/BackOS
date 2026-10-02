var welcomeScreen=document.querySelector("#welcome")
var welcomeScreenOpen=document.querySelector("#welcomeopen")

var slides=[
  {
    image:"images/windows_xp.jpg",
    caption:"Level 287-'Windows XP'"
  },
  {
    image: "images/backrooms_slideshow1.jpg",
    caption: "Level 0-'The Lobby'"
  },
    {
    image: "images/backrooms_slideshow2.jpg",
    caption: "Level 188-'The Windows'"
  },
  {
    image: "images/backrooms_slideshow3.jpg",
    caption: "Level 94-'Motion'"
  },
  {
    image: "images/backrooms_slideshow4.jpg",
    caption: "Level 33-'Dead Mall'"
  },
  {
    image: "images/backrooms_slideshow5.jpg",
    caption: "Level 1-'The Habitable Zone'"
  },
  {
    image: "images/backrooms_slideshow6.jpg",
    caption: "Level 3-'Electrical Station'"
  }
];
var currentSlide=0;


initializeWindow("welcome");
welcomeScreenOpen.addEventListener("click",function(){
  openWindow(welcomeScreen);
})

setInterval(function(){
  currentSlide++;
  if (currentSlide==slides.length){
    currentSlide=0;
  }
  document.querySelector("#welcomeSlideshow").src=slides[currentSlide].image;
  document.querySelector("#welcomeSlideshowCaption").textContent=slides[currentSlide].caption;
},3000);