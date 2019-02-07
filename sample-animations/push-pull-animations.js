import { css } from 'lit-element';

/* In animations */

export const RotatePullLeft = css`
.page-rotatePullLeft {
	transform-origin: 0% 50%;
	animation: rotatePullLeft .5s both ease;
}
@keyframes rotatePullLeft {
	from { opacity: 0; transform: rotateY(90deg); }
}
`;

export const RotatePullRight = css`
.page-rotatePullRight {
	transform-origin: 100% 50%;
	animation: rotatePullRight .5s both ease;
}
@keyframes rotatePullRight {
	from { opacity: 0; transform: rotateY(-90deg); }
}
`;

export const RotatePullTop = css`
.page-rotatePullTop {
	transform-origin: 50% 0%;
	animation: rotatePullTop .5s both ease;
}
@keyframes rotatePullTop {
	from { opacity: 0; transform: rotateX(-90deg); }
}
`;

export const RotatePullBottom = css`
.page-rotatePullBottom {
	transform-origin: 50% 100%;
	animation: rotatePullBottom .5s both ease;
}
@keyframes rotatePullBottom {
	from { opacity: 0; transform: rotateX(90deg); }
}
`;

/* Out animations */

export const RotatePushLeft = css`
.page-rotatePushLeft {
	transform-origin: 0% 50%;
	animation: rotatePushLeft .8s both ease;
}
@keyframes rotatePushLeft {
	from { }
	to { opacity: 0; transform: rotateY(90deg); }
}
`;

export const RotatePushRight = css`
.page-rotatePushRight {
	transform-origin: 100% 50%;
	animation: rotatePushRight .8s both ease;
}
@keyframes rotatePushRight {
	from { }
	to { opacity: 0; transform: rotateY(-90deg); }
}
`;

export const RotatePushTop = css`
.page-rotatePushTop {
	transform-origin: 50% 0%;
	animation: rotatePushTop .8s both ease;
}
@keyframes rotatePushTop {
	from { }
	to { opacity: 0; transform: rotateX(-90deg); }
}
`;

export const RotatePushBottom = css`
.page-rotatePushBottom {
	transform-origin: 50% 100%;
	animation: rotatePushBottom .8s both ease;
}
@keyframes rotatePushBottom {
	from { }
	to { opacity: 0; transform: rotateX(90deg); }
}
`;
