import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/button/button.js';

describe('Button component', () => {
  let button;

  beforeEach(async () => {
    button = await fixture(html` <memory-button>Click me</memory-button> `);
  });

  it('renders content from slot', async () => {
    await button.updateComplete;
    const buttonElement = button.shadowRoot.querySelector('button');
    console.log(buttonElement);
    expect(buttonElement.textContent.trim()).to.equal('Click me');
  });

  it('fires a "memory-button-click" event when clicked', () => {
    const eventSpy = sinon.stub(button, 'dispatchEvent');

    button.shadowRoot.querySelector('button').click();

    expect(eventSpy).to.have.been.calledOnce;
    expect(eventSpy).to.have.been.calledWithMatch(
      sinon.match
        .instanceOf(CustomEvent)
        .and(sinon.match.has('type', 'memory-button-click')),
    );

    eventSpy.restore();
  });

  it('renders with disabled attribute when disabled property is true', async () => {
    button.disabled = true;
    await button.updateComplete;

    const buttonElement = button.shadowRoot.querySelector('button');
    expect(buttonElement.hasAttribute('disabled')).to.be.true;
  });
});
