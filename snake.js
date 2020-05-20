class snake{
    constructor(x,y){
        var options={
            friction:1.0

        }
        this.body=Bodies.rectangle(x,y,25,25,options);
        World.add(world,this.body);
    }
   display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("black");
    rect(pos.x, pos.y, 25,25);
   }

} 