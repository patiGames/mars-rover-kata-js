import { DIRECTIONS } from './DIRECTIONS';

export default class Rover {
  constructor(x, y, directionId) {
    this.x = x;
    this.y = y;
    this.direction = new DIRECTIONS().getDirectionBy(directionId);
  }

  get position() {
    return `${this.x} ${this.y} ${this.direction.id}`;
  }

  implement(commands) {
    for (let command of commands) {
      if (command === 'r') this.turnRight();
      else if (command === 'l') this.turnLeft();
      else if (command === 'b') this.y--;
      else this.moveForward();
    }
    return this.position;
  }

  moveForward() {
    this[this.direction.propertyAxis] =
      this[this.direction.propertyAxis] + this.direction.forwardAxis;
  }

  turnRight() {
    this.direction = this.direction.right;
  }

  turnLeft() {
    this.direction = this.direction.left;
  }
}
