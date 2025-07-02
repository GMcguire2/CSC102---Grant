const Kris = document.getElementById('kris')

// Determining starting position
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;
let intervalid = null;

const width = 100;
const height = 100;

function movekris(){
xPosition += xSpeed;
yPosition += ySpeed;

// makes you bounce left and right

if (xPosition <= 0 || xPosition + width >= window.innerWidth) {
    xSpeed = -xSpeed;
}

// makes you bounce up and down

if (yPosition <= 0 || yPosition + height >= window.innerHeight) {
        ySpeed = -ySpeed;
    }

    Kris.style.left = xPosition + 'px'
    Kris.style.top = yPosition + 'px'
}
// start button
function start(){
if (!intervalid) {
    intervalid = setInterval (movekris, 10);
} 
}
// stop button
function stop(){
 clearInterval(intervalid);
 intervalid = null;
}