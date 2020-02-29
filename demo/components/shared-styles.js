import { css } from 'lit-element';

export const sharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    color: var(--main-text-color);
    border: 1px solid var(--primary-color);
    padding: 0.5rem 0.25rem;
    font-family: inherit;
  }

  label {
    color: var(--secondary-text-color);
  }
`;
