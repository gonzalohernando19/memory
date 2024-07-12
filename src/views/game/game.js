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
  };

  static styles = [styles];

  constructor() {
    super();
    this.playerName = UserState.user;
    this.score = parseInt(UserState.score, 10) || 0;
    this.instructions = 'Click the play button to start a new game';
    this.revealedNumbers = [];
    this.options = ['Easy', 'Medium', 'Hard'];
    [this.selected] = this.options;
    this.isDropdownOpened = false;
  }

  startGame() {
    this.instructions = 'Memorize the cards';

    let gameButtonsContainer = this.shadowRoot.querySelector('.game-buttons');
    if (!gameButtonsContainer) {
      gameButtonsContainer = document.createElement('div');
      gameButtonsContainer.classList.add('game-buttons');
      this.shadowRoot
        .querySelector('.container')
        .insertBefore(
          gameButtonsContainer,
          this.shadowRoot.querySelector('memory-button'),
        );
    } else {
      gameButtonsContainer.innerHTML = '';
    }

    const numbers = this.generateRandomNumbers();
    this.revealedNumbers = numbers;
    numbers.forEach(number => {
      const button = document.createElement('button');
      button.textContent = number;
      button.classList.add('number-button');
      button.disabled = true;
      button.addEventListener('click', () => this.playRound(number, button));
      gameButtonsContainer.appendChild(button);
    });

    setTimeout(() => {
      this.hideNumbers();
    }, 10000);
  }

  hideNumbers() {
    const gameButtonsContainer = this.shadowRoot.querySelector('.game-buttons');
    const buttons = gameButtonsContainer.querySelectorAll('.number-button');
    buttons.forEach(btn => {
      btn.textContent = '?';
      btn.disabled = false;
    });

    this.requestUpdate();

    this.targetNumber =
      this.revealedNumbers[
        Math.floor(Math.random() * this.revealedNumbers.length)
      ];
    this.instructions = `Where is the number ${this.targetNumber}?`;
    this.requestUpdate();
  }

  playRound(choice, button) {
    if (choice === this.targetNumber) {
      this.score += 10;
      button.textContent = choice;
      button.classList.add('win');
    } else {
      button.textContent = choice;
      button.classList.add('lose');
    }

    const gameButtonsContainer = this.shadowRoot.querySelector('.game-buttons');
    const buttons = gameButtonsContainer.querySelectorAll('.number-button');
    buttons.forEach(btn => {
      btn.disabled = true;
    });

    this.saveScore();
    this.requestUpdate();
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

  render() {
    return html`
      <memory-header>
        <span
          ><memory-icon size="SM" name="user" color="white"></memory-icon>
          ${this.playerName}</span
        >
        <memory-dropdown
          .options="${this.options}"
          .selected="${this.selected}"
          .opened="${this.isDropdownOpened}"
          @option-change="${this.handleDropdownChange}"
        ></memory-dropdown>
      </memory-header>
      <main>
        <div class="container">
          <div class="score">
            <span>Score: ${this.score}</span>
          </div>

          <h1>${this.instructions}</h1>
          <memory-button @memory-button-click="${this.startGame}"
            >Play</memory-button
          >
        </div>
      </main>
    `;
  }
}

customElements.define('memory-game', Game);
