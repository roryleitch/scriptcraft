exports.mummyHouse = function (droney) {
    if (droney === undefined) {var droney = new Drone(self)}
    droney.chkpt('house-start')
    
    //make a cake
    droney.cylinder(blocks.cake, 2,1)
        .move('house-start');
    
}

exports.mummyVillage = function () {
    var droney = new Drone(self);    
    
    droney.blocktype('Mummy\nloves\nmancub').left(20);
    
    for ( var streets = 0; streets <4; streets++) {
        for (var houses =0; houses <4; houses++) {
            mummyHouse(droney);
            droney.left(13 );
        }
     
        droney.right(52);
        droney.back(13);
    }
}

