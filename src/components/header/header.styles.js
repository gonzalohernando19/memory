import { css } from 'lit';

export default css`
  :host {
    width: 100%;
    --header-background-color: var(--memory-primary-color, #061b2b);
    --header-text-color: var(--memory-secondary-color, #ffffff);
    --header-font-family: var(--memory-font-display-default-family, sans-serif);
    --header-font-size: var(--memory-font-display-lg-size, 24px);
    --header-line-height: var(--memory-font-display-lg-size, 24px);
    --header-padding: var(--memory-size-spacing-md, 20px);
  }

  div {
    box-sizing: border-box;
    align-items: center;
    background-color: var(--header-background-color);
    color: var(--header-text-color);
    display: flex;
    font-family: var(--header-font-family);
    font-size: var(--header-font-size);
    justify-content: space-between;
    line-height: var(--header-line-height);
    padding: var(--header-padding);
  }
`;
