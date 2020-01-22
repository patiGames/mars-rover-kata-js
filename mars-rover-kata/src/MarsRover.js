export default class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  get position() {
    return `${this.x} ${this.y} ${this.direction}`;
  }

  implement(commands) {
    for (let command of commands) {
      if (command === 'r') this.turnRight();
      else if (command === 'b') this.y--;
      else this.y++;
    }
    return this.position;
  }

  turnRight() {
    if (this.direction === 'S') this.direction = 'W';
    else if (this.direction === 'E') this.direction = 'S';
    else this.direction = 'E';
  }
}
