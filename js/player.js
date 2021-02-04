var p;

var size;

var heading;

var pVel;

var force;

var boostColor, playerColor;

var touch;

var Score;

var Health;


function updatePlayer() {

    if (keyIsDown(LEFT_ARROW)) {

        heading -= 6;

    }

    if (keyIsDown(RIGHT_ARROW)) {

        heading += 6;

    }

    if (keyIsDown(UP_ARROW)) {

        force = p5.Vector.fromAngle(radians(heading));

        pVel.add(force.mult(0.2));

    }

    if (keyIsDown(DOWN_ARROW)) {

        force = p5.Vector.fromAngle(radians(heading));

        pVel.add(force.mult(-0.2));

    }

    if (p.x > 600) {

        p.x = 683

    }

    if (p.x < 0) {

        p.x = 683

    }

    if (p.y > 600) {

        p.y = 328

    }

    if (p.y < 0) {

        p.y = 328

    }

    pVel.mult(0.978);

    p.add(pVel);

    push();

    translate(p.x, p.y);

    rotate(radians(heading));

    stroke("white")
    fill("blue");
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);

    pop();

    textSize(30);
    text("SCORE: " + Score, 555, 35);

}