import { css } from 'lit';

/* In animations */
export const RotateRoomLeftIn = css`
  .page-rotateRoomLeftIn {
    transform-origin: 0% 50%;
    animation: rotateRoomLeftIn 0.8s both ease;
  }
  @keyframes rotateRoomLeftIn {
    from {
      opacity: 0.3;
      transform: translateX(100%) rotateY(-90deg);
    }
  }
`;

export const RotateRoomRightIn = css`
  .page-rotateRoomRightIn {
    transform-origin: 100% 50%;
    animation: rotateRoomRightIn 0.8s both ease;
  }
  @keyframes rotateRoomRightIn {
    from {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(90deg);
    }
  }
`;

export const RotateRoomTopIn = css`
  .page-rotateRoomTopIn {
    transform-origin: 50% 0%;
    animation: rotateRoomTopIn 0.8s both ease;
  }
  @keyframes rotateRoomTopIn {
    from {
      opacity: 0.3;
      transform: translateY(100%) rotateX(90deg);
    }
  }
`;

export const RotateRoomBottomIn = css`
  .page-rotateRoomBottomIn {
    transform-origin: 50% 100%;
    animation: rotateRoomBottomIn 0.8s both ease;
  }
  @keyframes rotateRoomBottomIn {
    from {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(-90deg);
    }
  }
`;

/* Out animations */
export const RotateRoomLeftOut = css`
  .page-rotateRoomLeftOut {
    transform-origin: 100% 50%;
    animation: rotateRoomLeftOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomLeftOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(-100%) rotateY(90deg);
    }
  }
`;

export const RotateRoomRightOut = css`
  .page-rotateRoomRightOut {
    transform-origin: 0% 50%;
    animation: rotateRoomRightOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomRightOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateX(100%) rotateY(-90deg);
    }
  }
`;

export const RotateRoomTopOut = css`
  .page-rotateRoomTopOut {
    transform-origin: 50% 100%;
    animation: rotateRoomTopOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomTopOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(-100%) rotateX(-90deg);
    }
  }
`;

export const RotateRoomBottomOut = css`
  .page-rotateRoomBottomOut {
    transform-origin: 50% 0%;
    animation: rotateRoomBottomOut 0.8s both ease;
    z-index: 999;
  }
  @keyframes rotateRoomBottomOut {
    from {
    }
    to {
      opacity: 0.3;
      transform: translateY(100%) rotateX(90deg);
    }
  }
`;
