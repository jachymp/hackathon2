class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.element = null;
  }

  render() {
    this.element = document.createElement("div");
    if (this.type == "apple") {
      this.element.classList = "entity entity--apple";
    } else if (this.type == "bomb") {
      this.element.classList = "entity entity--bomb";
    } else if (this.type == "wall") {
      this.element.classList = "entity entity--wall";
    }

    this.element.style.left = this.x;
    this.element.style.top = this.y;

    return this.element;
  }
}

//   appleSel.style.backgroundPositionX = "425px";
