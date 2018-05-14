import { html } from '@polymer/lit-element';

/* In animations */
export const RotateSidesIn = html`
<style>
.page-rotateSidesIn {
	transform-origin: 150% 50%;
	animation: rotateSidesIn .5s both ease-out;
}
@keyframes rotateSidesIn {
	from { opacity: 0; transform: translateZ(-500px) rotateY(-90deg); }
}
</style>
`;

/* Out animations */
export const RotateSidesOut = html`
<style>
.page-rotateSidesOut {
	transform-origin: -50% 50%;
	animation: rotateSidesOut .5s both ease-in;
}
@keyframes rotateSidesOut {
	from { }
	to { opacity: 0; transform: translateZ(-500px) rotateY(90deg); }
}
</style>
`;
