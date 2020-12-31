class Paper {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3
      };
      this.body = Bodies.circle(100, 650, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      
    };
};