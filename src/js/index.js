// // Change between open and closed packman
let mainContainer = document.querySelector(".container");

let pacman = new Pacman();

// mainContainer.appendChild(pacman.render());
// pacman.move();

// APPLES
const apple = new Entity("85px", "85px", "apple");
const apple2 = new Entity("0px", "255px", "apple");
const apple3 = new Entity("935px", "170px", "apple");
const apple4 = new Entity("510px", "255px", "apple");
const apple5 = new Entity("680px", "340px", "apple");

// BOMBS
const bomb = new Entity("170px", "170px", "bomb");
const bomb2 = new Entity("680px", "425px", "bomb");
const bomb3 = new Entity("425px", "170px", "bomb");

// WALLS
const wall = new Entity("255px", "255px", "wall");
const wall1 = new Entity("0px", "85px", "wall");
const wall2 = new Entity("255px", "170px", "wall");
const wall3 = new Entity("765px", "425px", "wall");
const wall4 = new Entity("765px", "340px", "wall");
const wall5 = new Entity("765px", "255px", "wall");
const wall6 = new Entity("680px", "255px", "wall");
const wall7 = new Entity("595px", "255px", "wall");
const wall8 = new Entity("170px", "255px", "wall");
const wall9 = new Entity("170px", "340px", "wall");
const wall10 = new Entity("595px", "0x", "wall");
const wall11 = new Entity("595px", "85px", "wall");

let stage = new Stage();
mainContainer.appendChild(stage.render());

stage.entities.push(pacman);
stage.entities.push(apple);
stage.entities.push(apple2);
stage.entities.push(apple3);
stage.entities.push(apple4);
stage.entities.push(apple5);
stage.entities.push(bomb);
stage.entities.push(bomb2);
stage.entities.push(bomb3);
stage.entities.push(wall);
stage.entities.push(wall1);
stage.entities.push(wall2);
stage.entities.push(wall3);
stage.entities.push(wall4);
stage.entities.push(wall5);
stage.entities.push(wall6);
stage.entities.push(wall7);
stage.entities.push(wall8);
stage.entities.push(wall9);
stage.entities.push(wall10);
stage.entities.push(wall11);

stage.element.appendChild(pacman.render());
pacman.move();

stage.element.appendChild(apple.render());
stage.element.appendChild(apple2.render());
stage.element.appendChild(apple3.render());
stage.element.appendChild(apple4.render());
stage.element.appendChild(apple5.render());
stage.element.appendChild(bomb.render());
stage.element.appendChild(bomb2.render());
stage.element.appendChild(bomb3.render());
stage.element.appendChild(wall.render());
stage.element.appendChild(wall1.render());
stage.element.appendChild(wall2.render());
stage.element.appendChild(wall3.render());
stage.element.appendChild(wall4.render());
stage.element.appendChild(wall5.render());
stage.element.appendChild(wall6.render());
stage.element.appendChild(wall7.render());
stage.element.appendChild(wall8.render());
stage.element.appendChild(wall9.render());
stage.element.appendChild(wall10.render());
stage.element.appendChild(wall11.render());

console.log(stage.entities);
