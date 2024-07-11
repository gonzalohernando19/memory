import { css } from 'lit';

export default css`
  :host {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    --input-background-color: var(--memory-secondary-color, #ffffff);
    --input-border-width: var(--memory-size-border-width, 0.063rem);
    --input-border-style: solid;
    --input-border-color: var(--memory-primary-color, #061b2b);
    --input-border-radius: var(--memory-size-border-radius-lg, 0.5rem);
    --input-text-color: var(--memory-primary-color, #061b2b);
    --input-font-family: var(--memory-font-display-default-family, sans-serif);
    --input-font-size: var(--memory-font-display-sm-size, 1rem);
    --input-line-height: var(--memory-font-display-sm-line-height, 1.5rem);
    --input-padding: var(--memory-size-spacing-sm, 0.75rem);
  }

  input {
    background: var(--input-background-color);
    border: var(--input-border-width) var(--input-border-style)
      var(--input-border-color);
    border-radius: var(--input-border-radius);
    box-sizing: border-box;
    color: var(--input-text-color);
    font-family: var(--input-font-family);
    font-size: var(--input-font-size);
    line-height: var(--input-line-height);
    min-width: 238px;
    padding: var(--input-padding);
  }

  input:focus {
    outline: none !important;
  }
`;
