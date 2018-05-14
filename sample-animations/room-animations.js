import { html } from '@polymer/lit-element';

/* In animations */
export const RotateRoomLeftIn = html`
<style>
.page-rotateRoomLeftIn {
	transform-origin: 0% 50%;
	animation: rotateRoomLeftIn .8s both ease;
}
@keyframes rotateRoomLeftIn {
	from { opacity: .3; transform: translateX(100%) rotateY(-90deg); }
}
</style>
`;

export const RotateRoomRightIn = html`
<style>
.page-rotateRoomRightIn {
	transform-origin: 100% 50%;
	animation: rotateRoomRightIn .8s both ease;
}
@keyframes rotateRoomRightIn {
	from { opacity: .3; transform: translateX(-100%) rotateY(90deg); }
}
</style>
`;

export const RotateRoomTopIn = html`
<style>
.page-rotateRoomTopIn {
	transform-origin: 50% 0%;
	animation: rotateRoomTopIn .8s both ease;
}
@keyframes rotateRoomTopIn {
	from { opacity: .3; transform: translateY(100%) rotateX(90deg); }
}
</style>
`;

export const RotateRoomBottomIn = html`
<style>
.page-rotateRoomBottomIn {
	transform-origin: 50% 100%;
	animation: rotateRoomBottomIn .8s both ease;
}
@keyframes rotateRoomBottomIn {
	from { opacity: .3; transform: translateY(-100%) rotateX(-90deg); }
}
</style>
`;

/* Out animations */
export const RotateRoomLeftOut = html`
<style>
.page-rotateRoomLeftOut {
	transform-origin: 100% 50%;
	animation: rotateRoomLeftOut .8s both ease;
}
@keyframes rotateRoomLeftOut {
	from { }
	to { opacity: .3; transform: translateX(-100%) rotateY(90deg); }
}
</style>
`;

export const RotateRoomRightOut = html`
<style>
.page-rotateRoomRightOut {
	transform-origin: 0% 50%;
	animation: rotateRoomRightOut .8s both ease;
}
@keyframes rotateRoomRightOut {
	from { }
	to { opacity: .3; transform: translateX(100%) rotateY(-90deg); }
}
</style>
`;

export const RotateRoomTopOut = html`
<style>
.page-rotateRoomTopOut {
	transform-origin: 50% 100%;
	animation: rotateRoomTopOut .8s both ease;
}
@keyframes rotateRoomTopOut {
	from { }
	to { opacity: .3; transform: translateY(-100%) rotateX(-90deg); }
}
</style>
`;

export const RotateRoomBottomOut = html`
<style>
.page-rotateRoomBottomOut {
	transform-origin: 50% 0%;
	animation: rotateRoomBottomOut .8s both ease;
}
@keyframes rotateRoomBottomOut {
	from { }
	to { opacity: .3; transform: translateY(100%) rotateX(90deg); }
}
</style>
`;
