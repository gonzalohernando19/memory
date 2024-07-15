import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/components/icon/icon.js';

describe('Icon component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`<memory-icon size="SM" name="exit"></memory-icon>`);
  });

  it('renders icon component', async () => {
    await el.updateComplete;
    const iconDiv = el.shadowRoot.querySelector('#icon');
    expect(iconDiv).to.exist;
  });

  it('sets the default color if not provided', async () => {
    await el.updateComplete;
    expect(el.color).to.equal('#061B2B');
  });

  it('shows an error if the icon name is empty', async () => {
    el = await fixture(html`<memory-icon></memory-icon>`);
    await el.updateComplete;

    expect(el.error).to.be.true;
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
