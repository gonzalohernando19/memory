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
    --input-margin-top: var(--memory-size-spacing-sm, 0.75rem);
    --input-label-color: var(--memory-primary-color, #061b2b);
    --input-label-font-family: var(
      --memory-font-display-default-family,
      sans-serif
    );
    --input-label-font-size: var(--memory-font-display-md-size, 1.25rem);
    --input-label-line-height: var(
      --memory-font-display-md-line-height,
      1.75rem
    );
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
    margin-top: var(--input-margin-top);
    min-width: 238px;
    padding: var(--input-padding);
  }

  input:focus {
    outline: none !important;
  }

  label {
    color: var(--input-label-color);
    font-family: var(--input-label-font-family);
    font-size: var(--input-label-font-size);
    font-weight: bold;
    line-height: var(--input-label-line-height);
    text-align: center;
  }
`;
