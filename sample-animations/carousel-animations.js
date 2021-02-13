import { css } from 'lit';

/* In animations */
export const RotateCarouselLeftIn = css`
  .page-rotateCarouselLeftIn {
    transform-origin: 0% 50%;
    animation: rotateCarouselLeftIn 0.8s both ease;
  }
  @keyframes rotateCarouselLeftIn {
    from {
      opacity: 0.3;
      transform: translateX(200%) scale(0.4) rotateY(65deg);
    }
  }
`;

export const RotateCarouselRightIn = css`
  .page-rotateCarouselRightIn {
    transform-origin: 100% 50%;
    animation: rotateCarouselRightIn 0.8s both ease;
  }
  @keyframes rotateCarouselRightIn {
    from {
      opacity: 0.3;
      transform: translateX(-200%) scale(0.4) rotateY(-65deg);
    }
  }
`;

export const RotateCarouselTopIn = css`
  .page-rotateCarouselTopIn {
    transform-origin: 50% 0%;
    animation: rotateCarouselTopIn 0.8s both ease;
  }
  @keyframes rotateCarouselTopIn {
    from {
      opacity: 0.3;
      transform: translateY(200%) scale(0.4) rotateX(-65deg);
    }
  }
`;

export const RotateCarouselBottomIn = css`
  .page-rotateCarouselBottomIn {
    transform-origin: 50% 100%;
    animation: rotateCarouselBottomIn 0.8s both ease;
  }
  @keyframes rotateCarouselBottomIn {
    from {
      opacity: 0.3;
      transform: translateY(-200%) scale(0.4) rotateX(65deg);
    }
  }
`;

/* Out animations */
export const RotateCarouselLeftOut = css`
  .page-rotateCarouselLeftOut {
    transform-origin: 100% 50%;
    animation: rotateCarouselLeftOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselLeftOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(-150%) scale(0.4) rotateY(-65deg);
    }
  }
`;

export const RotateCarouselRightOut = css`
  .page-rotateCarouselRightOut {
    transform-origin: 0% 50%;
    animation: rotateCarouselRightOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselRightOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(200%) scale(0.4) rotateY(65deg);
    }
  }
`;

export const RotateCarouselTopOut = css`
  .page-rotateCarouselTopOut {
    transform-origin: 50% 100%;
    animation: rotateCarouselTopOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselTopOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(-200%) scale(0.4) rotateX(65deg);
    }
  }
`;

export const RotateCarouselBottomOut = css`
  .page-rotateCarouselBottomOut {
    transform-origin: 50% 0%;
    animation: rotateCarouselBottomOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateCarouselBottomOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(200%) scale(0.4) rotateX(-65deg);
    }
  }
`;
