/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

import { LitElement, html } from 'lit';

import '../../components/header/header.js';
import '../../components/button/button.js';
import '../../components/icon/icon.js';
import '../../components/dropdown/dropdown.js';

import styles from './game.styles.js';
import { UserState } from '../../state/state.js';
import { LEVELS } from '../../constants/levels.js';

export class Game extends LitElement {
  static properties = {
    /**
     * The name of the player.
     */
    playerName: { type: String },

    /**
     * The current score of the player.
     */
    score: { type: Number },

    /**
     * The target number that the player needs to find.
     */
    targetNumber: { type: Number },

    /**
     * Array of numbers that have been revealed during the game.
     */
    revealedNumbers: { type: Array },

    /**
     * Flag to indicate whether to show the buttons of the current round.
     */
    showButtons: { type: Boolean },

    /**
     * Flag to indicate whether to show the numbers or '?'.
     */
    showNumbers: { type: Boolean },

    /**
     * List of options to show in the dropdown.
     */
    options: { type: Array },

    /**
     * Currently selected option from the dropdown.
     */
    selected: { type: String },

    /**
     * Whether the dropdown menu is opened or closed.
     */
    isDropdownOpened: { type: Boolean },

    /**
     * Array of numbers that the player has selected in the current round.
     */
    selectedNumbers: { type: Array },

    /**
     * Array of numbers that the player has selected in the current round.
     */
    choice: { type: Number },

    /**
     * The timeout duration (in milliseconds) before the numbers are hidden.
     * Default: '10000'.
     */
    hideTimeout: { type: Number },
  };

  static styles = [styles];

  constructor() {
    super();
    this.playerName = UserState.user;
    this.score = parseInt(UserState.score, 10) || 0;
    this.revealedNumbers = [];
    this.showButtons = false;
    this.showNumbers = true;
    this.options = Object.values(LEVELS).map(item => item.name);
    [this.selected] = this.options;
    this.isDropdownOpened = false;
    this.selectedNumbers = [];
    this.hideTimeout = 10000;
  }

  updated(changedProperties) {
    if (changedProperties.has('score')) {
      this.saveScore();
    }
  }

  startGame() {
    this.showButtons = true;
    this.showNumbers = true;
    this.selectedNumbers = [];
    this.choice = undefined;
    this.isPlaying = true;
    this.revealedNumbers = this.generateRandomNumbers();
    this.hideTimeout = LEVELS[this.selected].time;
    this.scoreToSum = LEVELS[this.selected].time;

    setTimeout(() => {
      this.hideNumbers();
    }, this.hideTimeout);
  }

  hideNumbers() {
    this.showNumbers = false;
    this.targetNumber =
      this.revealedNumbers[
        Math.floor(Math.random() * this.revealedNumbers.length)
      ];
  }

  playRound(choice) {
    this.choice = choice;
    if (choice === this.targetNumber) {
      this.score += this.scoreToSum;
    }
    this.saveScore();
    this.isPlaying = false;
  }

  saveScore() {
    UserState.setScore(this.score);
  }

  generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 9) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  handleDropdownChange(event) {
    this.selected = event.detail.value;
    this.isDropdownOpened = event.detail.opened;
  }

  renderHeader() {
    return html` <memory-header>
      <span>
        <memory-icon size="SM" name="user" color="white"></memory-icon>
        ${this.playerName}
      </span>
      <div class="difficulty">
        <span>Dificulty</span>
        <memory-dropdown
          .options="${this.options}"
          .selected="${this.selected}"
          .opened="${this.isDropdownOpened}"
          @option-change="${this.handleDropdownChange}"
          ?disabled="${this.isPlaying}"
        ></memory-dropdown>
      </div>
    </memory-header>`;
  }

  getButtonClass(number) {
    if (this.choice === undefined || this.choice !== number) {
      return '';
    }
    return number === this.targetNumber ? 'win' : 'lose';
  }

  renderButtons() {
    return this.showButtons
      ? html`
          <div class="game-buttons">
            ${this.revealedNumbers.map(
              number => html`
                <button
                  class="number-button ${this.getButtonClass(number)}"
                  @click=${() => this.playRound(number)}
                  ?disabled=${(this.isPlaying && this.showNumbers) ||
                  this.choice !== undefined}
                >
                  ${this.showNumbers || this.choice === number ? number : '?'}
                </button>
              `,
            )}
          </div>
        `
      : '';
  }

  getMessage() {
    if (!this.isPlaying) {
      return html`<h1>Click the play button to start a new game</h1>`;
    }
    return this.showNumbers
      ? html`<h1>Memorize the cards</h1>`
      : html`<h1>Where is the number ${this.targetNumber}</h1>`;
  }

  render() {
    return html`
      ${this.renderHeader()}
      <main>
        <div class="container">
          <div class="score">
            <span>Score: ${this.score}</span>
          </div>
          ${this.getMessage()} ${this.renderButtons()}
          <memory-button
            @memory-button-click="${this.startGame}"
            ?disabled="${this.isPlaying}"
          >
            Play
          </memory-button>
        </div>
      </main>
    `;
  }
}

customElements.define('memory-game', Game);
