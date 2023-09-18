var played = false;
var redirect = false;

function playgif() {
  if(!played){
  
  
  var audio = new Audio('./assets/misc/breadskatehowgif.mp3');
  audio.play();
  
  played = true;
  delayImage();
  delayRedirect();
  }
  if(redirect)
  {
	  toggleLinks();
  }
}

function delayRedirect () {
	setTimeout( function() { redirect = true; }, 10000 );
}
function delayImage(){
	setTimeout( function() {
	let img = document.getElementById("how");
    img.src = '../assets/img/breadskatehow.gif';
	}, 500);
}

var areEnabled = false;
function toggleLinks(){
    var anchors = document.getElementsByClassName('howlink');
    for(var i=0; i < anchors.length; i++)
        anchors[i].onclick = (areEnabled) ? null : function(e){ return false };
    areEnabled = !areEnabled;
};