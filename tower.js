var Drone = require('drone'); 

function myTower() {
  this
    .chkpt('tower-start')
    .box0(blocks.oak,5,10,5)
    .right(2)
    .up(1)
    .box(blocks.air,1,2,1)
    .move('tower-start')
    .down(1)
    .box(blocks.cobblestone,5,1,5)
    .move('tower-start')
    .up(10)
    .box0(blocks.glowstone,5,5,5)
    .move('tower-start')
    .up(15)
    .box(blocks.cobblestone,5,1,5)
    .move('tower-start')
    .right(1)



}

Drone.extend(myTower);
