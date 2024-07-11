import { LitElement, html, css } from 'lit';

class MemoryApp extends LitElement {
  static properties = {
  }

  static styles = css`
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <main>
      </main>
    `;
  }
}

customElements.define('memory-app', MemoryApp);