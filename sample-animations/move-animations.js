import { html } from '@polymer/lit-element';

/* In animations */

/* Just move */
export const MoveFromLeft = html`
<style>
.page-moveFromLeft {
	animation: moveFromLeft .6s ease both;
}
@keyframes moveFromLeft {
	from { transform: translateX(-100%); }
}
</style>
`;

export const MoveFromRight = html`
<style>
.page-moveFromRight {
	animation: moveFromRight .6s ease both;
}
@keyframes moveFromRight {
	from { transform: translateX(100%); }
}
</style>
`;

export const MoveFromTop = html`
<style>
.page-moveFromTop {
	animation: moveFromTop .6s ease both;
}
@keyframes moveFromTop {
	from { transform: translateY(-100%); }
}
</style>
`;

export const MoveFromBottom = html`
<style>
.page-moveFromBottom {
	animation: moveFromBottom .6s ease both;
}
@keyframes moveFromBottom {
  from { transform: translateY(100%); }
}
</style>
`;

/* Move and Fade */
export const MoveFromLeftFade = html`
<style>
.page-moveFromLeftFade {
	animation: moveFromLeftFade .6s ease both;
}
@keyframes moveFromLeftFade {
	from { opacity: 0.3; transform: translateX(-100%); }
}
</style>
`;

export const MoveFromRightFade = html`
<style>
.page-moveFromRightFade {
	animation: moveFromRightFade .6s ease both;
}
@keyframes moveFromRightFade {
	from { opacity: 0.3; transform: translateX(100%); }
}
</style>
`;

export const MoveFromTopFade = html`
<style>
.page-moveFromTopFade {
	animation: moveFromTopFade .6s ease both;
}
@keyframes moveFromTopFade {
	from { opacity: 0.3; transform: translateY(-100%); }
}
</style>
`;

export const MoveFromBottomFade = html`
<style>
.page-moveFromBottomFade {
	animation: moveFromBottomFade .6s ease both;
}
@keyframes moveFromBottomFade {
	from { opacity: 0.3; transform: translateY(100%); }
}
</style>
`;

/* Out animations */

/* Just move */
export const MoveToLeft = html`
<style>
.page-moveToLeft {
  animation: moveToLeft .7s ease both;
}
@keyframes moveToLeft {
	from { }
	to { transform: translateX(-100%); }
}
</style>
`;

export const MoveToRight = html`
<style>
.page-moveToRight {
	animation: moveToRight .7s ease both;
}
@keyframes moveToRight {
	from { }
	to { transform: translateX(100%); }
}
</style>
`;

export const MoveToTop = html`
<style>
.page-moveToTop {
	animation: moveToTop .6s ease both;
}
@keyframes moveToTop {
	from { }
	to { transform: translateY(-100%); }
}
</style>
`;

export const MoveToBottom = html`
<style>
.page-moveToBottom {
	animation: moveToBottom .6s ease both;
}
@keyframes moveToBottom {
	from { }
	to { transform: translateY(100%); }
}
</style>
`;

/* Move and fade */
export const MoveToLeftFade = html`
<style>
.page-moveToLeftFade {
  animation: moveToLeftFade .7s ease both;
}
@keyframes moveToLeftFade {
  from { }
  to { opacity: 0.3; transform: translateX(-100%); }
}
</style>
`;

export const MoveToRightFade = html`
<style>
.page-moveToRightFade {
	animation: moveToRightFade .7s ease both;
}
@keyframes moveToRightFade {
	from { }
	to { opacity: 0.3; transform: translateX(100%); }
}
</style>
`;

export const MoveToTopFade = html`
<style>
.page-moveToTopFade {
	animation: moveToTopFade .6s ease both;
}
@keyframes moveToTopFade {
	from { }
	to { opacity: 0.3; transform: translateY(-100%); }
}
</style>
`;

export const MoveToBottomFade = html`
<style>
.page-moveToBottomFade {
	animation: moveToBottomFade .6s ease both;
}
@keyframes moveToBottomFade {
	from { }
	to { opacity: 0.3; transform: translateY(100%); }
}
</style>
`;
