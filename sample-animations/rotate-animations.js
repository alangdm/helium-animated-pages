import { html } from '@polymer/lit-element';

/* In animations */
export const RotateInNewspaper = html`
<style>
.page-rotateInNewspaper {
	transform-origin: 50% 50%;
	animation: rotateInNewspaper .5s both ease-out;
}
@keyframes rotateInNewspaper {
	from { transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
}
</style>
`;

/* Out animations */

export const RotateRightSideFirst = html`
<style>
.page-rotateRightSideFirst {
	transform-origin: 0% 50%;
	animation: rotateRightSideFirst .8s both ease-in;
  z-index: -1;
}
@keyframes rotateRightSideFirst {
	0% { }
	40% { transform: rotateY(15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}
</style>
`;

export const RotateLeftSideFirst = html`
<style>
.page-rotateLeftSideFirst {
	transform-origin: 100% 50%;
	animation: rotateLeftSideFirst .8s both ease-in;
  z-index: -1;
}
@keyframes rotateLeftSideFirst {
	0% { }
	40% { transform: rotateY(-15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}
</style>
`;

export const RotateTopSideFirst = html`
<style>
.page-rotateTopSideFirst {
	transform-origin: 50% 100%;
	animation: rotateTopSideFirst .8s both ease-in;
  z-index: -1;
}
@keyframes rotateTopSideFirst {
	0% { }
	40% { transform: rotateX(15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}
</style>
`;

export const RotateBottomSideFirst = html`
<style>
.page-rotateBottomSideFirst {
	transform-origin: 50% 0%;
	animation: rotateBottomSideFirst .8s both ease-in;
  z-index: -1;
}
@keyframes rotateBottomSideFirst {
	0% { }
	40% { transform: rotateX(-15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}
</style>
`;

export const RotateFall = html`
<style>
.page-rotateFall {
	transform-origin: 0% 0%;
	animation: rotateFall 1s both ease-in;
  z-index: 999;
}
@keyframes rotateFall {
	0% { transform: rotateZ(0deg); }
	20% { transform: rotateZ(10deg); animation-timing-function: ease-out; }
	40% { transform: rotateZ(17deg); }
	60% { transform: rotateZ(16deg); }
	100% { transform: translateY(100%) rotateZ(17deg); }
}
</style>
`;

export const RotateOutNewspaper = html`
<style>
.page-rotateOutNewspaper {
	transform-origin: 50% 50%;
	animation: rotateOutNewspaper .5s both ease-in;
}
@keyframes rotateOutNewspaper {
	from { }
	to { transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
}
</style>
`;
