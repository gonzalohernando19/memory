import { expect } from '@open-wc/testing';
import { UserState, LEVELS } from '../src/state/state.js';

describe('State Class', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with default values', () => {
    const state = new UserState.constructor();
    expect(state.user).to.equal('');
    expect(state.score).to.equal(0);
    expect(state.level).to.equal(LEVELS.EASY);
  });

  it('should set user and load score', () => {
    const state = new UserState.constructor();
    state.setUser('Alice');
    expect(state.user).to.equal('Alice');
    expect(state.score).to.equal(0);
  });

  it('should save and load score', () => {
    const state = new UserState.constructor();
    state.setUser('Bob');
    state.setScore('42');
    expect(localStorage.getItem('Bob_score')).to.equal('42');

    const newState = new UserState.constructor();
    newState.setUser('Bob');
    newState.loadScore();
    expect(newState.score).to.equal('42');
  });
});
