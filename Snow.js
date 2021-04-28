class Snow{
    constructor(x,y,r){

        var options ={

            friction:1,
            density :3,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
         
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,10,10,this.r);
        
        pop();



    }
}