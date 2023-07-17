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
character.style.position = 'fixed'
let direction = null;
move(character).to(100, 250)
let x = 100;
let y = 250;

setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)
                                  
document.addEventListener('keydown', function(e){
    if (e.repeat) return;
                    
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
});

