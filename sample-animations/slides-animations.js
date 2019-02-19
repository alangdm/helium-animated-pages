import { css } from 'lit-element';

/* In animations */
export const RotateSlideIn = css`
  .page-rotateSlideIn {
    animation: rotateSlideIn 1s both ease;
  }
  @keyframes rotateSlideIn {
    0%,
    25% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(200%);
    }
    75% {
      opacity: 0.5;
      transform: translateZ(-500px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateX(0);
    }
  }
`;

/* Out animations */
export const RotateSlideOut = css`
  .page-rotateSlideOut {
    animation: rotateSlideOut 1s both ease;
  }
  @keyframes rotateSlideOut {
    0% {
    }
    25% {
      opacity: 0.5;
      transform: translateZ(-500px);
    }
    75% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(-200%);
    }
    100% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(-200%);
    }
  }
`;
