class Stage {
  constructor() {
    this.entities = [];
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("stage");
    return div;
  }
}

// const pacman = new Pacman();
// pacman.move();
