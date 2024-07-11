import { LitElement, html } from 'lit';

import styles from './header.styles.js';

export class Header extends LitElement {
  static properties = {};

  static styles = [styles];

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('memory-header', Header);
