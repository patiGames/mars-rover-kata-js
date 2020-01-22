import { expect } from 'chai';
import MarsRover from '../src/MarsRover';

describe('MarsRoverShould', () => {
  it('have position of 5 5 N on initialization', () => {
    let marsRover = new MarsRover(5, 5, 'N');
    expect(marsRover.position).to.equal('5 5 N');
  });
});
