class Playground {
  constructor(x, y) {
    if (isNaN(+x) || isNaN(+y)) {
      throw new Error("Playground (X,Y) should be number");
    }

    if (+x <= 0 || +y <= 0) {
      throw new Error("Playground (X,Y) should be greater than 0");
    }

    return { x, y };
  }
}

export default Playground;
