import { html } from '@polymer/lit-element';

/* In animations */

export const ScaleUp = html`
<style>
.page-scaleUp {
	animation: scaleUp .7s ease both;
  z-index: -1;
}
@keyframes scaleUp {
	from { opacity: 0; transform: scale(.8); }
}
</style>
`;

export const ScaleUpDown = html`
<style>
.page-scaleUpDown {
	animation: scaleUpDown .5s ease both;
}
@keyframes scaleUpDown {
	from { opacity: 0; transform: scale(1.2); }
}
</style>
`;

export const ScaleUpCenter = html`
<style>
.page-scaleUpCenter {
	animation: scaleUpCenter .4s ease-out both;
}
@keyframes scaleUpCenter {
	from { opacity: 0; transform: scale(.7); }
}
</style>
`;

/* Out animations */

export const ScaleDown = html`
<style>
.page-scaleDown {
	animation: scaleDown .7s ease both;
  z-index: -1;
}
@keyframes scaleDown {
	from { }
	to { opacity: 0; transform: scale(.8); }
}
</style>
`;

export const ScaleDownUp = html`
<style>
.page-scaleDownUp {
	animation: scaleDownUp .5s ease both;
}
@keyframes scaleDownUp {
	from { }
	to { opacity: 0; transform: scale(1.2); }
}
</style>
`;

export const ScaleDownCenter = html`
<style>
.page-scaleDownCenter {
	animation: scaleDownCenter .4s ease-in both;
}
@keyframes scaleDownCenter {
	from { }
	to { opacity: 0; transform: scale(.7); }
}
</style>
`;
