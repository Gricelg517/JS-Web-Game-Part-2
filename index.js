// Display Inventory
const inventory = newInventory();

// Add items
newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);

// Display Inventory
move(inventory).to(0, 0);

// Display Images
move(newImage('assets/green-character.gif')).to(100, 250);
move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);

//Display Items
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165 , 335);
move(newItem('assets/staff.png')).to(600, 250);
move(newItem('assets/green-character.gif')).to(400, 450);

// Initial Character
const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).movewithArrowKeys(100, 250, handleDirectionChange)

