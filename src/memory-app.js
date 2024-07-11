import { LitElement, html } from 'lit';
import './components/button/button.js';

class MemoryApp extends LitElement {
  static properties = {};

  render() {
    return html` <main></main> `;
  }
}

customElements.define('memory-app', MemoryApp);
