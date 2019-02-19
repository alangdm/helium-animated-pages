import { css } from 'lit-element';

/* In animations */

export const ScaleUp = css`
  .page-scaleUp {
    animation: scaleUp 0.7s ease both;
    z-index: -1;
  }
  @keyframes scaleUp {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;

export const ScaleUpDown = css`
  .page-scaleUpDown {
    animation: scaleUpDown 0.5s ease both;
  }
  @keyframes scaleUpDown {
    from {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`;

export const ScaleUpCenter = css`
  .page-scaleUpCenter {
    animation: scaleUpCenter 0.4s ease-out both;
  }
  @keyframes scaleUpCenter {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`;

/* Out animations */

export const ScaleDown = css`
  .page-scaleDown {
    animation: scaleDown 0.7s ease both;
    z-index: -1;
  }
  @keyframes scaleDown {
    from {
    }
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;

export const ScaleDownUp = css`
  .page-scaleDownUp {
    animation: scaleDownUp 0.5s ease both;
  }
  @keyframes scaleDownUp {
    from {
    }
    to {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`;

export const ScaleDownCenter = css`
  .page-scaleDownCenter {
    animation: scaleDownCenter 0.4s ease-in both;
  }
  @keyframes scaleDownCenter {
    from {
    }
    to {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`;
