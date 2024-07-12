import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/input/input.js';

describe('Input component', () => {
  let input;

  beforeEach(async () => {
    input = await fixture(html`
      <memory-input placeholder="Enter text"></memory-input>
    `);
  });

  it('renders with placeholder attribute', async () => {
    const inputElement = input.shadowRoot.querySelector('input');
    expect(inputElement.getAttribute('placeholder')).to.equal('Enter text');
  });

  it('reflects value property to input field', async () => {
    input.value = 'Test value';
    await input.updateComplete;

    const inputElement = input.shadowRoot.querySelector('input');
    expect(inputElement.value).to.equal('Test value');
  });

  it('fires a "memory-input-change" event on input', () => {
    const eventSpy = sinon.spy(input, 'dispatchEvent');

    const inputElement = input.shadowRoot.querySelector('input');
    inputElement.value = 'New value';
    inputElement.dispatchEvent(new Event('input'));

    expect(eventSpy).to.have.been.calledOnce;
    expect(eventSpy).to.have.been.calledWithMatch(
      sinon.match
        .instanceOf(CustomEvent)
        .and(sinon.match.has('type', 'memory-input-change')),
    );
    expect(eventSpy.getCall(0).args[0].detail.value).to.equal('New value');

    input.dispatchEvent.restore();
  });
});
