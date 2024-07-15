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

    /**
     * The label for the input field.
     */
    label: {
      type: String,
    },

    /**
     * Whether the input field has an invalid value.
     */
    invalid: {
      type: Boolean,
    },
  };

  static styles = [styles];

  constructor() {
    super();
    this.placeholder = '';
    this.value = '';
    this.label = '';
    this.required = false;
    this.invalid = false;
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
      <label>
        ${this.label}
        <input
          type="text"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          @input=${this.onInputChange}
          aria-label="${this.label}"
          aria-invalid="${this.invalid ? 'true' : 'false'}"
        />
      </label>
    `;
  }
}

customElements.define('memory-input', Input);
