import { LitElement, html } from 'lit';
import styles from './button.styles.js';

export class Button extends LitElement {
  static properties = {
    /**
     * Disabled
     */
    disabled: { type: Boolean },
  };

  static styles = [styles];

  constructor() {
    super();
    this.disabled = false;
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('memory-button-click', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} @click="${this.handleClick}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('memory-button', Button);
