class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/boy.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
    this.sling.bodyA = body;
    }
    display(){
        image(this.sling1,200,75,200,200);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48,22,8);
            if(pointA.x < 220){

                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x+25, pointB.y + 75);

            }else{

                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x+25, pointB.y + 75);

            }


            pop();
        }
    }

}
