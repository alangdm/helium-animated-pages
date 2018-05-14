import { html } from '@polymer/lit-element';

/* In animations */

export const FadeIn = html`
<style>
.page-fadeIn {
	animation: fadeIn .7s ease both;
}
@keyframes fadeIn {
	from { opacity: 0.3; }
	to { }
}
</style>
`;

/* Out animations */

export const FadeOut = html`
<style>
.page-fadeOut {
	animation: fadeOut .7s ease both;
  z-index: -1;
}
@keyframes fadeOut {
	from { }
	to { opacity: 0.0; }
}
</style>
`;
