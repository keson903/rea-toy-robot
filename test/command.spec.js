"use strict";

import Robot from '../src/models/robot';
import Table from '../src/models/playground';
import Commands from '../src/utils/Commands';
import {expect} from "chai";

describe('Parse and execute commands', () => {
    describe('Execute Place Command', () => {
        var robot = null;
        beforeEach(() => {
            const table = new Table(5, 5);
            robot = new Robot(table);
            robot.place('1,1,north');
        })

        it('should parse and execute the place command and return true', () => {
            const result = Commands.execute(('place 1,1,north').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the left command and return true', () => {
            const result = Commands.execute(('left').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the right command and return true', () => {
            const result = Commands.execute(('right').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the move command and return true', () => {
            const result = Commands.execute(('move').toUpperCase(), robot);
            expect(result).to.be.true;
        })

        it('should parse and execute the report command and output result', () => {
            const result = Commands.execute(('report').toUpperCase(), robot);
            expect(result).to.have.string('1,1,NORTH');
        })

        it('should parse and execute the command and return false for the invalid command', () => {
            const result = Commands.execute(('pace').toUpperCase(), robot);
            expect(result).to.be.false;
        })

        it('should return false if the place command dont have any parameters', () => {
            const result = Commands.execute(('place').toUpperCase(), robot);
            expect(result).to.be.false;
        })

        it('should return false if the place command dont have correct parameters', () => {
            const result = Commands.execute(('place hi,hello,north').toUpperCase(), robot);
            expect(result).to.be.false;
        })
    })
})
