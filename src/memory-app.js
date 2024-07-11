import { LitElement, html } from 'lit';

class MemoryApp extends LitElement {
  static properties = {};

  render() {
    return html` <main></main> `;
  }
}

customElements.define('memory-app', MemoryApp);
