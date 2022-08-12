var played = false;
var redirect = false;

function playgif() {
  if(!played){
  let img = document.getElementById("how");
  img.src = './assets/breadskatehow.gif';
  
  var audio = new Audio('./assets/breadskatehowgif.mp3');
  audio.play();
  
  played = true;
  delay();
  }
  if(redirect)
  {
	  window.open('https://store.steampowered.com/app/1677720/BREADSKATE/', '_blank');
  }
}

function delay () {
	setTimeout( function() { redirect = true; }, 10000 );
}