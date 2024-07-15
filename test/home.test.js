import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/views/home/home.js';

describe('Home view', () => {
  let home;

  beforeEach(async () => {
    home = await fixture(html` <memory-home></memory-home> `);
  });

  it('initializes with default values', () => {
    expect(home.header).to.equal('Create new player');
    expect(home.playerName).to.equal('');
    expect(home.error).to.be.false;
  });

  it('updates playerName on memory-input-change event', async () => {
    const inputElement = home.shadowRoot.querySelector('memory-input');
    inputElement.dispatchEvent(
      new CustomEvent('memory-input-change', {
        detail: { value: 'Test Player' },
        bubbles: true,
        composed: true,
      }),
    );

    await oneEvent(inputElement, 'memory-input-change');

    expect(home.playerName).to.equal('Test Player');
    expect(home.error).to.be.false;
  });

  it('shows error message on handleSavePlayer when playerName is empty', () => {
    const buttonElement = home.shadowRoot.querySelector('memory-button');
    const eventSpy = sinon.spy(buttonElement, 'dispatchEvent');

    home.handleSavePlayer(new Event('click'));

    expect(home.error).to.be.true;
    expect(eventSpy).to.not.have.been.called;

    buttonElement.dispatchEvent.restore();
  });
});
