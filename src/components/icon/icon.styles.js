import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }
  svg {
    height: 100%;
    width: 100%;
  }

  :host([size='SM']) {
    height: 24px;
    width: 24px;
  }
  :host([size='MD']) {
    height: 32px;
    width: 32px;
  }
  :host([size='LG']) {
    height: 40px;
    width: 40px;
  }
`;
