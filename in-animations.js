import { html } from '@polymer/lit-element';

export const FadeIn = html`
<style>
  .page-fadeIn {
  	-webkit-animation: fadeIn .7s ease both;
  	animation: fadeIn .7s ease both;
  }
  @-webkit-keyframes fadeIn {
  	from { opacity: 0.3; }
  	to { }
  }
  @keyframes fadeIn {
  	from { opacity: 0.3; }
  	to { }
  }
</style>
`;

export const RotateUnfoldLeft = html`
<style>
  .page-rotateUnfoldLeft {
  	-webkit-transform-origin: 100% 50%;
  	transform-origin: 100% 50%;
  	-webkit-animation: rotateUnfoldLeft .7s both ease;
  	animation: rotateUnfoldLeft .7s both ease;
  }
  @-webkit-keyframes rotateUnfoldLeft {
  	from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
  }
  @keyframes rotateUnfoldLeft {
  	from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
  }
</style>
`;

export const RotateUnfoldRight = html`
<style>
  .page-rotateUnfoldRight {
  	-webkit-transform-origin: 0% 50%;
  	transform-origin: 0% 50%;
  	-webkit-animation: rotateUnfoldRight .7s both ease;
  	animation: rotateUnfoldRight .7s both ease;
  }
  @-webkit-keyframes rotateUnfoldRight {
  	from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
  }
  @keyframes rotateUnfoldRight {
  	from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
  }
</style>
`;
