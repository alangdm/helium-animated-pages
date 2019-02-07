import { css } from 'lit-element';

/* In animations */
export const RotateSidesIn = css`
.page-rotateSidesIn {
	transform-origin: 150% 50%;
	animation: rotateSidesIn .5s both ease-out;
}
@keyframes rotateSidesIn {
	from { opacity: 0; transform: translateZ(-500px) rotateY(-90deg); }
}
`;

/* Out animations */
export const RotateSidesOut = css`
.page-rotateSidesOut {
	transform-origin: -50% 50%;
	animation: rotateSidesOut .5s both ease-in;
}
@keyframes rotateSidesOut {
	from { }
	to { opacity: 0; transform: translateZ(-500px) rotateY(90deg); }
}
`;
