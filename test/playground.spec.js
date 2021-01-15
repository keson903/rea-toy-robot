"use strict";

import Table from '../src/models/playground';
import {expect} from "chai";

describe('Create a Playground', () => {
    describe('Creates 5x5 Table', () => {
        it('should create a 5x5 table', () => {
            const table = new Table(5, 5);
            expect(table).to.be.an("object");
            expect(table)
                .to.have.property("x")
                .eq(5);
            expect(table)
                .to.have.property("y")
                .eq(5);
        })
    })

    describe('Creates 3x7 Table', () => {
        it('should create a 3x7 table', () => {
            const table = new Table(3, 7);
            expect(table).to.be.an("object");
            expect(table)
                .to.have.property("x")
                .eq(3);
            expect(table)
                .to.have.property("y")
                .eq(7);
        })
    })

    describe('Wont Create a table if area is not correctly defined', () => {
        it('should throw error', () => {
            expect(() => {
                new Table(0, 0);
            }).to.throw("Playground (X,Y) should be greater than 0");
        
            expect(() => {
                new Table(-3, 5);
            }).to.throw("Playground (X,Y) should be greater than 0");

            expect(() => {
                new Table(5, -3);
            }).to.throw("Playground (X,Y) should be greater than 0");
        })
    })


    describe('Wont Create a table if input as string', () => {
      it('should throw error', () => {
          expect(() => {
              new Table("a", "b");
          }).to.throw("Playground (X,Y) should be number");
      
          expect(() => {
              new Table("-kkop_", "##");
          }).to.throw("Playground (X,Y) should be number");

          expect(() => {
              new Table("zz", "00@@");
          }).to.throw("Playground (X,Y) should be number");
      })
  })
})