// // Change between open and closed packman
let mainContainer = document.querySelector(".container");

// let pacman = new Pacman();
// pacman.move();

let stage = new Stage();
mainContainer.appendChild(stage.render());

// // variables
// // let side = "left";
// let mount = true;
// let ypos = 200;
// let xpos = 200;

// // Selectors
// // Pacman Movement & Functionality
// const entity = document.querySelector(".entity");
// const packmanLight = document.querySelector(".pacboy-active-light");
// entity.style.top = xpos + "px";
// entity.style.left = ypos + "px";
// document.addEventListener("keydown", (event) => {
//   mount = !mount;
//   if (event.code === "ArrowRight") {
//     xpos += 85;
//     entity.style.left = xpos + "px";
//     if (mount === true) {
//       packmanLight.style.backgroundPositionX = "85px";
//     } else {
//       packmanLight.style.backgroundPositionX = "0px";
//     }
//     packmanLight.style.backgroundPositionY = "0px";
//   }
//   if (event.code === "ArrowLeft") {
//     xpos -= 85;
//     entity.style.left = xpos + "px";
//     if (mount === true) {
//       packmanLight.style.backgroundPositionX = "0px";
//     } else {
//       packmanLight.style.backgroundPositionX = "85px";
//     }
//     packmanLight.style.backgroundPositionY = "-85px";
//   }
//   if (event.code === "ArrowUp") {
//     ypos -= 85;
//     entity.style.top = ypos + "px";
//     if (mount === true) {
//       packmanLight.style.backgroundPositionX = "0px";
//     } else {
//       packmanLight.style.backgroundPositionX = "85px";
//     }
//     packmanLight.style.backgroundPositionY = "-255px";
//   }
//   if (event.code === "ArrowDown") {
//     ypos += 85;
//     entity.style.top = ypos + "px";
//     if (mount === true) {
//       packmanLight.style.backgroundPositionX = "0px";
//     } else {
//       packmanLight.style.backgroundPositionX = "85px";
//     }
//     packmanLight.style.backgroundPositionY = "-170px";
//   }
// });
