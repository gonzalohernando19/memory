import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/memory-app.js';

describe('MemoryApp', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<memory-app></memory-app>`);
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
