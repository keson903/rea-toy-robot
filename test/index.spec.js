"use strict";

import Robot from '../src/models/robot';
import Table from '../src/models/playground';
import Commands from '../src/utils/Commands';
import {expect} from "chai";


describe('PROBLEM.md', () => {
    var robot = null;
    beforeEach(() => {
        const table = new Table(5, 5);
        robot = new Robot(table);
        
    })

    it('Use Case 1', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'MOVE',
            'REPORT'
        ]

        commands.forEach(command => Commands.execute(command, robot));
        expect(robot.report()).to.have.string('0,1,NORTH');
    })

    it('Use Case 2', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'LEFT',
            'REPORT'
        ]

        commands.forEach(command => Commands.execute(command, robot));
        expect(robot.report()).to.have.string('0,0,WEST');
    })

    it('Use Case 3', () => {
        const commands = [
            'PLACE 1,2,EAST',
            'MOVE',
            'MOVE',
            'LEFT',
            'MOVE',
            'REPORT'
        ]

        commands.forEach(command => Commands.execute(command, robot));
        expect(robot.report()).to.have.string('3,3,NORTH');
    })

    it('Use Case 4', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'LEFT',
            'LEFT',
            'LEFT',
            'LEFT',
            'REPORT'
        ]

        commands.forEach(command => Commands.execute(command, robot));
        expect(robot.report()).to.have.string('0,0,NORTH');
    })

    it('Use Case 5', () => {
        const commands = [
            'PLACE 0,0,NORTH',
            'RIGHT',
            'RIGHT',
            'RIGHT',
            'RIGHT',
            'REPORT'
        ]

        commands.forEach(command => Commands.execute(command, robot));
        expect(robot.report()).to.have.string('0,0,NORTH');
    })
})