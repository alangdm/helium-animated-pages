import { css } from 'lit-element';

/* In animations */
export const RotateUnfoldLeft = css`
  .page-rotateUnfoldLeft {
    transform-origin: 100% 50%;
    animation: rotateUnfoldLeft 0.7s both ease;
  }
  @keyframes rotateUnfoldLeft {
    from {
      opacity: 0;
      transform: translateX(-100%) rotateY(-90deg);
    }
  }
`;

export const RotateUnfoldRight = css`
  .page-rotateUnfoldRight {
    transform-origin: 0% 50%;
    animation: rotateUnfoldRight 0.7s both ease;
  }
  @keyframes rotateUnfoldRight {
    from {
      opacity: 0;
      transform: translateX(100%) rotateY(90deg);
    }
  }
`;

export const RotateUnfoldTop = css`
  .page-rotateUnfoldTop {
    transform-origin: 50% 100%;
    animation: rotateUnfoldTop 0.7s both ease;
  }
  @keyframes rotateUnfoldTop {
    from {
      opacity: 0;
      transform: translateY(-100%) rotateX(90deg);
    }
  }
`;

export const RotateUnfoldBottom = css`
  .page-rotateUnfoldBottom {
    transform-origin: 50% 0%;
    animation: rotateUnfoldBottom 0.7s both ease;
  }
  @keyframes rotateUnfoldBottom {
    from {
      opacity: 0;
      transform: translateY(100%) rotateX(-90deg);
    }
  }
`;

/* Out animations */
export const RotateFoldLeft = css`
  .page-rotateFoldLeft {
    transform-origin: 100% 50%;
    animation: rotateFoldLeft 0.7s both ease;
  }
  @keyframes rotateFoldLeft {
    from {
    }
    to {
      opacity: 0;
      transform: translateX(-100%) rotateY(-90deg);
    }
  }
`;

export const RotateFoldRight = css`
  .page-rotateFoldRight {
    transform-origin: 0% 50%;
    animation: rotateFoldRight 0.7s both ease;
  }
  @keyframes rotateFoldRight {
    from {
    }
    to {
      opacity: 0;
      transform: translateX(100%) rotateY(90deg);
    }
  }
`;

export const RotateFoldTop = css`
  .page-rotateFoldTop {
    transform-origin: 50% 100%;
    animation: rotateFoldTop 0.7s both ease;
  }
  @keyframes rotateFoldTop {
    from {
    }
    to {
      opacity: 0;
      transform: translateY(-100%) rotateX(90deg);
    }
  }
`;

export const RotateFoldBottom = css`
  .page-rotateFoldBottom {
    transform-origin: 50% 0%;
    animation: rotateFoldBottom 0.7s both ease;
  }
  @keyframes rotateFoldBottom {
    from {
    }
    to {
      opacity: 0;
      transform: translateY(100%) rotateX(-90deg);
    }
  }
`;
