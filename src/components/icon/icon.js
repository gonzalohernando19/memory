/* eslint-disable no-console */
import { LitElement, html } from 'lit';

import styles from './icon.styles.js';

export class Icon extends LitElement {
  static properties = {
    /**
     * Name of the icon to load (without extension).
     * Example: 'exit', 'ranking', etc.
     */
    name: { type: String },

    /**
     * Color of the icon in valid CSS format.
     * Default: '#061B2B'.
     */
    color: { type: String },

    /**
     * Size of the icon.
     * Default: 'SM'.
     */
    size: { type: String },
  };

  static styles = [styles];

  constructor() {
    super();
    this.name = '';
    this.color = '#061B2B';
    this.error = false;
    this.size = 'SM';
  }

  async loadSVG(name) {
    try {
      const response = await fetch(`/assets/icons/${name}.svg`);
      if (!response.ok) {
        throw new Error(`SVG not found (${response.status})`);
      }
      const svgText = await response.text();
      return svgText;
    } catch (error) {
      console.error(`Error loading SVG (${name}):`, error);
      this.error = true;
      return null;
    }
  }

  async updated(changedProperties) {
    if (changedProperties.has('name') || changedProperties.has('color')) {
      if (!this.name) {
        console.error('Icon name is empty. Please provide a valid icon name.');
        this.error = true;
        return;
      }

      const svg = await this.loadSVG(this.name);
      const iconDiv = this.shadowRoot.querySelector('#icon');
      if (svg) {
        iconDiv.innerHTML = svg;
        iconDiv.querySelector('svg').style.fill = this.color;
      } else {
        iconDiv.innerHTML = '';
      }
    }
  }

  render() {
    return html` <div id="icon"></div> `;
  }
}

customElements.define('memory-icon', Icon);
