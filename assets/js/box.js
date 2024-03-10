class Box {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        let options = {
            friction: 0.3,
            restitution: 1.5
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        // blendMode(MULTIPLY);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke( 42,56,220 )
        fill( 255, 189, 51);
        rect(0, 0, this.w, this.h);
        pop();
    }
}