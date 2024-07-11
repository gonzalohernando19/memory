import { css } from 'lit';

export default css`
  :host {
    width: 100%;
    font-family: var(--home-font-family);
    --game-main-padding: var(--memory-size-spacing-md, 1.25rem);
    --game-container-gap: var(--memory-size-spacing-md, 1.25rem);
    --game-font-family: var(--memory-font-display-default-family, sans-serif);
    --game-h1-font-size: var(--memory-font-display-md-size, 1.25rem);
    --game-h1-line-height: var(--memory-font-display-md-line-height, 1.75rem);
    --game-score-font-size: var(--memory-font-display-lg-size, 1.75rem);
    --game-score-line-height: var(--memory-font-display-lg-line-height, 2rem);
    --game-buttons-gap: var(--memory-size-spacing-sm, 1rem);
    --game-buttons-padding: var(--memory-size-spacing-lg, 1.5rem);
    --game-number-button-font-size: var(--memory-font-display-xl-size, 2.5rem);
    --game-number-button-line-height: var(
      --memory-font-display-xl-line-height,
      2.5rem
    );
    --game-number-button-border-radius: var(
      --rps-size-border-radius-sm,
      0.5rem
    );
    --game-number-button--border-width: var(
      --memory-size-md-border-width,
      0.25rem
    );
    --game-number-button-border-style: solid;
    --game-number-button-border-color: var(--memory-primary-color, #061b2b);
    --game-number-button-color: var(--memory-primary-color, #061b2b);
    --game-number-button-color-hover: var(--memory-tertiary-color, #3498db);
    --game-number-button-border-color-hover: var(
      --memory-tertiary-color,
      #3498db
    );
    --game-number-button-win-color: var(--memory-success-color, #28a745);
    --game-number-button-win-border-color: var(--memory-success-color, #28a745);
    --game-number-button-lose-color: var(--memory-error-color, #cb0000);
    --game-number-button-lose-border-color: var(--memory-error-color, #cb0000);
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: var(--game-main-padding);
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 390px;
    gap: var(--game-container-gap);
  }

  h1 {
    font-size: var(--game-h1-font-size);
    line-height: var(--game-h1-line-height);
    text-align: center;
    margin: 0;
  }

  .score {
    font-size: var(--game-score-font-size);
    line-height: var(--game-score-line-height);
    text-align: right;
  }

  memory-button {
    align-self: center;
    width: 100px;
  }

  .game-buttons {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    gap: var(--game-buttons-gap);
    justify-items: center;
    padding: var(--game-buttons-padding);
  }

  .number-button {
    border-radius: var(--game-number-button-border-radius);
    border: var(--game-number-button-border-width, 0.25rem)
      var(--game-number-button-border-style, solid)
      var(--game-number-button-border-color, #061b2b);
    color: var(--game-number-button-color);
    cursor: pointer;
    font-size: var(--game-number-button-font-size);
    line-height: var(--game-number-button-line-height);
    height: 80px;
    width: 80px;
  }

  .number-button:hover {
    border-color: var(--game-number-button-border-color-hover);
    color: var(--game-number-button-color-hover);
  }

  .number-button[disabled] {
    cursor: default;
    pointer-events: none;
  }

  .win,
  .win:hover {
    border-color: var(--game-number-button-win-border-color);
    color: var(--game-number-button-win-color);
  }

  .lose,
  .lose:hover {
    border-color: var(--game-number-button-lose-border-color);
    color: var(--game-number-button-lose-color);
  }
`;
