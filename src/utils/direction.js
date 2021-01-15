import { DIRECTION } from '../constants/enum';

const Direction = {
  parse: (text) => {
    const foundResult = DIRECTION[text.toUpperCase()];
    if (!foundResult) {
      throw new Error("Given string is not a direction");
    }
    return foundResult;
  },
};

export default Direction;
