// Coding Train / Daniel Shiffman
// 15.7 Matter.js tutorial Basic Implemenation

// Youtube: https://www.youtube.com/watch?v=urR596FsU68

// Note that the syntax in the sketch has been updated. Refer to NOC Chapter 6

// let Engine = Matter.Engine,
//     World = Matter.World,
//     Bodies = Matter.Bodies;
    
const { Engine, World, Bodies, Composite } = Matter;

let engine;
let world;
let boxes = [];
let ground;
let textContainer;
let offsetX, offsetY;
// let lastClickTime = 0;
// const throttleInterval = 2000; // Throttle interval in milliseconds

// let imagesContainer;

function setup() {
    let mycanvas = createCanvas(window.innerWidth, window.innerHeight,  WEBGL);
    offsetX = width / 2; // Calculate offset for x-coordinate
    offsetY = height / 2; // Calculate offset for y-coordinate
    textContainer = document.getElementById('mainBody');
//  imagesContainer =  document.getElementById('image1');;

    mycanvas.parent('canvas2');
    // create an engine
    engine = Engine.create();
    world = engine.world;
    // Engine.run is deprecated
    ground = new Boundary(0, (height/1.7), width, 5);
    Composite.add(world, ground);
  
    

}
    
function mousePressed() {
    // let now = millis(); 
    // if (now - lastClickTime > throttleInterval) { // Check if enough time has passed since last click
    //     lastClickTime = now; // Update last click time
    let x = mouseX - offsetX; // Adjust mouse x-coordinate
    let y = mouseY - offsetY; // Adjust mouse y-coordinate
    boxes.push(new Box(x, y, random(100, 300), random(100,300)));
// }
}

function draw() {
    background(255,255,255);
    Engine.update(engine);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    ground.show();

    push();
//   blendMode(MULTIPLY);
  fill(0); // Adjust fill color for desired text effect
  textContainer.style.setProperty('mix-blend-mode', 'difference'); 
//   imagesContainer.style.setProperty('mix-blend-mode', 'normal'); // Set blending mode for element
  // Set blending mode for element
  pop();

 
}
 function windowResized() { 
    resizeCanvas(windowWidth, windowHeight);
}