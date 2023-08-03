var canvas;
var ctx;
var hidden;
var left;
var right;

var listname = 'JRPG Battle Theme';
var list = [
	{
		'title' : 'Chrono Trigger',
		'image' : 'resources/0.png',
		'sound' : 'resources/0.mp3'
	} , {
		'title' : 'Final Fantasy X',
		'image' : 'resources/1.png',
		'sound' : 'resources/1.mp3'
	} , {
		'title' : 'Final Fantasy VII',
		'image' : 'resources/2.png',
		'sound' : 'resources/2.mp3'
	}
];

var images = [];
var sounds = [];

var current = -1;

window.onload = function () {
	window.oncontextmenu = onContextMenu;
	window.onkeydown = onKeyDown;
	window.onkeyup = onKeyUp;
	
	initDocument();
	
	draw();
}

function initDocument () {
	// Prepare body
	document.body.style.margin = bodyMargin;
	document.body.style.background = bodyBackColor;
	document.body.style.color = bodyFontColor;
	document.body.style.font = bodyFont;
	
	// Prepare canvas
	canvas = getElement("myCanvas");
	canvas.addEventListener("touchstart", onMouseDown, false);
	canvas.addEventListener("touchend", onMouseUp, false);
	//canvas.onmousedown = onMouseDown;
	//canvas.onmouseup = onMouseUp;
	canvas.style.position = canvasPosition;
	canvas.style.borderRadius = canvasBorderRadius;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	
	// Prepare hidden area
	hidden = getElement("hidden");
	hidden.style.visibility = "hidden";
	
	for (var i = 0; i < list.length; i++) {
		// Prepare images
		newImg(list[i]['image']);
		
		// Prepare sound
		hidden.innerHTML += '<audio id="sound' + i + '"><source src="' + list[i]['sound'] + '" /></audio>';
		var sound = getElement('sound' + i); 
		sound.style.visibility = audioVisibility;
		sound.addEventListener('ended', function () {
			this.currentTime = 0;
			this.play();
		}, false);
		sounds.push(sound);
	}
	
	left = getElement('left');
	left.style.position = 'absolute';
	left.style.top = (canvas.height - left.clientHeight) / 2;
	left.style.left = '2px';
	left.onclick = back;
	
	right = getElement('right');
	right.style.position = 'absolute';
	right.style.top = (canvas.height - right.clientHeight) / 2;
	right.style.right = '2px';
	right.onclick = next;
}

function onContextMenu (e) {
	e.preventDefault();
}

function onKeyDown (e) {
	var key = e.keyCode;
	switch (key) {
		case 13:	// Enter
		case 32:	// Space
		case 90:	// Z
			break;
		case 37:	// Left
			break;
		case 39:	// Right
			break;
		case 67:	// C
			break;
		case 88:	// X
			break;
		default:
			break;
	}
}

function onKeyUp (e) {
	var key = e.keyCode;
	switch (key) {
		case 13:	// Enter
		case 32:	// Space
		case 90:	// Z
			break;
		case 37:	// Left
			break;
		case 39:	// Right
			break;
		case 67:	// C
			break;
		case 88:	// X
			break;
		default:
			break;
	}
}

function onMouseDown (e) {
	//var controlCanvasX = e.touches[0].pageX
	//var controlCanvasY = e.touches[0].pageY
}

function onMouseUp (e) {
	
}

function back () {
	if (current >= 0) {
		stopAudio(sounds[current]);
		
		current--;
		draw();
		playAudio(sounds[current]);
	}
}

function next () {
	if (current < list.length - 1) {
		if (current >= 0) stopAudio(sounds[current]);
		
		current++;
		draw();
		playAudio(sounds[current]);
	}
}

function draw () {
	// Invalidate
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// Draw background
	if (current >= 0) {
		drawImage(images[current], 0, 0, canvas.width, canvas.height);
		
		ctx.globalAlpha = 0.5;
		fillRect(0, 0, canvas.width, canvas.height, '#333');
		ctx.globalAlpha = 1.0;
		
		drawMessage(list[current]['title'], canvas.width / 2, canvas.height / 2, 0, 0, 'center');
		
	}
	else drawMessage(listname, canvas.width / 2, canvas.height / 2, 0, 0, 'center');
}
