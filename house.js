exports.myHouse = function (droney) {
    if (droney === undefined) {var droney = new Drone(self)}
    droney.chkpt('house-start')
    //make me a floor
    droney.move('house_start');
    droney.down(1);
    droney.box(blocks.oak,8,1,8);
    droney.up(1);
    // Make the walls
    droney.box0(blocks.cobblestone,8,3,8)
    // Make the roof
    droney.up(3);
    droney.prism(blocks.oak,8,8);
    //makea door
    droney.down(3)
    droney.right(3);
    droney.box(blocks.air,1,2,1);
    // Make a window
    droney.right(4)
    droney.up(1)
    droney.fwd(3);
    droney.turn(1);
    droney.box(blocks.stained_glass_pane.white,2,1,1);
    //put light in
    droney.turn(3);
    droney.back(3);
    droney.left(4);
    droney.fwd(7);
    droney.box(blocks.glowstone,1,1,1);
     // put droney back where he started
    droney.move('house-start');
    //my chest
    droney.right(2);
    droney.fwd(6);
    droney.box(blocks.chest,1,1,1);
    //my bed
    droney.right(4);
    droney.back(1);
    droney.bed(1);
    droney.move('house-start');
    droney.up(1);
    droney.right(4);
    droney.fwd(3);
    droney.turn(3);
    droney.fwd(4);
    droney.box(blocks.stained_glass_pane.white,2,1,1);
    droney.move('house-start')
    //my rood
    
    
        
}

exports.myVillage = function () {
    var droney = new Drone(self);    

    for ( var streets = 0; streets <4; streets++) {
        for (var houses =0; houses <4; houses++) {
            myHouse(droney);
            droney.left(13 );
        }
     
        droney.right(52);
        droney.back(13);
    }
}

