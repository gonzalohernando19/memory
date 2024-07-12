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

    /**
     * Whether the dropdown is disabled or not.
     */
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.options = [];
    this.selected = '';
    this.opened = false;
    this.disabled = false;
  }

  static styles = [styles];

  toggleDropdown() {
    if (!this.disabled) {
      this.opened = !this.opened;
    }
  }

  selectOption(option) {
    this.selected = option;
    this.opened = false;
    this.dispatchEvent(
      new CustomEvent('option-change', {
        detail: { value: this.selected },
        bubbles: true,
        composed: true,
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
      <div class="dropdown ${this.disabled ? 'disabled' : ''}">
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
