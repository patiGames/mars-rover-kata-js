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
    it(`move forward ${test.args}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });

  tests = [
    { args: 'b', expected: '5 4 N' },
    { args: 'bb', expected: '5 3 N' },
    { args: 'bbb', expected: '5 2 N' }
  ];

  tests.forEach(test => {
    it(`move backward ${test.args}`, () => {
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
    it(`turn right ${test.args}`, () => {
      expect(rover.implement(test.args)).to.equal(test.expected);
    });
  });
});
