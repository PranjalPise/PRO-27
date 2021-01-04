

class Rope {
    constructor(bodyA, pointB ){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 300,
        }
        this.string= Constraint.create(options);
        World.add(world, this.string);
        this.pointB=pointB;
    }

    display(){
        if(this.string.bodyA){

        
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
