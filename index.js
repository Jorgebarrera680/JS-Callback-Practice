const inventory = newInventory();


let charCoords = [100, 100, 10]; 


let horizon = 0
if (window.innerHeight>800){
  horizon = window.innerHeight / 2
}
else {
  horizon = window.innerHeight / 1.5
}
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon + 100
let widthOfGrass = window.innerWidth

function tile(ImgAssest, Xpos, Ypos, Zpos, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(ImgAssest, Xpos + w*100, Ypos + h*100, Zpos)
        }
    }
}

function newImage (ImgAssest, Xpos, Ypos, Zpos) {
    let nImg = document.createElement('img')
    nImg.src = ImgAssest
    nImg.style.position = 'fixed'
    nImg.style.left = Xpos +'px'
    nImg.style.bottom = Ypos +'px'
    nImg.style.Zpos = Zpos
    document.body.append(nImg)
    return nImg
}

function newItem (ImgAssest, Xpos, Ypos, Zpos) {
    let nItm = newImage (ImgAssest, Xpos, Ypos, Zpos)
    nItm.addEventListener('dblclick', function(){
        nItm.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = ImgAssest;
        inventory.append(inventoryItem)
    })
    return nItm
}

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    inventory.style.Zpos = '0'
    document.body.append(inventory)
    return inventory
}

function moveChar(Xpos, Ypos, Zpos, cDir){
    charCoords[0] += Xpos 
    charCoords[1] += Ypos
    charCoords[2] += Zpos 
    if (charCoords[0] < 0) {
        charCoords[0] = 0
    } else if (charCoords[0] >= widthOfGrass) {
        charCoords[0] = widthOfGrass - 50
    }
    if (charCoords[1] < 100) {
      charCoords[1] = 100
    } else if (charCoords[1] > heightOfGrass) {
      charCoords[1] = heightOfGrass 
    }
   
    greenCharacter.style.left = charCoords[0]+'px';
    greenCharacter.style.bottom = charCoords[1] +'px';
    greenCharacter.style.Zpos = charCoords[2]
    switch (cDir) {
      case "North":
        greenCharacter.src='assets/green-character/north.gif'
      break;
      
      case "South":
        greenCharacter.src='assets/green-character/south.gif'
      break;
      
      case "East":
        greenCharacter.src='assets/green-character/east.gif'
      break;
      case "West":
        greenCharacter.src='assets/green-character/west.gif'
      break;
      case null:
        greenCharacter.src='assets/green-character/static.gif'
      break;
      default:
        return; 
    }
   
    document.body.append(greenCharacter)
}

tile('assets/sky.png', 0, horizon, 0, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 100, 0, window.innerWidth/100, horizon/100)

const greenCharacter = newImage('assets/green-character/static.gif', charCoords[0], charCoords[1], charCoords[2]) //Set Green Character Object & intial load
newImage('assets/pine-tree.png', 450, 200, 1) 
newImage('assets/tree.png', 200, 300, 1) 
newImage('assets/pillar.png', 350, 100, 1) 
newImage('assets/crate.png', 150, 200, 1) 
newImage('assets/well.png', 500, 450, 1) 

newItem('assets/sword.png', 500, 400, 5)
newItem('assets/shield.png', 200, 200, 5) 
newItem('assets/staff.png', 600, 100, 5) 


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; 
    }
    switch (event.key) {
      case "ArrowDown":
           moveChar(0, -50, 0, 'South') 
        break;
      
        case "S":
          moveChar(0, -50, 0, 'South') 
       break;
       // Code for "s" key press.
        case "s":
          moveChar(0, -50, 0, 'South') 
       break;
      case "ArrowUp":
        moveChar(0, 50, 0, 'North') 
        break;
        case "W":
          moveChar(0, 50, 0, 'North') 
          break;
          case "w":
            moveChar(0, 50, 0, 'North') 
            break;
      case "ArrowLeft":
        moveChar(-50, 0, 0, 'West') 
        break;
        case "A":
          moveChar(-50, 0, 0, 'West') 
          break;
          case "a":
            moveChar(-50, 0, 0, 'West')
            break;
      case "ArrowRight":
        moveChar(50, 0, 0, 'East') 
        break;
        case "D":
         
          moveChar(50, 0, 0, 'East') 
          break;
          case "d":
            moveChar(50, 0, 0, 'East') 
            break;
      default:
        return; 
    }
    event.preventDefault();
  }, true);

  document.addEventListener('keyup',function(event){
     moveChar(0, 0, 0, null)
  })