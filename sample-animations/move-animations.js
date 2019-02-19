import { css } from 'lit-element';

/* In animations */

/* Just move */
export const MoveFromLeft = css`
  .page-moveFromLeft {
    animation: moveFromLeft 0.6s ease both;
  }
  @keyframes moveFromLeft {
    from {
      transform: translateX(-100%);
    }
  }
`;

export const MoveFromRight = css`
  .page-moveFromRight {
    animation: moveFromRight 0.6s ease both;
  }
  @keyframes moveFromRight {
    from {
      transform: translateX(100%);
    }
  }
`;

export const MoveFromTop = css`
  .page-moveFromTop {
    animation: moveFromTop 0.6s ease both;
  }
  @keyframes moveFromTop {
    from {
      transform: translateY(-100%);
    }
  }
`;

export const MoveFromBottom = css`
  .page-moveFromBottom {
    animation: moveFromBottom 0.6s ease both;
  }
  @keyframes moveFromBottom {
    from {
      transform: translateY(100%);
    }
  }
`;

/* Move and Fade */
export const MoveFromLeftFade = css`
  .page-moveFromLeftFade {
    animation: moveFromLeftFade 0.6s ease both;
  }
  @keyframes moveFromLeftFade {
    from {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`;

export const MoveFromRightFade = css`
  .page-moveFromRightFade {
    animation: moveFromRightFade 0.6s ease both;
  }
  @keyframes moveFromRightFade {
    from {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`;

export const MoveFromTopFade = css`
  .page-moveFromTopFade {
    animation: moveFromTopFade 0.6s ease both;
  }
  @keyframes moveFromTopFade {
    from {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`;

export const MoveFromBottomFade = css`
  .page-moveFromBottomFade {
    animation: moveFromBottomFade 0.6s ease both;
  }
  @keyframes moveFromBottomFade {
    from {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`;

/* Out animations */

/* Just move */
export const MoveToLeft = css`
  .page-moveToLeft {
    animation: moveToLeft 0.7s ease both;
  }
  @keyframes moveToLeft {
    from {
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const MoveToRight = css`
  .page-moveToRight {
    animation: moveToRight 0.7s ease both;
  }
  @keyframes moveToRight {
    from {
    }
    to {
      transform: translateX(100%);
    }
  }
`;

export const MoveToTop = css`
  .page-moveToTop {
    animation: moveToTop 0.6s ease both;
  }
  @keyframes moveToTop {
    from {
    }
    to {
      transform: translateY(-100%);
    }
  }
`;

export const MoveToBottom = css`
  .page-moveToBottom {
    animation: moveToBottom 0.6s ease both;
  }
  @keyframes moveToBottom {
    from {
    }
    to {
      transform: translateY(100%);
    }
  }
`;

/* Move and fade */
export const MoveToLeftFade = css`
  .page-moveToLeftFade {
    animation: moveToLeftFade 0.7s ease both;
  }
  @keyframes moveToLeftFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(-100%);
    }
  }
`;

export const MoveToRightFade = css`
  .page-moveToRightFade {
    animation: moveToRightFade 0.7s ease both;
  }
  @keyframes moveToRightFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(100%);
    }
  }
`;

export const MoveToTopFade = css`
  .page-moveToTopFade {
    animation: moveToTopFade 0.6s ease both;
  }
  @keyframes moveToTopFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(-100%);
    }
  }
`;

export const MoveToBottomFade = css`
  .page-moveToBottomFade {
    animation: moveToBottomFade 0.6s ease both;
  }
  @keyframes moveToBottomFade {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(100%);
    }
  }
`;
