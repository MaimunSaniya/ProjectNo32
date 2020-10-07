class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.Visiblity = 255;
    this.image = loadImage("rect.png")
  }

  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else{
      World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image,this.body.position.x,this.body.position.y,30,40);
       pop();
    }  }
    
  score(){
    if(this.Visiblity<0 && this.Visiblity>-10){
      score++;
    }
    
  }
  

        
}
