const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isPortrait = window.innerWidth < window.innerHeight;

const scaling = 1;

// Body
const bodyMargin = "0";
const bodyBackColor = "#1F1F1F";
const bodyFontColor = "#FFFFFF";
const bodyFont = "15px Segoe UI";

// Canvas
const canvasBorderRadius = 0;
const canvasPosition = "fixed";
const canvasOpacity = 0.8;

// Message
const msgFontColor = "#FFFFFF";
const msgFontSize = isMobile || isPortrait ? 28 : 60;
const msgFont = msgFontSize + "px Segoe UI";

// Control
const controlPadding = 10;
const controlSize = 80;

// Sound
const audioVisibility = "hidden";