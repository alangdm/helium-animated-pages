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

/* Out animations */
