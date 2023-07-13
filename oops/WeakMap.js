const _radius = new WeakMap();

class Circle {
    constructor(radius){
        _radius.set(this, radius);
    }
    _radius = 5;
    draw(){
        console.log("draw circle +", _radius.get(this));
    }
}

const c = new Circle(4);
c.draw();
console.log(c._radius);
