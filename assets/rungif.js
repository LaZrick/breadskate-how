var played = false;
var redirect = false;

function playgif() {
  if(!played){
  
  
  var audio = new Audio('./assets/breadskatehowgif.mp3');
  audio.play();
  
  played = true;
  delayImage();
  delayRedirect();
  }
  if(redirect)
  {
	  window.open('https://store.steampowered.com/app/1677720/BREADSKATE/', '_blank');
  }
}

function delayRedirect () {
	setTimeout( function() { redirect = true; }, 10000 );
}
function delayImage(){
	setTimeout( function() {
	let img = document.getElementById("how");
    img.src = './assets/breadskatehow.gif';
	}, 500);
}