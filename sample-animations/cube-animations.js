import { css } from 'lit';

/* In animations */
export const RotateCubeLeftIn = css`
  .page-rotateCubeLeftIn {
    transform-origin: 0% 50%;
    animation: rotateCubeLeftIn 0.6s both ease-in;
  }
  @keyframes rotateCubeLeftIn {
    0% {
      opacity: 0.3;
      transform: translateX(100%) rotateY(90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(50%) translateZ(-200px) rotateY(45deg);
    }
  }
`;

export const RotateCubeRightIn = css`
  .page-rotateCubeRightIn {
    transform-origin: 100% 50%;
    animation: rotateCubeRightIn 0.6s both ease-in;
  }
  @keyframes rotateCubeRightIn {
    0% {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(-90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    }
  }
`;

export const RotateCubeTopIn = css`
  .page-rotateCubeTopIn {
    transform-origin: 50% 0%;
    animation: rotateCubeTopIn 0.6s both ease-in;
  }
  @keyframes rotateCubeTopIn {
    0% {
      opacity: 0.3;
      transform: translateY(100%) rotateX(-90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(50%) translateZ(-200px) rotateX(-45deg);
    }
  }
`;

export const RotateCubeBottomIn = css`
  .page-rotateCubeBottomIn {
    transform-origin: 50% 100%;
    animation: rotateCubeBottomIn 0.6s both ease-in;
  }
  @keyframes rotateCubeBottomIn {
    0% {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(90deg);
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(-50%) translateZ(-200px) rotateX(45deg);
    }
  }
`;

/* Out animations */
export const RotateCubeLeftOut = css`
  .page-rotateCubeLeftOut {
    transform-origin: 100% 50%;
    animation: rotateCubeLeftOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeLeftOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(-90deg);
    }
  }
`;

export const RotateCubeRightOut = css`
  .page-rotateCubeRightOut {
    transform-origin: 0% 50%;
    animation: rotateCubeRightOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeRightOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateX(50%) translateZ(-200px) rotateY(45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateX(100%) rotateY(90deg);
    }
  }
`;

export const RotateCubeTopOut = css`
  .page-rotateCubeTopOut {
    transform-origin: 50% 100%;
    animation: rotateCubeTopOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeTopOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(-50%) translateZ(-200px) rotateX(45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(90deg);
    }
  }
`;

export const RotateCubeBottomOut = css`
  .page-rotateCubeBottomOut {
    transform-origin: 50% 0%;
    animation: rotateCubeBottomOut 0.6s both ease-in;
    z-index: 999;
  }
  @keyframes rotateCubeBottomOut {
    0% {
    }
    50% {
      animation-timing-function: ease-out;
      transform: translateY(50%) translateZ(-200px) rotateX(-45deg);
    }
    100% {
      opacity: 0.3;
      transform: translateY(100%) rotateX(-90deg);
    }
  }
`;
