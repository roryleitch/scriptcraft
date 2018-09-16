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
    .box(blocks.cobblestone,3,1,3)
    .move(`tower-start`)

}

Drone.extend(myTower);
