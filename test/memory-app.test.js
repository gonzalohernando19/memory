import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/memory-app.js';

describe('MemoryApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<memory-app></memory-app>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
