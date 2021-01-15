"use strict";

import Robot from '../src/models/robot';
import Table from '../src/models/playground';
import {expect} from "chai";

describe('Creates and Controls Robot', () => {
    describe('Initializes a robot', () => {
        it('should initialize a robot', () => {
            const table = new Table(5, 5);
            const robot = new Robot(table);
            expect(robot).to.be.an('object');
            expect(robot).to.have.property('table');
            expect(robot).to.have.property('position');
            expect(robot.position).to.have.property('x').eq(null);
            expect(robot.position).to.have.property('y').eq(null);
            expect(robot).to.have.property('placed').eq(false);
            expect(robot).to.have.property('direction').eq(null);
        })
    })

    describe('Controls the robot', () => {
        var robot = null;
        beforeEach(() => {
            const table = new Table(5, 5);
            robot = new Robot(table);
            expect(robot.place('1,1,north', robot)).to.be.true;
            
        })

        it('should place robot anywhere on the table again', () => {
            expect(robot.place('2,4,north', robot)).to.be.true;
        })

        it ('should allow robot to move on the table', () => {
            expect(robot.move()).to.be.true;
        })

        it ('should allow robot to turn left on the table', () => {
            expect(robot.turn(true)).to.be.true;
        })

        it ('should allow robot to turn right on the table', () => {
            expect(robot.turn()).to.be.true;
        })

        it ('should print the current robot position', () => {
            expect(robot.report()).to.have.string('1,1,NORTH');
        })
    })

    describe('Robot initialized but not placed on the table', () => {
        var robot = null;
        beforeEach(() => {
            const table = new Table(5, 5);
            robot = new Robot(table);
        })

        it('should return false when move command is executed', () => {
            expect(robot.move()).to.be.false;
        })

        it('should return false when left command is executed', () => {
            expect(robot.turn(true)).to.be.false;
        })

        it('should return false when right command is executed', () => {
            expect(robot.turn()).to.be.false;
        })

        it('should return false when report command is executed', () => {
            expect(robot.report()).to.be.false;
        })
    })

    describe('Robot cannot be placed', () => {
        var robot = null;
        before(() => {
            const table = new Table(5, 5);
            robot = new Robot(table);
        })

        it('shouldn\'t allow robot to be placed out the table', () => {
            expect(robot.place('2,5,north', robot)).to.be.false;
            expect(robot.place('-1,4,north', robot)).to.be.false;
            expect(robot.place('7,3,north', robot)).to.be.false;
            expect(robot.place('-1,6,north', robot)).to.be.false;
        })
    })
})