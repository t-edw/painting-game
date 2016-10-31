var pressed = false;
var canvas;
var context;
window.addEventListener('load', function(ev) {
    var sourceimage = document.querySelector('img');
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    var mouseX = 0, mouseY = 0,
        width = 500, height = 500,
        mousedown = false;
    canvas.width = width;
    canvas.height = height;
	var img = document.getElementById("flowers");
	var pat = context.createPattern(img,"no-repeat");
    context.fillStyle = pat; 
    function draw(ev) {
      if (mousedown&&pressed) {
        var x = ev.layerX;
        var y = ev.layerY;
        x = (Math.ceil(x / 10) * 10) - 10;
        y = (Math.ceil(y / 5) * 5) - 5;
		context.beginPath();
        context.arc(x,y,30,0,2*Math.PI,false);
		context.fill();
		context.closePath();
      }
    }
    canvas.addEventListener('mouseover', function(ev) {
      document.body.classList.add('painted');
    }, false);
    canvas.addEventListener('mousemove', draw, false);
    canvas.addEventListener('mouseenter', function(ev) {
      mousedown = true;
    }, false );
    canvas.addEventListener('mouseout', function(ev) {
      mouseover = false;
    }, false );
  } ,false);
 function press(){
	  pressed = true;
  }
 function resetCan(){
	pressed = false;
	context.clearRect(0,0,500,500);
 }
 function stop() {
	 pressed=false;
 }
function rain(){
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="rain.mp3";
	document.getElementById('backgroundMusic').play();
}
function ocean() {
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="ocean.mp3";
	document.getElementById('backgroundMusic').play();
}
function classical() {
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="classical.mp3";
	document.getElementById('backgroundMusic').play();
}
function forest() {
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="forest.mp3";
	document.getElementById('backgroundMusic').play();
}
