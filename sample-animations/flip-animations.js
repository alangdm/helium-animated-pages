import { html } from '@polymer/lit-element';

/* In animations */
export const FlipInLeft = html`
<style>
.page-flipInLeft {
	transform-origin: 50% 50%;
	animation: flipInLeft .5s both ease-out;
}
@keyframes flipInLeft {
	from { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
</style>
`;

export const FlipInRight = html`
<style>
.page-flipInRight {
	transform-origin: 50% 50%;
	animation: flipInRight .5s both ease-out;
}
@keyframes flipInRight {
	from { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
</style>
`;

export const FlipInTop = html`
<style>
.page-flipInTop {
	transform-origin: 50% 50%;
	animation: flipInTop .5s both ease-out;
}
@keyframes flipInTop {
	from { transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
</style>
`;

export const FlipInBottom = html`
<style>
.page-flipInBottom {
	transform-origin: 50% 50%;
	animation: flipInBottom .5s both ease-out;
}
@keyframes flipInBottom {
	from { transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
</style>
`;

/* Out animations */
export const FlipOutLeft = html`
<style>
.page-flipOutLeft {
	transform-origin: 50% 50%;
	animation: flipOutLeft .5s both ease-in;
}
@keyframes flipOutLeft {
	from { }
	to { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
</style>
`;

export const FlipOutRight = html`
<style>
.page-flipOutRight {
	transform-origin: 50% 50%;
	animation: flipOutRight .5s both ease-in;
}
@keyframes flipOutRight {
	from { }
	to { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
</style>
`;

export const FlipOutTop = html`
<style>
.page-flipOutTop {
	transform-origin: 50% 50%;
	animation: flipOutTop .5s both ease-in;
}
@keyframes flipOutTop {
	from { }
	to { transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
</style>
`;

export const FlipOutBottom = html`
<style>
.page-flipOutBottom {
	transform-origin: 50% 50%;
	animation: flipOutBottom .5s both ease-in;
}
@keyframes flipOutBottom {
	from { }
	to { transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
</style>
`;
