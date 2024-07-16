import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/views/game/game.js';

describe('Game component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html` <memory-game></memory-game> `);
    await el.updateComplete;
  });

  it('renders the header with the player name', async () => {
    const header = el.shadowRoot.querySelector('memory-header');
    expect(header).to.exist;
    el.playerName = 'Test Player';
    await el.updateComplete;

    const playerNameElement = el.shadowRoot.querySelector('memory-header span');
    expect(playerNameElement.textContent).to.contain('Test Player');
  });

  it('renders the initial score', () => {
    const scoreElement = el.shadowRoot.querySelector('.score span');
    expect(scoreElement.textContent.trim()).to.equal(`Score: ${el.score}`);
  });

  it('renders the dropdown with options', () => {
    const dropdown = el.shadowRoot.querySelector('memory-dropdown');
    expect(dropdown).to.exist;
    expect(dropdown.options).to.deep.equal(el.options);
    expect(dropdown.selected).to.equal(el.selected);
  });

  it('renders the play button', () => {
    const button = el.shadowRoot.querySelector('memory-button');
    expect(button).to.exist;
  });

  it('updates the score when the score property changes', async () => {
    el.score = 10;
    await el.updateComplete;
    const scoreElement = el.shadowRoot.querySelector('.score span');
    expect(scoreElement.textContent.trim()).to.equal('Score: 10');
  });

  it('starts a new game when the play button is clicked', async () => {
    const startGameSpy = sinon.stub(el, 'startGame');
    el.requestUpdate();
    await el.updateComplete;
    const button = el.shadowRoot.querySelector('memory-button');

    button.dispatchEvent(new Event('memory-button-click'));
    expect(startGameSpy).to.have.been.calledOnce;
  });

  it('fires "memory-input-change" event when dropdown selection changes', async () => {
    const eventSpy = sinon.spy(el, 'handleDropdownChange');
    el.requestUpdate();
    await el.updateComplete;
    const dropdown = el.shadowRoot.querySelector('memory-dropdown');
    dropdown.dispatchEvent(
      new CustomEvent('option-change', {
        detail: { value: 'Hard', opened: false },
      }),
    );
    expect(eventSpy).to.have.been.calledOnce;
    expect(el.selected).to.equal('Hard');
  });

  it('renders the revealed numbers as buttons during the game', async () => {
    el.startGame();
    await el.updateComplete;
    const buttons = el.shadowRoot.querySelectorAll('.number-button');
    expect(buttons.length).to.equal(9);
  });

  it('should hide numbers and set target number', () => {
    el.revealedNumbers = [1, 2, 3, 4, 5];

    el.hideNumbers();

    expect(el.showNumbers).to.be.false;
    expect(el.targetNumber).to.be.oneOf(el.revealedNumbers);
  });

  it('should update score correctly on correct choice', () => {
    el.playRound(3);

    expect(el.choice).to.equal(3);
    expect(el.score).to.equal(10);
    expect(el.isPlaying).to.be.false;
  });

  it('should not update score on incorrect choice', () => {
    el.playRound(4);

    expect(el.choice).to.equal(4);
    expect(el.score).to.equal(10);
    expect(el.isPlaying).to.be.false;
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
