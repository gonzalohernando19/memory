import { LitElement, html } from 'lit';

import styles from './input.styles.js';

export class Input extends LitElement {
  static properties = {
    /**
     * Placeholder text displayed in the input when it is empty.
     */
    placeholder: {
      type: String,
    },

    /**
     * The current value of the input field.
     */
    value: {
      type: String,
      reflect: true,
    },
  };

  static styles = [styles];

  constructor() {
    super();
    this.placeholder = '';
    this.value = '';
  }

  onInputChange(e) {
    const inputTarget = e.target;
    this.value = inputTarget.value;
    this.dispatchEvent(
      new CustomEvent('memory-input-change', {
        composed: true,
        bubbles: true,
        detail: { value: inputTarget.value },
      }),
    );
  }

  render() {
    return html`
      <input
        type="text"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        @input=${this.onInputChange}
      />
    `;
  }
}

customElements.define('memory-input', Input);
