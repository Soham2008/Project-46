function setup() {

    createCanvas(1365, 655);

    p = createVector(width / 2, height / 2)

    pVel = createVector(0, 0);

    force = createVector(0, 0);

    size = 10;

    heading = 0;

    Score = 0;

    bb = [];

    bbVel = [];
    
    bbSize = 25;

    for (var i = 0; i < 5; i++) {

        bb.push(createVector(random(0, width), random(0, height)));

        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));

    }

}


function draw() {

    background(200);

    strokeWeight(3)
    stroke("darkviolet")
    fill("magenta")
    textSize(25);
    text("Use the arrows to rotate the player", 450, 630);

    text("Press SPACE to shoot", 510, 580);

    updatePlayer();
    updateBubbles();
    updateLasers();

}