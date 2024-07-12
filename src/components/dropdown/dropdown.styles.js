import { css } from 'lit';

export default css`
  :host {
    --dropdown-toggle-gap: var(--memory-size-xs-spacing, 0.5rem);
    --dropdown-toggle-font-size: var(--memory-font-display-md-size, 1.25rem);
    --dropdown-toggle-focus-border-width: var(
      --memory-size-sm-border-width,
      0.063rem
    );
    --dropdown-toggle-focus-border-style: solid;
    --dropdown-toggle-focus-border-color: var(
      --memory-secondary-color,
      #ffffff
    );
    --dropdown-menu-item-line-height: var(
      --memory-font-display-md-line-height,
      1.75rem
    );
    --dropdown-menu-background-color: var(--memory-primary-color, #061b2b);
    --dropdown-menu-border-radius: var(--memory-size-sm-border-radius, 0.5rem);
    --dropdown-menu-item-font-size: var(--memory-font-display-sm-size, 1rem);
    --dropdown-menu-item-line-height: var(
      --memory-font-display-sm-line-height,
      1.5rem
    );
    --dropdown-menu-item-padding: var(--memory-size-xs-spacing, 0.5rem);
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-toggle {
    display: flex;
    align-items: center;
    gap: var(--dropdown-toggle-gap);
    background-color: transparent;
    color: white;
    padding: var(--dropdown-toggle-padding) 0 var(--dropdown-toggle-padding)
      var(--dropdown-toggle-padding);
    font-size: var(--dropdown-toggle-font-size);
    line-height: var(--dropdown-toggle-line-height);
    border: none;
    cursor: pointer;
    outline: none;
    position: relative;
  }

  .dropdown-toggle:focus-visible {
    outline: var(--dropdown-toggle-focus-border-width)
      var(--dropdown-toggle-focus-border-style)
      var(--dropdown-toggle-focus-border-color);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #061b2b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: var(--dropdown-menu-border-radius);
    display: none;
    z-index: 1000;
  }

  .dropdown-menu.opened {
    display: block;
  }

  .dropdown-menu-item {
    font-size: var(--dropdown-menu-item-font-size);
    line-height: var(--dropdown-menu-item-line-height);
    padding: var(--dropdown-menu-item-padding);
    color: white;
    cursor: pointer;
  }
`;
