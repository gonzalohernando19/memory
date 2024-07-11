import { css } from 'lit';

export default css`
  :host {
    display: flex;
    align-items: center;
    --home-font-family: var(--memory-font-display-default-family, sans-serif);
    --home-logo-background-color: var(--memory-primary-color, #061b2b);
    --home-logo-text-color: var(--memory-secondary-color, #ffffff);
    --home-logo-font-size: var(--memory-font-display-md-size, 1.25rem);
    --home-logo-line-height: var(--memory-font-display-md-line-height, 1.75rem);
    --home-logo-border-radius: var(--memory-border-radius-xl, 100%);
    --home-main-gap: var(--memory-size-spacing-md, 1.25rem);
    --home-main-padding: var(--memory-size-spacing-md, 1.25rem);
    --home-container-gap: var(--memory-size-spacing-md, 1.25rem);
    --home-h1-font-size: var(--memory-font-display-lg-size, 1.75rem);
    --home-h1-line-height: var(--memory-font-display-lg-line-height, 2rem);
    --home-h1-text-color: var(--memory-primary-color, #061b2b);
    --home-error-font-size: var(--memory-font-display-sm-size, 1rem);
    --home-error-line-height: var(--memory-font-display-sm-line-height, 1.5rem);
    --home-error-text-color: var(--memory-error-color, #cb0000);
  }

  .logo {
    align-items: center;
    background-color: var(--home-logo-background-color);
    border-radius: var(--home-logo-border-radius);
    color: var(--home-logo-text-color);
    display: flex;
    font-size: var(--home-logo-font-size);
    justify-content: center;
    line-height: var(--home-logo-line-height);
    height: 3rem;
    width: 3rem;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: var(--home-font-family);
    gap: var(--home-main-gap);
    justify-content: flex-start;
    padding: var(--home-main-padding);
    width: 50%;
  }

  h1 {
    color: var(--home-h1-text-color);
    font-size: var(--home-h1-font-size);
    line-height: var(--home-h1-line-height);
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--home-container-gap);
    width: 238px;
  }

  .error {
    color: var(--home-error-text-color);
    font-size: var(--home-error-font-size);
    line-height: var(--home-error-line-height);
    text-align: center;
  }
`;
