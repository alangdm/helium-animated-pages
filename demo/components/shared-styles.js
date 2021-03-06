import { css } from 'lit';

export const sharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  select,
  input,
  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    height: 40px;
    color: var(--main-text-color);
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
    padding: 0.5rem 0.25rem;
    font-family: inherit;
  }

  button {
    color: var(--primary-color);
    padding: 0.5rem;
    font-weight: bold;
  }

  select:focus,
  input:focus,
  button:focus {
    outline: none;
    box-shadow: 0px 1px 1px 1px var(--primary-color);
  }

  button:hover,
  button:active {
    background-color: var(--primary-color);
    color: var(--primary-contrast-color);
  }

  button:active {
    filter: opacity(0.8);
  }

  label {
    color: var(--secondary-text-color);
  }

  p {
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  p,
  pre {
    width: min(100%, 120ch);
  }

  code,
  pre {
    font-family: var(--monospace-font);
    overflow: scroll;
  }

  pre {
    background: var(--code-background);
    color: var(--code-color);
    padding: 1rem;
  }

  p a,
  p a:visited,
  p a:hover {
    color: var(--accent-color);
  }

  .container {
    margin-bottom: 0.5rem;
  }

  .sample-pages > * {
    padding: 0.75rem;
    border: 1px solid var(--primary-color);
    border-radius: var(--border-radius);
  }

  .sample-pages > *:nth-child(odd) {
    background: var(--primary-color);
    color: var(--primary-contrast-color);
  }
  .sample-pages > *:nth-child(even) {
    background: var(--primary-contrast-color);
    color: var(--primary-color);
  }
`;
