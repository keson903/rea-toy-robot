"use strict";

import Direction from "../src/utils/direction";
import {DIRECTION} from "../src/constants/enum";
import {expect} from "chai";

describe("Parsing of Direction", () => {
  it("should parse EAST, WEST, NORTH, SOUTH correctly case-insensetively", () => {
    expect(Direction.parse("east")).to.be.eq(DIRECTION.EAST);
    expect(Direction.parse("EAST")).to.be.eq(DIRECTION.EAST);
    expect(Direction.parse("west")).to.be.eq(DIRECTION.WEST);
    expect(Direction.parse("WeSt")).to.be.eq(DIRECTION.WEST);
    expect(Direction.parse("south")).to.be.eq(DIRECTION.SOUTH);
    expect(Direction.parse("sOuTh")).to.be.eq(DIRECTION.SOUTH);
    expect(Direction.parse("noRTH")).to.be.eq(DIRECTION.NORTH);
    expect(Direction.parse("North")).to.be.eq(DIRECTION.NORTH);
  });

  it("shouldn't parse other strings to form direction", () => {
    expect(() => {
      Direction.parse("Bogus");
    }).to.throw("Given string is not a direction");

    expect(() => {
      Direction.parse("nort");
    }).to.throw("Given string is not a direction");

    expect(() => {
      Direction.parse("hello");
    }).to.throw("Given string is not a direction");
  });
});
