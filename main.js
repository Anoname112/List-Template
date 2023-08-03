var canvas;
var ctx;
var hidden;
var left;
var right;

var listname = 'JRPG Main Battle Theme';
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
	const ratio = window.devicePixelRatio;
	canvas = getElement("myCanvas");
	canvas.addEventListener("touchstart", onMouseDown, false);
	canvas.addEventListener("touchend", onMouseUp, false);
	//canvas.onmousedown = onMouseDown;
	//canvas.onmouseup = onMouseUp;
	canvas.style.position = canvasPosition;
	canvas.style.borderRadius = canvasBorderRadius;
	canvas.width = window.innerWidth * ratio;
	canvas.height = window.innerHeight * ratio;
	canvas.style.width = window.innerWidth + 'px';
	canvas.style.height = window.innerHeight + 'px';
	canvas.getContext("2d").scale(ratio, ratio)
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
	left.style.top = (window.innerHeight - left.clientHeight) / 2;
	left.style.left = '5px';
	left.onclick = back;
	
	right = getElement('right');
	right.style.position = 'absolute';
	right.style.top = (window.innerHeight - right.clientHeight) / 2;
	right.style.right = '5px';
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
	//var controlCanvasX = e.touches[0].pageX;
	//var controlCanvasY = e.touches[0].pageY;
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
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	
	// Draw background
	if (current >= 0) {
		var w = images[current].width * (window.innerHeight / images[current].height);
		var x = (window.innerWidth - w) / 2;
		drawImage(images[current], x, 0, w, window.innerHeight);
		
		ctx.globalAlpha = 0.8;
		fillRect(0, 0, window.innerWidth, window.innerHeight, '#333');
		ctx.globalAlpha = 1.0;
		
		drawMessage(list[current]['title'], window.innerWidth / 2, window.innerHeight / 2, 0, 0, 'center');
		drawMessage(list.length - current, 40, 40, 0, 0, 'center');
	}
	else drawMessage(listname, window.innerWidth / 2, window.innerHeight / 2, 0, 0, 'center');
}
