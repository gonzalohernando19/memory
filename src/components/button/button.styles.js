import { css } from 'lit';

export default css`
  :host {
    --button-background-color: var(--memory-primary-color, #061b2b);
    --button-border-width: var(--memory-size-sm-border-width, 0.063rem);
    --button-border-style: solid;
    --button-border-color: var(--memory-primary-color, #061b2b);
    --button-border-radius: var(--memory-size-sm-border-radius, 0.5rem);
    --button-text-color: var(--memory-secondary-color, #ffffff);
    --button-font-family: var(--memory-font-display-default-family, sans-serif);
    --button-font-size: var(--memory-font-display-md-size, 1.25rem);
    --button-line-height: var(--memory-font-display-sm-line-height, 1.5rem);
    --button-padding: var(--memory-size-sm-spacing, 0.75rem);
    --button-background-color-hover: var(--memory-tertiary-color, #3498db);
    --button-border-color-hover: var(--memory-tertiary-color, #3498db);
  }

  button {
    background-color: var(--button-background-color);
    border: var(--button-border-width) var(--button-border-style)
      var(--button-border-color);
    border-radius: var(--button-border-radius);
    color: var(--button-text-color);
    cursor: pointer;
    font-family: var(--button-font-family);
    font-size: var(--button-font-size);
    line-height: var(--button-line-height);
    padding: var(--button-padding);
    text-align: center;
    width: 100%;
  }

  button:hover {
    background-color: var(--button-background-color-hover);
    border-color: var(--button-border-color-hover);
  }

  button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  @media (hover: none) {
    button:hover {
      background-color: var(--button-background-color);
      cursor: default;
    }
  }
`;
