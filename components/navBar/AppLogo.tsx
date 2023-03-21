import { Component } from 'solid-js';
import { PropAliases } from 'solid-js/web';

export const AppLogo: Component<{
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
        d="M503.808 426.496V501.76h21.504c29.184 0 43.52-12.8 43.52-37.888 0-24.576-14.336-37.376-43.52-37.376h-21.504zM721.92 426.496h-22.016V501.76h21.504c29.184 0 43.52-12.8 43.52-37.888 0-24.576-14.336-37.376-43.008-37.376zM304.64 428.544h-1.536c-0.512 6.656-2.048 13.312-4.096 19.456l-26.624 81.408h61.952l-26.624-80.896c-1.024-5.12-2.048-11.776-3.072-19.968z"
        //fill="#131313"
      />
      <path
        d="M793.088 329.216v-209.92c0-30.72-25.088-55.808-55.808-55.808H289.28c-30.72 0-55.808 25.088-55.808 55.808v209.92H129.024v349.696h104.448v223.744c0 30.72 25.088 55.808 55.808 55.808H737.28c30.72 0 55.808-25.088 55.808-55.808v-223.744h103.424V329.216h-103.424zM737.28 133.12v196.096H289.28V133.12H737.28z m-116.224 328.704c0 24.064-8.704 43.008-26.112 57.344-17.408 14.336-39.424 21.504-65.536 20.48h-25.6v81.408h-49.664V388.096h80.384c57.856 0 86.528 24.576 86.528 73.728z m-358.912 105.984l-16.896 53.248H190.976L276.48 388.096h58.368l83.456 232.96H364.032l-17.408-53.248H262.144z m250.88 363.52c-15.36 0-28.16-12.288-28.16-28.16 0-15.36 12.8-28.16 28.16-28.16s28.16 12.288 28.16 28.16c0 15.36-12.288 28.16-28.16 28.16z m-223.744-84.48v-167.936H737.28v167.936H289.28z m501.76-327.68c-17.408 14.336-39.424 21.504-65.536 20.48h-25.6v81.408H650.24V388.096h80.384c57.856 0 87.04 24.576 87.04 73.728-0.512 24.064-9.216 43.008-26.624 57.344z"
        //fill="#ffffff"
      />
    </svg>
  );
};