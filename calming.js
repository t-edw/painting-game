
var pressed = false;
var canvas;
var context;
var source;
var size = 25;
function press(){
	var rand = Math.floor(Math.random()*11);
	pressed = true;
	var sourceimage = document.querySelector('img');
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
	context.clearRect(0,0,500,500);
    var mouseX = 0, mouseY = 0,
	width = 500, height = 500,
    mousedown = false;
    canvas.width = width;
    canvas.height = height;
	rand = ""+rand+"";
	var img = document.getElementById(rand);
	img.style.display="inline-block";
	var pat = context.createPattern(img,"no-repeat");
    context.fillStyle = pat; 
    function draw(ev) {
      if (mousedown&&pressed) {
		var rect = canvas.getBoundingClientRect();
		var x = ev.clientX - rect.left;
		var y = ev.clientY - rect.top;
		context.beginPath();
        context.arc(x,y,size,0,2*Math.PI,false);
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
	canvas.addEventListener('mousedown', function(ev) {
      mousedown = true;
    }, false );
    canvas.addEventListener('mouseout', function(ev) {
      mousedown = false;
    }, false );
  }
function rain(){
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="rain.mp3";
	document.getElementById('backgroundMusic').load();
	document.getElementById('backgroundMusic').play();
}
function ocean() {
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="ocean.mp3";
	document.getElementById('backgroundMusic').load();
	document.getElementById('backgroundMusic').play();
}
function classical() {
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="classical.mp3";
	document.getElementById('backgroundMusic').load();
	document.getElementById('backgroundMusic').play();
}
function forest() {
	document.getElementById('backgroundMusic').pause();
	document.getElementById('source').src="forest.mp3";
	document.getElementById('backgroundMusic').load();
	document.getElementById('backgroundMusic').play();
}
function changeImage(rand) {
	if(rand==0)
		return "space.jpg";
	if(rand==1)
		return "stars.jpg";
	if(rand==2)
		return "succulents.jpg";
	if(rand==3)
		return "purple.jpg";
	if(rand==4)
		return "pinterest.jpg";
	if(rand==5)
		return "monkey.jpg";
	if(rand==6)
		return "monkeys.jpg";
	if(rand==7)
		return "puppies.jpg";
	if(rand==8)
		return "puppies2.jpg";
	if(rand==9)
		return "beach.jpg";
}
function stopMusic(){
	document.getElementById('backgroundMusic').pause();
}
function small(){
	size=15;
}
function medium(){
	size=25;
}
function large(){
	size=45;
}
function changeSize(){
	size=document.getElementById("rng").valueAsNumber;
}

	
// auto change image when compelte?
// more precise instructions
// making sure you can reach all edges
// chasing something?
