class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,200,height,angle);
    this.image = loadImage("sprites/tree.png");
    Matter.Body.setAngle(this.body, angle);
  }
}