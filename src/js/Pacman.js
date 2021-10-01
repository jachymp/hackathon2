class Pacman {
  constructor() {
    this.mouth = true;
    this.ypos = 0;
    this.xpos = 0;
    this.element = null;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "entity entity--pac pacboy-active-light";
    return this.element;
  }

  move() {
    // this.element = document.querySelector(".entity--pac");
    const packmanLight = document.querySelector(".pacboy-active-light");
    this.element.style.top = this.xpos + "px";
    this.element.style.left = this.ypos + "px";
    document.addEventListener("keydown", (event) => {
      console.log("FIRE");
      this.mouth = !this.mouth;
      if (event.code === "ArrowRight") {
        this.xpos += 85;
        this.element.style.left = this.xpos + "px";
        if (this.mouth === true) {
          packmanLight.style.backgroundPositionX = "85px";
        } else {
          packmanLight.style.backgroundPositionX = "0px";
        }
        packmanLight.style.backgroundPositionY = "0px";
      }
      if (event.code === "ArrowLeft") {
        this.xpos -= 85;
        this.element.style.left = this.xpos + "px";
        if (this.mouth === true) {
          packmanLight.style.backgroundPositionX = "0px";
        } else {
          packmanLight.style.backgroundPositionX = "85px";
        }
        packmanLight.style.backgroundPositionY = "-85px";
      }
      if (event.code === "ArrowUp") {
        this.ypos -= 85;
        this.element.style.top = this.ypos + "px";
        if (this.mouth === true) {
          packmanLight.style.backgroundPositionX = "0px";
        } else {
          packmanLight.style.backgroundPositionX = "85px";
        }
        packmanLight.style.backgroundPositionY = "-255px";
      }
      if (event.code === "ArrowDown") {
        this.ypos += 85;
        this.element.style.top = this.ypos + "px";
        if (this.mouth === true) {
          packmanLight.style.backgroundPositionX = "0px";
        } else {
          packmanLight.style.backgroundPositionX = "85px";
        }
        packmanLight.style.backgroundPositionY = "-170px";
      }
    });
  }
}
