import { html } from '@polymer/lit-element';

/* In animations */
export const RotateCarouselLeftIn = html`
<style>
.page-rotateCarouselLeftIn {
	transform-origin: 0% 50%;
	animation: rotateCarouselLeftIn .8s both ease;
}
@keyframes rotateCarouselLeftIn {
	from { opacity: .3; transform: translateX(200%) scale(.4) rotateY(65deg); }
}
</style>
`;

export const RotateCarouselRightIn = html`
<style>
.page-rotateCarouselRightIn {
	transform-origin: 100% 50%;
	animation: rotateCarouselRightIn .8s both ease;
}
@keyframes rotateCarouselRightIn {
	from { opacity: .3; transform: translateX(-200%) scale(.4) rotateY(-65deg); }
}
</style>
`;

export const RotateCarouselTopIn = html`
<style>
.page-rotateCarouselTopIn {
	transform-origin: 50% 0%;
	animation: rotateCarouselTopIn .8s both ease;
}
@keyframes rotateCarouselTopIn {
	from { opacity: .3; transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
</style>
`;

export const RotateCarouselBottomIn = html`
<style>
.page-rotateCarouselBottomIn {
	transform-origin: 50% 100%;
	animation: rotateCarouselBottomIn .8s both ease;
}
@keyframes rotateCarouselBottomIn {
	from { opacity: .3; transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
</style>
`;

/* Out animations */
export const RotateCarouselLeftOut = html`
<style>
.page-rotateCarouselLeftOut {
	transform-origin: 100% 50%;
	animation: rotateCarouselLeftOut .8s both ease;
}
@keyframes rotateCarouselLeftOut {
	from { }
	to { opacity: .3; transform: translateX(-150%) scale(.4) rotateY(-65deg); }
}
</style>
`;

export const RotateCarouselRightOut = html`
<style>
.page-rotateCarouselRightOut {
	transform-origin: 0% 50%;
	animation: rotateCarouselRightOut .8s both ease;
}
@keyframes rotateCarouselRightOut {
	from { }
	to { opacity: .3; transform: translateX(200%) scale(.4) rotateY(65deg); }
}
</style>
`;

export const RotateCarouselTopOut = html`
<style>
.page-rotateCarouselTopOut {
	transform-origin: 50% 100%;
	animation: rotateCarouselTopOut .8s both ease;
}
@keyframes rotateCarouselTopOut {
	from { }
	to { opacity: .3; transform: translateY(-200%) scale(.4) rotateX(65deg); }
}

</style>
`;

export const RotateCarouselBottomOut = html`
<style>
.page-rotateCarouselBottomOut {
	transform-origin: 50% 0%;
	animation: rotateCarouselBottomOut .8s both ease;
}
@keyframes rotateCarouselBottomOut {
	from { }
	to { opacity: .3; transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
</style>
`;
