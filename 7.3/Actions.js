const Kris = document.getElementById('kris')


// sets the splat to be a thing in the code, which we will use later, as well as sets it to be quieter.
const Splat = new Audio("lancer-splat-sound-effect-made-with-Voicemod.mp3")
Splat.volume = 0.25;

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

// makes you bounce left and right and plays a sound

if (xPosition <= 0 || xPosition + width >= window.innerWidth) {
    xSpeed = -xSpeed;
    Splat.play()
}

// makes you bounce up and down and plays a sound

if (yPosition <= 0 || yPosition + height >= window.innerHeight) {
        ySpeed = -ySpeed;
        Splat.play();
    }

    Kris.style.left = xPosition + 'px'
    Kris.style.top = yPosition + 'px'
}

function start(){
if (!intervalid) {
    intervalid = setInterval (movekris, 10);
} 
}

function stop(){
 clearInterval(intervalid);
 intervalid = null;
}