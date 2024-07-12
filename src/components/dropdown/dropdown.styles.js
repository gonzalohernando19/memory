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
    display: inline-block;
    position: relative;
  }

  .dropdown.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .dropdown-toggle {
    align-items: center;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    font-size: var(--dropdown-toggle-font-size);
    gap: var(--dropdown-toggle-gap);
    line-height: var(--dropdown-toggle-line-height);
    outline: none;
    padding: var(--dropdown-toggle-padding) 0 var(--dropdown-toggle-padding)
      var(--dropdown-toggle-padding);
    position: relative;
  }

  .dropdown-toggle:focus-visible {
    outline: var(--dropdown-toggle-focus-border-width)
      var(--dropdown-toggle-focus-border-style)
      var(--dropdown-toggle-focus-border-color);
  }

  .dropdown-menu {
    background-color: #061b2b;
    border-radius: var(--dropdown-menu-border-radius);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
  }

  .dropdown-menu.opened {
    display: block;
  }

  .dropdown-menu-item {
    color: white;
    cursor: pointer;
    font-size: var(--dropdown-menu-item-font-size);
    line-height: var(--dropdown-menu-item-line-height);
    padding: var(--dropdown-menu-item-padding);
  }
`;
