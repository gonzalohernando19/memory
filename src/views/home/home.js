import { LitElement, html } from 'lit';
import '../../components/button/button.js';
import '../../components/input/input.js';

import { Router } from '@vaadin/router';
import { UserState } from '../../state/state.js';
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
    UserState.setUser(this.playerName);
    Router.go({
      pathname: '/game',
    });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleSavePlayer(e);
    }
  }

  render() {
    return html`
      <main>
        <div class="logo"><span>1</span></div>
        <h1>${this.header}</h1>
        <div class="container">
          <memory-input
            placeholder="Player Name"
            @memory-input-change="${this.handleInputChange}"
            @keydown="${this.handleKeyDown}"
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
