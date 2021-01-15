import { COMMAND } from '../constants/enum';

const validCommands = Object.values(COMMAND);

const Commands = {
  execute: (command, robot) => {
    const [action, position] = command.split(" ");

    if (!validCommands.includes(action)) {
      return false;
    }

    switch (action) {
      case COMMAND.RIGHT: {
        return robot.turn();
      }
      case COMMAND.LEFT: {
        return robot.turn(true);
      }
      case COMMAND.MOVE: {
        return robot.move();
      }
      case COMMAND.PLACE: {
        return position ? robot.place(position) : false;
      }
      case COMMAND.REPORT: {
        return robot.report();
      }
    }
  },
};

export default Commands;
