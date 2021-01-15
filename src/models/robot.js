import Place from "../utils/place";
import Direction from "../utils/direction";
import { DIRECTIONS } from "../constants/enum";
import { nextPosition, validateNextPosition } from "../utils/position";

class Robot {
  placed = false;
  position = { x: null, y: null };
  direction = null;
  table = null;

  constructor(table) {
    this.table = table;
    return this;
  }

  move() {
    const { placed, position, table } = this;
    if (!placed) {
      return false;
    }

    const { x, y } = nextPosition(this);
    if (!validateNextPosition({ x, y }, table)) {
      return false;
    }

    position.x = x;
    position.y = y;
    return true;
  }

  turn(isLeft) {
    const { placed, direction } = this;
    if (!placed) {
      return false;
    }

    const max = DIRECTIONS.length - 1;
    const min = 0;

    const result = DIRECTIONS.indexOf(direction);
    const nextIndex = isLeft
      ? result === min ? max : result - 1
      : result === max ? min : result + 1;

    this.direction = DIRECTIONS[nextIndex];
    return true;
  }

  place(command) {
    const [x, y, direction] = Place.parse(command);

    if (!validateNextPosition({ x, y }, this.table)) {
      return false;
    }

    this.position.x = x;
    this.position.y = y;
    this.direction = Direction.parse(direction);
    this.placed = true;
    return true;
  }

  report() {
    const { placed, position, direction } = this;
    if (!placed) {
      return false;
    }

    const { x, y } = position;
    return [x, y, direction].join(",");
  }
}

export default Robot;
