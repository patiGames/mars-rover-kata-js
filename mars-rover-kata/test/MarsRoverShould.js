import { expect } from 'chai';
import Rover from '../src/MarsRover';

describe('MarsRoverShould', () => {
  let rover;
  beforeEach(() => {
    rover = new Rover(5, 5, 'N');
  });

  it('have position of 5 5 N on initialization', () => {
    expect(rover.position).to.equal('5 5 N');
  });

  let tests = [
    { args: 'f', expected: '5 6 N' },
    { args: 'ff', expected: '5 7 N' },
    { args: 'fff', expected: '5 8 N' }
  ];

  tests.forEach(test => {
    it(`move forward ${test.args} to ${test.expected}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });

  tests = [
    { args: 'b', expected: '5 4 N' },
    { args: 'bb', expected: '5 3 N' },
    { args: 'bbb', expected: '5 2 N' }
  ];

  tests.forEach(test => {
    it(`move backward ${test.args} to ${test.expected}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });

  tests = [
    { args: 'r', expected: '5 5 E' },
    { args: 'rr', expected: '5 5 S' },
    { args: 'rrr', expected: '5 5 W' },
    { args: 'rrrr', expected: '5 5 N' },
    { args: 'rrrrr', expected: '5 5 E' }
  ];

  tests.forEach(test => {
    it(`turn right ${test.args} to ${test.expected}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });

  tests = [
    { args: 'l', expected: '5 5 W' },
    { args: 'll', expected: '5 5 S' },
    { args: 'lll', expected: '5 5 E' },
    { args: 'llll', expected: '5 5 N' },
    { args: 'lllll', expected: '5 5 W' }
  ];

  tests.forEach(test => {
    it(`turn left ${test.args} to ${test.expected}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });

  tests = [
    { args: 'rf', expected: '6 5 E' },
    { args: 'rrf', expected: '5 4 S' },
    { args: 'rrrf', expected: '4 5 W' },
    { args: 'rrrrf', expected: '5 6 N' },
    { args: 'rrrrrf', expected: '6 5 E' },
    { args: 'rrrrrffffff', expected: '11 5 E' }
  ];

  tests.forEach(test => {
    it(`turn and move forward ${test.args} to ${test.expected}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });
});
