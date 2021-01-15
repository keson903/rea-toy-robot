"use strict";

import Robot from "../src/models/robot";
import Table from "../src/models/playground";
import { expect } from "chai";

describe("Robot on playground", () => {
  var robot = null;
  beforeEach(() => {
    const table = new Table(5, 5);
    robot = new Robot(table);
    expect(robot.place("3,3,north")).to.be.true;
  });

  it("shouldn't fall from top left", () => {
    expect(robot.place("0,4,north")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("0,4,NORTH");

    expect(robot.place("0,4,west")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("0,4,WEST");
  });

  it("shouldn't fall from top right", () => {
    expect(robot.place("4,4,north")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("4,4,NORTH");

    expect(robot.place("4,4,east")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("4,4,EAST");
  });

  it("shouldn't fall from bottom left", () => {
    expect(robot.place("0,0,west")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("0,0,WEST");

    expect(robot.place("0,0,south")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("0,0,SOUTH");
  });

  it("shouldn't fall from bottom right", () => {
    expect(robot.place("4,0,east")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("4,0,EAST");

    expect(robot.place("4,0,south")).to.be.true;
    expect(robot.move()).to.be.false;

    expect(robot.report()).to.have.string("4,0,SOUTH");
  });
});
