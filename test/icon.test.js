import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/components/icon/icon.js';

describe('Icon component', () => {
  let icon;

  beforeEach(async () => {
    icon = await fixture(
      html`<memory-icon size="SM" name="exit"></memory-icon>`,
    );
  });

  it('renders icon component', async () => {
    await icon.updateComplete;
    const iconDiv = icon.shadowRoot.querySelector('#icon');
    expect(iconDiv).to.exist;
  });

  it('sets the default color if not provided', async () => {
    await icon.updateComplete;
    expect(icon.color).to.equal('#061B2B');
  });

  it('shows an error if the icon name is empty', async () => {
    icon = await fixture(html`<memory-icon></memory-icon>`);
    await icon.updateComplete;

    expect(icon.error).to.be.true;
  });
});
