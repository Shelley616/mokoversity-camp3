var gameModule=(function(){
	
	var timeoutVar,
		counter = 0;

function touchEvent(evt) {
	var x = evt.clientX,
		y = evt.clientY;

	console.log("Clicked:" + x + "," + y)
}

function start(){
	document.getElementById("main").addEventListener("click",touchEvent,false);
	startGame();
}
	
function startGame(){
		var canvas = document.getElementById('game');
		var ctx = canvas.getContext('2d');
		var ballX = Math.floor(Math.random()* 300);
		var ballY = Math.floor(Math.random()* 500);
		var ballR = Math.floor(Math.random()* 100);

canvas.width = 480;
canvas.height = 320;

ctx.fillstyle = 'black';
ctx.beginPath();
ctx.arc(ballX,ballY,ballR,0,Math.PI * 2, true);
ctx.fill();

	if (counter >= 10) {
	
	gameOver();

	}else{
		timeoutVar = setTimeout(start,1000);
		counter = counter + 1
	}
	
}
	function gameOver() {
		console.log("counter: " + counter);
	}

return{
	start:start
}
}) ();

gameModule.start(); 