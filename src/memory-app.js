import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import './views/home/home.js';

class Memory extends LitElement {
  firstUpdated() {
    super.firstUpdated();
    // const router = new Router(this.shadowRoot.querySelector('#outlet'), { baseDir: '/rock-paper-scissors' });
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'memory-home' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html` <div id="outlet"></div> `;
  }
}

customElements.define('memory-app', Memory);
