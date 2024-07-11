import { LitElement, html } from 'lit';
import '../../components/button/button.js';
import '../../components/input/input.js';
import '../../components/header/header.js';

import { Router } from '@vaadin/router';
import styles from './home.styles.js';

export class Home extends LitElement {
  static properties = {
    /**
     * Header of the app
     */
    header: { type: String },
    /**
     * Name of the player
     */
    playerName: { type: String },
    /**
     * Input error
     */
    error: { type: Boolean },
  };

  static styles = [styles];

  constructor() {
    super();
    this.header = 'Create new player';
    this.playerName = '';
    this.error = false;
  }

  handleInputChange(e) {
    this.playerName = e.target.value;
    this.error = false;
  }

  handleSavePlayer(e) {
    e.preventDefault();
    if (this.playerName.trim().length === 0) {
      this.error = true;
      return;
    }
    localStorage.setItem('playerName', this.playerName);
    Router.go({
      pathname: '/game',
    });
  }

  render() {
    return html`
      <memory-header>
        <span>Gone</span>
        <span>Gone</span>
      </memory-header>
      <main>
        <div class="logo"><span>1</span></div>
        <h1>${this.header}</h1>
        <div class="container">
          <memory-input
            placeholder="Player Name"
            @memory-input-change="${this.handleInputChange}"
          ></memory-input>
          ${this.error
            ? html`<div class="error">Please enter a valid name.</div>`
            : ''}
          <memory-button @memory-button-click="${this.handleSavePlayer}"
            >Play</memory-button
          >
        </div>
      </main>
    `;
  }
}

customElements.define('memory-home', Home);
