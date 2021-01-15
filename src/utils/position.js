import { DIRECTION } from '../constants/enum';

export const nextPosition = ({ position, direction }) => {
  const { x, y } = position;

  switch (direction) {
    case DIRECTION.EAST:
      return { x: x + 1, y };

    case DIRECTION.WEST:
      return { x: x - 1, y };

    case DIRECTION.NORTH:
      return { x, y: y + 1 };

    case DIRECTION.SOUTH:
      return { x, y: y - 1 };
  }

  return { x, y };
};

export const validateNextPosition = ({ x, y }, table) => {
  return x <= table.x - 1 && x >= 0 && y <= table.y - 1 && y >= 0;
};
