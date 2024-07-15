import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/components/button/button.js';

describe('Button component', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html` <memory-button>Click me</memory-button> `);
  });

  it('renders content from slot', async () => {
    const slotContent = el.shadowRoot
      .querySelector('slot')
      .assignedNodes()[0]
      .textContent.trim();
    expect(slotContent).to.equal('Click me');
  });

  it('fires a "memory-button-click" event when clicked', () => {
    const eventSpy = sinon.stub(el, 'dispatchEvent');

    el.shadowRoot.querySelector('button').click();

    expect(eventSpy).to.have.been.calledOnce;
    expect(eventSpy).to.have.been.calledWithMatch(
      sinon.match
        .instanceOf(CustomEvent)
        .and(sinon.match.has('type', 'memory-button-click')),
    );

    eventSpy.restore();
  });

  it('renders with disabled attribute when disabled property is true', async () => {
    el.disabled = true;
    await el.updateComplete;

    const buttonElement = el.shadowRoot.querySelector('button');
    expect(buttonElement.hasAttribute('disabled')).to.be.true;
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });
});
