import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/input/input.js';

describe('Input component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <memory-input placeholder="Enter text"></memory-input>
    `);
  });

  it('renders with placeholder attribute', async () => {
    const inputElement = el.shadowRoot.querySelector('input');
    expect(inputElement.getAttribute('placeholder')).to.equal('Enter text');
  });

  it('reflects value property to input field', async () => {
    el.value = 'Test value';
    await el.updateComplete;

    const inputElement = el.shadowRoot.querySelector('input');
    expect(inputElement.value).to.equal('Test value');
  });

  it('fires a "memory-input-change" event on input', () => {
    const eventSpy = sinon.spy(el, 'dispatchEvent');

    const inputElement = el.shadowRoot.querySelector('input');
    inputElement.value = 'New value';
    inputElement.dispatchEvent(new Event('input'));

    expect(eventSpy).to.have.been.calledOnce;
    expect(eventSpy).to.have.been.calledWithMatch(
      sinon.match
        .instanceOf(CustomEvent)
        .and(sinon.match.has('type', 'memory-input-change')),
    );
    expect(eventSpy.getCall(0).args[0].detail.value).to.equal('Ne value');
  });

  it('renders with label', async () => {
    el.label = 'Test Label';
    await el.updateComplete;

    const labelElement = el.shadowRoot.querySelector('label');
    expect(labelElement).to.exist;
    expect(labelElement.textContent.trim()).to.equal('Test Label');
  });

  it('sets aria-invalid attribute when invalid is true', async () => {
    el.invalid = true;
    await el.updateComplete;

    const inputElement = el.shadowRoot.querySelector('input');
    expect(inputElement.getAttribute('aria-invalid')).to.equal('true');
  });

  it('does not set aria-invalid attribute when invalid is false', async () => {
    el.invalid = false;
    await el.updateComplete;

    const inputElement = el.shadowRoot.querySelector('input');
    expect(inputElement.getAttribute('aria-invalid')).to.equal('false');
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });

  it('should set aria-label attribute for accessibility', async () => {
    el.label = 'Accessible Label';
    await el.updateComplete;

    const inputElement = el.shadowRoot.querySelector('input');
    expect(inputElement.getAttribute('aria-label')).to.equal(
      'Accessible Label',
    );
  });
});
