import { html } from '@polymer/lit-element';

/* In animations */
export const RotateUnfoldLeft = html`
<style>
.page-rotateUnfoldLeft {
	transform-origin: 100% 50%;
	animation: rotateUnfoldLeft .7s both ease;
}
@keyframes rotateUnfoldLeft {
	from { opacity: 0; transform: translateX(-100%) rotateY(-90deg); }
}
</style>
`;

export const RotateUnfoldRight = html`
<style>
.page-rotateUnfoldRight {
	transform-origin: 0% 50%;
	animation: rotateUnfoldRight .7s both ease;
}
@keyframes rotateUnfoldRight {
	from { opacity: 0; transform: translateX(100%) rotateY(90deg); }
}
</style>
`;

export const RotateUnfoldTop = html`
<style>
.page-rotateUnfoldTop {
	transform-origin: 50% 100%;
	animation: rotateUnfoldTop .7s both ease;
}
@keyframes rotateUnfoldTop {
	from { opacity: 0; transform: translateY(-100%) rotateX(90deg); }
}
</style>
`;

export const RotateUnfoldBottom = html`
<style>
.page-rotateUnfoldBottom {
	transform-origin: 50% 0%;
	animation: rotateUnfoldBottom .7s both ease;
}
@keyframes rotateUnfoldBottom {
	from { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
}
</style>
`;
/* Out animations */

export const RotateFoldLeft = html`
<style>
.page-rotateFoldLeft {
	transform-origin: 100% 50%;
	animation: rotateFoldLeft .7s both ease;
}
@keyframes rotateFoldLeft {
	from { }
	to { opacity: 0; transform: translateX(-100%) rotateY(-90deg); }
}
</style>
`;

export const RotateFoldRight = html`
<style>
.page-rotateFoldRight {
	transform-origin: 0% 50%;
	animation: rotateFoldRight .7s both ease;
}
@keyframes rotateFoldRight {
	from { }
	to { opacity: 0; transform: translateX(100%) rotateY(90deg); }
}
</style>
`;

export const RotateFoldTop = html`
<style>
.page-rotateFoldTop {
	transform-origin: 50% 100%;
	animation: rotateFoldTop .7s both ease;
}
@keyframes rotateFoldTop {
	from { }
	to { opacity: 0; transform: translateY(-100%) rotateX(90deg); }
}
</style>
`;

export const RotateFoldBottom = html`
<style>
.page-rotateFoldBottom {
	transform-origin: 50% 0%;
	animation: rotateFoldBottom .7s both ease;
}
@keyframes rotateFoldBottom {
	from { }
	to { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
}
</style>
`;
