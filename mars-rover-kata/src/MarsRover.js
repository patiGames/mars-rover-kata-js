export default class MarsRover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  get position() {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}
