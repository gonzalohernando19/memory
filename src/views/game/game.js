/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

import { LitElement, html } from 'lit';

import '../../components/header/header.js';
import '../../components/button/button.js';
import '../../components/icon/icon.js';
import '../../components/dropdown/dropdown.js';

import styles from './game.styles.js';
import { UserState } from '../../state/state.js';

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
     * Instructions text to play the game.
     */
    instructions: { type: String },

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
    this.instructions = 'Click the play button to start a new game';
    this.revealedNumbers = [];
    this.showButtons = false;
    this.showNumbers = true;
    this.options = ['Easy', 'Medium', 'Hard'];
    [this.selected] = this.options;
    this.isDropdownOpened = false;
    this.selectedNumbers = [];
    this.hideTimeout = 10000;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('memory-button-click', this.startGame);
    this.addEventListener('option-change', this.handleDropdownChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('memory-button-click', this.startGame);
    this.removeEventListener('option-change', this.handleDropdownChange);
  }

  updated(changedProperties) {
    if (changedProperties.has('score')) {
      this.saveScore();
    }
  }

  startGame() {
    this.instructions = 'Memorize the cards';
    this.showButtons = true;
    this.showNumbers = true;
    this.buttonsDisabled = true;
    this.playDisabled = true;
    this.dorpdownDisabled = true;
    this.selectedNumbers = [];
    this.clearButtonStates();

    const numbers = this.generateRandomNumbers();
    this.revealedNumbers = numbers;

    setTimeout(() => {
      this.hideNumbers();
    }, this.hideTimeout);
  }

  clearButtonStates() {
    const gameButtonsContainer = this.shadowRoot.querySelector('.game-buttons');
    if (gameButtonsContainer) {
      const buttons = gameButtonsContainer.querySelectorAll('.number-button');
      buttons.forEach(btn => {
        btn.classList.remove('win', 'lose');
      });
    }
  }

  hideNumbers() {
    this.showNumbers = false;
    this.buttonsDisabled = false;
    this.targetNumber =
      this.revealedNumbers[
        Math.floor(Math.random() * this.revealedNumbers.length)
      ];
    this.instructions = `Where is the number ${this.targetNumber}?`;
  }

  playRound(choice) {
    this.selectedNumbers = [...this.selectedNumbers, choice];
    if (choice === this.targetNumber) {
      this.score += 10;
      this.updateButtonState(choice, true);
    } else {
      this.updateButtonState(choice, false);
    }
    this.saveScore();
    this.playDisabled = false;
    this.dorpdownDisabled = false;
  }

  updateButtonState(choice, isWin) {
    const gameButtonsContainer = this.shadowRoot.querySelector('.game-buttons');
    const buttons = gameButtonsContainer.querySelectorAll('.number-button');
    buttons.forEach(btn => {
      if (parseInt(btn.dataset.number, 10) === choice) {
        btn.classList.add(isWin ? 'win' : 'lose');
      }
      btn.disabled = true;
    });
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
    switch (this.selected) {
      case 'Easy':
        this.hideTimeout = 10000;
        break;
      case 'Medium':
        this.hideTimeout = 5000;
        break;
      case 'Hard':
        this.hideTimeout = 2000;
        break;
      default:
        this.hideTimeout = 10000;
        break;
    }
  }

  render() {
    return html`
      <memory-header>
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
            ?disabled="${this.dorpdownDisabled}"
          ></memory-dropdown>
        </div>
      </memory-header>
      <main>
        <div class="container">
          <div class="score">
            <span>Score: ${this.score}</span>
          </div>
          <h1>${this.instructions}</h1>
          ${this.showButtons
            ? html`
                <div class="game-buttons">
                  ${this.revealedNumbers.map(
                    number => html`
                      <button
                        class="number-button"
                        data-number="${number}"
                        @click=${() => this.playRound(number)}
                        ?disabled=${this.buttonsDisabled}
                      >
                        ${this.showNumbers ||
                        this.selectedNumbers.includes(number)
                          ? number
                          : '?'}
                      </button>
                    `,
                  )}
                </div>
              `
            : ''}
          <memory-button
            @memory-button-click="${this.startGame}"
            ?disabled="${this.playDisabled}"
          >
            Play
          </memory-button>
        </div>
      </main>
    `;
  }
}

customElements.define('memory-game', Game);
