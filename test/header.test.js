import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/components/header/header.js';

describe('Header Component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(
      html`<memory-header><h1>Test Header</h1></memory-header>`,
    );
  });

  it('renders a header with slot content', async () => {
    const slotContent = el.shadowRoot
      .querySelector('slot')
      .assignedNodes()[0]
      .textContent.trim();
    expect(slotContent).to.equal('Test Header');
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
