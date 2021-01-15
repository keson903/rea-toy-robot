import prompt from 'prompt';

import Commands from './utils/commands';
import { COMMAND } from './constants/enum';
import Playground from './models/playground';
import Robot from './models/robot';


const table = new Playground(5, 5);
const robot = new Robot(table);

console.log(robot);

function input() {
  prompt.get(["command"], (err, { command }) => {
    if (err) {
      throw err;
    }

    const formatted = `${command}`.toUpperCase();

    if (formatted === COMMAND.EXIT) {
      return;
    }

    const output = Commands.execute(formatted, robot);
    if (typeof output !== "boolean") {
      console.log(output);
    }
    input();
  });
}

console.log("EXIT: terminate program");
prompt.start();
input();
