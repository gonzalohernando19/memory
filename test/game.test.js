import { html, fixture, expect } from '@open-wc/testing';
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
    el.playerName = 'Test';
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

  it('renders the revealed numbers as buttons during the game', async () => {
    el.startGame();
    await el.updateComplete;
    const buttons = el.shadowRoot.querySelectorAll('.number-button');
    expect(buttons.length).to.equal(9);
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
