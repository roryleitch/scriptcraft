var Drone = require('drone'); 

function igloo() {
  //dome
this
    .cylinder(blocks.snow,25,1)
    .up(5)
    .sphere(blocks.glowstone,5,5);

    
}

Drone.extend(igloo);