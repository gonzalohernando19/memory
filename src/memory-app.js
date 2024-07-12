import { LitElement, html } from 'lit';

import { Router } from '@vaadin/router';
import tokens from '../assets/styles/tokens.js';

import './views/home/home.js';
import './views/game/game.js';

class Memory extends LitElement {
  static styles = [tokens];

  firstUpdated() {
    super.firstUpdated();
    // const router = new Router(this.shadowRoot.querySelector('#outlet'), { baseDir: '/rock-paper-scissors' });
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'memory-home' },
      { path: '/game', component: 'memory-game' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html` <div id="outlet"></div> `;
  }
}

customElements.define('memory-app', Memory);
