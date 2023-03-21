import { Component } from 'solid-js';

export const ArrowRight: Component<{
  height: string;
  width: string;
  viewBox: string;
  class?: string;
}> = (props) => {
  return (
    <svg
      height={props.height}
      width={props.width}
      viewBox={props.viewBox}
      class={props.class}
    >
      <path
        d="M 9,4 H 1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="path4"
      />
      <path
        d="M 6,7 8.913,4.087 v 0 c 0.048,-0.048 0.048,-0.126 0,-0.174 v 0 L 6,1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="path6"
      />
    </svg>
  );
};
