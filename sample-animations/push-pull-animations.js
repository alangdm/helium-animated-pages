import { html } from '@polymer/lit-element';

/* In animations */

export const RotatePullLeft = html`
<style>
.page-rotatePullLeft {
	transform-origin: 0% 50%;
	animation: rotatePullLeft .5s both ease;
}
@keyframes rotatePullLeft {
	from { opacity: 0; transform: rotateY(90deg); }
}
</style>
`;

export const RotatePullRight = html`
<style>
.page-rotatePullRight {
	transform-origin: 100% 50%;
	animation: rotatePullRight .5s both ease;
}
@keyframes rotatePullRight {
	from { opacity: 0; transform: rotateY(-90deg); }
}
</style>
`;

export const RotatePullTop = html`
<style>
.page-rotatePullTop {
	transform-origin: 50% 0%;
	animation: rotatePullTop .5s both ease;
}
@keyframes rotatePullTop {
	from { opacity: 0; transform: rotateX(-90deg); }
}
</style>
`;

export const RotatePullBottom = html`
<style>
.page-rotatePullBottom {
	transform-origin: 50% 100%;
	animation: rotatePullBottom .5s both ease;
}
@keyframes rotatePullBottom {
	from { opacity: 0; transform: rotateX(90deg); }
}
</style>
`;

/* Out animations */

export const RotatePushLeft = html`
<style>
.page-rotatePushLeft {
	transform-origin: 0% 50%;
	animation: rotatePushLeft .8s both ease;
}
@keyframes rotatePushLeft {
	from { }
	to { opacity: 0; transform: rotateY(90deg); }
}

</style>
`;

export const RotatePushRight = html`
<style>
.page-rotatePushRight {
	transform-origin: 100% 50%;
	animation: rotatePushRight .8s both ease;
}
@keyframes rotatePushRight {
	from { }
	to { opacity: 0; transform: rotateY(-90deg); }
}
</style>
`;

export const RotatePushTop = html`
<style>
.page-rotatePushTop {
	transform-origin: 50% 0%;
	animation: rotatePushTop .8s both ease;
}
@keyframes rotatePushTop {
	from { }
	to { opacity: 0; transform: rotateX(-90deg); }
}
</style>
`;

export const RotatePushBottom = html`
<style>
.page-rotatePushBottom {
	transform-origin: 50% 100%;
	animation: rotatePushBottom .8s both ease;
}
@keyframes rotatePushBottom {
	from { }
	to { opacity: 0; transform: rotateX(90deg); }
}
</style>
`;
