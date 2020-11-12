class Constraints{
    
    constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
      
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y: this.offsetY},
            stiffness: 0.9,
            length:200
        }  
        this.constraint= Constraint.create(option);
        World.add(world,this.constraint);
      
    }

    display(){
        var pointA=this.constraint.bodyA.position;
        var pointB=this.constraint.bodyB.position;
            
        var AnchorX=pointB.x+this.offsetX
         var AnchorY=pointB.y+this.offsetY 
         fill("pink")
         strokeWeight(3);
         line(pointA.x,pointA.y,AnchorX,AnchorY);
    
      
       
    }
}