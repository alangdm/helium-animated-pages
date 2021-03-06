import { css } from 'lit';

/* In animations */

export const FadeIn = css`
  .page-fadeIn {
    animation: fadeIn 0.7s ease both;
  }
  @keyframes fadeIn {
    from {
      opacity: 0.3;
    }
    to {
    }
  }
`;

/* Out animations */

export const FadeOut = css`
  .page-fadeOut {
    animation: fadeOut 0.7s ease both;
    z-index: -1;
  }
  @keyframes fadeOut {
    from {
    }
    to {
      opacity: 0;
    }
  }
`;
