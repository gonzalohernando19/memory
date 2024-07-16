import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/components/dropdown/dropdown.js';

describe('Dropdown Component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`<memory-dropdown></memory-dropdown>`);
  });

  it('should render with default properties', () => {
    expect(el.options).to.deep.equal([]);
    expect(el.selected).to.equal('');
    expect(el.opened).to.be.false;
    expect(el.disabled).to.be.false;
  });

  it('should display the correct options', async () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    el.options = options;
    await el.updateComplete;
    const dropdownItems = el.shadowRoot.querySelectorAll('.dropdown-menu-item');
    expect(dropdownItems.length).to.equal(options.length);
    dropdownItems.forEach((item, index) => {
      expect(item.textContent.trim()).to.equal(options[index]);
    });
  });

  it('should open and close the dropdown when clicked', () => {
    const toggle = el.shadowRoot.querySelector('.dropdown-toggle');
    toggle.click();
    expect(el.opened).to.be.true;
    toggle.click();
    expect(el.opened).to.be.false;
  });

  it('should select an option and dispatch an event', async () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    el.options = options;
    await el.updateComplete;
    const dropdownItems = el.shadowRoot.querySelectorAll('.dropdown-menu-item');

    let selectedOption;
    el.addEventListener('option-change', event => {
      selectedOption = event.detail.value;
    });

    dropdownItems[1].click();
    expect(el.selected).to.equal(options[1]);
    expect(selectedOption).to.equal(options[1]);
  });

  it('should not open the dropdown when disabled', async () => {
    el.disabled = true;
    await el.updateComplete;
    const toggle = el.shadowRoot.querySelector('.dropdown-toggle');
    toggle.click();
    expect(el.opened).to.be.false;
  });

  it('toggles dropdown on Enter key press', async () => {
    el.opened = false;
    await el.updateComplete;

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    el.shadowRoot.querySelector('.dropdown-toggle').dispatchEvent(enterEvent);
    await el.updateComplete;

    expect(el.opened).to.be.true;

    el.shadowRoot.querySelector('.dropdown-toggle').dispatchEvent(enterEvent);
    await el.updateComplete;
    expect(el.opened).to.be.false;
  });

  it('closes dropdown when disabled', async () => {
    el.opened = true;
    el.disabled = true;

    el.requestUpdate();
    await el.updateComplete;

    expect(el.opened).to.be.false;
  });

  it('does not toggle dropdown when disabled', async () => {
    el.disabled = true;
    await el.updateComplete;

    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    el.shadowRoot.querySelector('.dropdown-toggle').dispatchEvent(enterEvent);
    await el.updateComplete;

    expect(el.opened).to.be.false;
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
