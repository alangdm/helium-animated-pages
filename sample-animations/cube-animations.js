import { html } from '@polymer/lit-element';

/* In animations */
export const RotateCubeLeftIn = html`
<style>
.page-rotateCubeLeftIn {
	transform-origin: 0% 50%;
	animation: rotateCubeLeftIn .6s both ease-in;
}
@keyframes rotateCubeLeftIn {
	0% { opacity: .3; transform: translateX(100%) rotateY(90deg); }
	50% { animation-timing-function: ease-out; transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
}
</style>
`;

export const RotateCubeRightIn = html`
<style>
.page-rotateCubeRightIn {
	transform-origin: 100% 50%;
	animation: rotateCubeRightIn .6s both ease-in;
}
@keyframes rotateCubeRightIn {
	0% { opacity: .3; transform: translateX(-100%) rotateY(-90deg); }
	50% { animation-timing-function: ease-out; transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
}
</style>
`;

export const RotateCubeTopIn = html`
<style>
.page-rotateCubeTopIn {
	transform-origin: 50% 0%;
	animation: rotateCubeTopIn .6s both ease-in;
}
@keyframes rotateCubeTopIn {
	0% { opacity: .3; transform: translateY(100%) rotateX(-90deg); }
	50% { animation-timing-function: ease-out; transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
}
</style>
`;

export const RotateCubeBottomIn = html`
<style>
.page-rotateCubeBottomIn {
	transform-origin: 50% 100%;
	animation: rotateCubeBottomIn .6s both ease-in;
}
@keyframes rotateCubeBottomIn {
	0% { opacity: .3; transform: translateY(-100%) rotateX(90deg); }
	50% { animation-timing-function: ease-out; transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
}
</style>
`;

/* Out animations */
export const RotateCubeLeftOut = html`
<style>
.page-rotateCubeLeftOut {
	transform-origin: 100% 50%;
	animation: rotateCubeLeftOut .6s both ease-in;
  z-index: 999;
}
@keyframes rotateCubeLeftOut {
	0% { }
	50% { animation-timing-function: ease-out; transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
	100% { opacity: .3; transform: translateX(-100%) rotateY(-90deg); }
}
</style>
`;

export const RotateCubeRightOut = html`
<style>
.page-rotateCubeRightOut {
	transform-origin: 0% 50%;
	animation: rotateCubeRightOut .6s both ease-in;
  z-index: 999;
}
@keyframes rotateCubeRightOut {
	0% { }
	50% { animation-timing-function: ease-out; transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
	100% { opacity: .3; transform: translateX(100%) rotateY(90deg); }
}
</style>
`;

export const RotateCubeTopOut = html`
<style>
.page-rotateCubeTopOut {
	transform-origin: 50% 100%;
	animation: rotateCubeTopOut .6s both ease-in;
  z-index: 999;
}
@keyframes rotateCubeTopOut {
	0% {}
	50% { animation-timing-function: ease-out; transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
	100% { opacity: .3; transform: translateY(-100%) rotateX(90deg); }
}
</style>
`;

export const RotateCubeBottomOut = html`
<style>
.page-rotateCubeBottomOut {
	transform-origin: 50% 0%;
	animation: rotateCubeBottomOut .6s both ease-in;
  z-index: 999;
}
@keyframes rotateCubeBottomOut {
	0% { }
	50% { animation-timing-function: ease-out; transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
	100% { opacity: .3; transform: translateY(100%) rotateX(-90deg); }
}
</style>
`;
