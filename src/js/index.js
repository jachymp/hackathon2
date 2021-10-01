// Change between open and closed packman

// variables
// let side = "left";
let mount = true;
let ypos = 200;
let xpos = 200;

// Selectors
const entity = document.querySelector(".entity");
const packmanLight = document.querySelector(".pacboy-active-light");
entity.style.top = xpos + "px";
entity.style.left = ypos + "px";
document.addEventListener("keydown", (event) => {
  mount = !mount;
  if (event.code === "ArrowRight") {
    xpos += 85;
    entity.style.left = xpos + "px";
    if (mount === true) {
      packmanLight.style.backgroundPositionX = "85px";
    } else {
      packmanLight.style.backgroundPositionX = "0px";
    }
    packmanLight.style.backgroundPositionY = "0px";
  }
  if (event.code === "ArrowLeft") {
    xpos -= 85;
    entity.style.left = xpos + "px";
    if (mount === true) {
      packmanLight.style.backgroundPositionX = "0px";
    } else {
      packmanLight.style.backgroundPositionX = "85px";
    }
    packmanLight.style.backgroundPositionY = "-85px";
  }
  if (event.code === "ArrowUp") {
    ypos -= 85;
    entity.style.top = ypos + "px";
    if (mount === true) {
      packmanLight.style.backgroundPositionX = "0px";
    } else {
      packmanLight.style.backgroundPositionX = "85px";
    }
    packmanLight.style.backgroundPositionY = "-255px";
  }
  if (event.code === "ArrowDown") {
    ypos += 85;
    entity.style.top = ypos + "px";
    if (mount === true) {
      packmanLight.style.backgroundPositionX = "0px";
    } else {
      packmanLight.style.backgroundPositionX = "85px";
    }
    packmanLight.style.backgroundPositionY = "-170px";
  }

  // entity.style.left = xpos + tile_size + "px";
  // tile_size += 85;
  //   } else if (event.code === "ArrowLeft" && mount == true) {
  //     packmanLight.style.backgroundPositionX = "0px";
  //     packmanLight.style.backgroundPositionY = "-85px";
  //     mount = false;
  //   entity.style.left = xpos + tile_size + "px";
  //   tile_size -= 85;
  //   } else if (event.code === "ArrowLeft" && mount == false) {
  //     packmanLight.style.backgroundPositionX = "0px";
  //     packmanLight.style.backgroundPositionY = "-85px";
  //     mount = false;
  //   }

  //   } else if (event.code === "ArrowUp") {
  //     packmanLight.style.backgroundPositionY = "bottom";
  //     side = "down";
  //     entity.style.top = ypos + tile_size + "px";
  //     tile_size -= 85;
  //   } else if (event.code === "ArrowDown") {
  //     packmanLight.style.backgroundPositionY = "-170px";
  //     side = "up";
  //     entity.style.top = ypos + tile_size + "px";
  //     tile_size += 85;
  //   }
});
