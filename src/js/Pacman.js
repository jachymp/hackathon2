class Pacman {
  constructor() {
    this.mount = true;
    this.ypos = 200;
    this.xpos = 200;
  }

  move() {
    const entity = document.querySelector(".entity");
    const packmanLight = document.querySelector(".pacboy-active-light");
    entity.style.top = this.xpos + "px";
    entity.style.left = this.ypos + "px";
    document.addEventListener("keydown", (event) => {
      this.mount = !this.mount;
      if (event.code === "ArrowRight") {
        this.xpos += 85;
        entity.style.left = this.xpos + "px";
        if (this.mount === true) {
          packmanLight.style.backgroundPositionX = "85px";
        } else {
          packmanLight.style.backgroundPositionX = "0px";
        }
        packmanLight.style.backgroundPositionY = "0px";
      }
      if (event.code === "ArrowLeft") {
        this.xpos -= 85;
        entity.style.left = this.xpos + "px";
        if (this.mount === true) {
          packmanLight.style.backgroundPositionX = "0px";
        } else {
          packmanLight.style.backgroundPositionX = "85px";
        }
        packmanLight.style.backgroundPositionY = "-85px";
      }
      if (event.code === "ArrowUp") {
        this.ypos -= 85;
        entity.style.top = this.ypos + "px";
        if (this.mount === true) {
          packmanLight.style.backgroundPositionX = "0px";
        } else {
          packmanLight.style.backgroundPositionX = "85px";
        }
        packmanLight.style.backgroundPositionY = "-255px";
      }
      if (event.code === "ArrowDown") {
        this.ypos += 85;
        entity.style.top = this.ypos + "px";
        if (this.mount === true) {
          packmanLight.style.backgroundPositionX = "0px";
        } else {
          packmanLight.style.backgroundPositionX = "85px";
        }
        packmanLight.style.backgroundPositionY = "-170px";
      }
    });
  }
}
