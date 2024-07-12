import { LitElement, html } from 'lit';

import styles from './dropdown.styles.js';

export class Dropdown extends LitElement {
  static properties = {
    /**
     * List of options to show in the dropdown
     */
    options: { type: Array },

    /**
     * Current option selected
     */
    selected: { type: String },

    /**
     * Whether the dropdown menu is opened or closed.
     */
    opened: { type: Boolean },
  };

  constructor() {
    super();
    this.options = [];
    this.selected = '';
    this.opened = false;
  }

  static styles = [styles];

  toggleDropdown() {
    this.opened = !this.opened;
    this.requestUpdate();
  }

  selectOption(option) {
    this.selected = option;
    this.opened = false;
    this.dispatchEvent(
      new CustomEvent('option-change', {
        detail: { selected: this.selected },
      }),
    );
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.toggleDropdown();
    }
  }

  render() {
    return html`
      <div class="dropdown">
        <div
          class="dropdown-toggle"
          @click="${this.toggleDropdown}"
          @keydown="${this.handleKeyDown}"
          tabindex="0"
        >
          ${this.selected}
          <memory-icon size="SM" name="arrow-down" color="white"></memory-icon>
        </div>
        <div class="dropdown-menu ${this.opened ? 'opened' : ''}">
          ${this.options.map(
            option => html`
              <div
                class="dropdown-menu-item"
                @click="${() => this.selectOption(option)}"
                @keydown="${() => this.selectOption(option)}"
              >
                ${option}
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('memory-dropdown', Dropdown);
