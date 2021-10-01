class Stage {
  constructor() {
    this.entities = [];
    this.element = null;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("stage");
    this.element = div;
    return div;
  }
}

// const pacman = new Pacman();
// pacman.move();
