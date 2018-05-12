import { html } from '@polymer/lit-element';

export const FadeOut = html`
<style>
  .page-fadeOut {
  	-webkit-animation: fadeOut .7s ease both;
  	animation: fadeOut .7s ease both;
  }
  @-webkit-keyframes fadeOut {
  	from { }
  	to { opacity: 0.0; }
  }
  @keyframes fadeOut {
  	from { }
  	to { opacity: 0.0; }
  }
</style>
`;

export const MoveToLeft = html`
<style>
  .page-moveToLeft {
    -webkit-animation: moveToLeft .7s ease both;
    animation: moveToLeft .7s ease both;
  }
  @-webkit-keyframes moveToLeft {
  	from { }
  	to { -webkit-transform: translateX(-100%); }
  }
  @keyframes moveToLeft {
  	from { }
  	to { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
  }
</style>
`;

export const MoveToRight = html`
<style>
  .page-moveToRight {
  	-webkit-animation: moveToRight .7s ease both;
  	animation: moveToRight .7s ease both;
  }
  @-webkit-keyframes moveToRight {
  	from { }
  	to { -webkit-transform: translateX(100%); }
  }
  @keyframes moveToRight {
  	from { }
  	to { -webkit-transform: translateX(100%); transform: translateX(100%); }
  }
</style>
`;
