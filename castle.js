var Drone = require('drone'); 

function ourCastle() {
    this
        .chkpt('castle-start')
        .makeFort()
        .left(10)
        .fwd(2)
        .makeWall()
        .left(5)
        .back(2)
        .makeFort();
}

function makeFort() {
    this
        .box0(blocks.cobblestone,5,5,5);
}

function makeWall() {
    this
        .box(blocks.cobblestone,10,4,3);
}

function daddyHouse() {
    this.chkpt('house-start')
    
    //make a floor
    this
        .down(1)
        .box(blocks.oak,8,1,8)
        .move('house-start');
    
    // Make the walls
    this
        .box0(blocks.cobblestone,8,3,8)
        .move('house-start');

    
    // Make the roof
    this
        .up(3)
        .prism(blocks.oak,8,8)
        .move('house-start');
    
    //makea door
    this
        .right(3)
        .box(blocks.air,1,2,1)
        .move('house-start');

    // Make a window
    this
        .up(1)
        .fwd(4)
        .turn(1)
        .box(blocks.stained_glass_pane.white,2,1,1)
        .move('house-start');
    
    //put light in
    this
        .right(3)
        .fwd(3)
        .up(3)
        .box(blocks.glowstone,2,1,2)
        .move('house-start');
}

function daddyVillage (houses_per_street, streets_in_village) {
    var house_spacing = 13;
    
    for ( var street = 0; street < streets_in_village; street++) {
        for (var house =0; house < houses_per_street; house++) {
            this.daddyHouse();
            this.left(house_spacing);
        }
     
        this.right(house_spacing * houses_per_street);
        this.back(house_spacing);
    }
}

Drone.extend(daddyHouse);
Drone.extend(daddyVillage);
Drone.extend(ourCastle);
Drone.extend(makeFort);
Drone.extend(makeWall);
