import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/views/home/home.js';
import { Router } from '@vaadin/router';
import { UserState } from '../src/state/state.js';

describe('Home View', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`<memory-home></memory-home>`);
  });

  it('should render with default properties', () => {
    expect(el.header).to.equal('Create new player');
    expect(el.playerName).to.equal('');
    expect(el.error).to.be.false;
  });

  it('should handle input change', async () => {
    const input = el.shadowRoot.querySelector('memory-input');
    input.value = 'Test Player';
    input.dispatchEvent(new Event('memory-input-change'));
    expect(el.playerName).to.equal('Test Player');
    expect(el.error).to.be.false;
  });

  it('should display an error for empty input on save', async () => {
    el.handleSavePlayer(new Event('submit'));
    await el.updateComplete;

    expect(el.error).to.be.true;
    const errorDiv = el.shadowRoot.querySelector('.error');
    expect(errorDiv).to.exist;
    expect(errorDiv.textContent).to.equal('Please enter a valid name.');
  });

  it('should save player and navigate to game on valid input', () => {
    const routerGoStub = sinon.stub(Router, 'go');
    const setUserStub = sinon.stub(UserState, 'setUser');

    el.playerName = 'Valid Player';
    el.handleSavePlayer(new Event('submit'));

    expect(el.error).to.be.false;
    expect(setUserStub).to.have.been.calledWith('Valid Player');
    expect(routerGoStub).to.have.been.calledWith({ pathname: '/game' });

    routerGoStub.restore();
    setUserStub.restore();
  });

  it('should handle Enter key press to save player', () => {
    const handleSavePlayerStub = sinon.stub(el, 'handleSavePlayer');
    const input = el.shadowRoot.querySelector('memory-input');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });

    input.dispatchEvent(event);

    expect(handleSavePlayerStub).to.have.been.calledOnce;

    handleSavePlayerStub.restore();
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
