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

// Message
const msgFontColor = "#FFFFFF";
const msgFontSize = 70 * scaling;
const msgSpacing = (isMobile || isPortrait) ? 5 + scaling * 5 : 4 + scaling * 6;
const msgFont = msgFontSize + "px Verdana";
const msgBackPadding = 5;
const msgBackRadius = 5;
const msgBackWidth = 100;
const msgBackColor = "#222222";

// Control
const controlPadding = 10;
const controlSize = 80;

// Sound
const audioVisibility = "hidden";