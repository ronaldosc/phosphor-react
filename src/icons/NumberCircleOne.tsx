/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212ZM144,84v92a12,12,0,0,1-24,0V106.4l-5.3,3.6a12,12,0,0,1-13.4-20l24-16a12.2,12.2,0,0,1,12.4-.6A12,12,0,0,1,144,84Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM140,84v92a8,8,0,0,1-16,0V98.9l-11.6,7.8a8,8,0,0,1-8.8-13.4l24-16a8.3,8.3,0,0,1,8.2-.4A8,8,0,0,1,140,84Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm12,152a8,8,0,0,1-16,0V98.9l-11.6,7.8a8,8,0,0,1-8.8-13.4l24-16a8.3,8.3,0,0,1,8.2-.4A8,8,0,0,1,140,84Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM138,84v92a6,6,0,0,1-12,0V95.2L111.3,105a6,6,0,0,1-6.6-10l24-16a6,6,0,0,1,9.3,5Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM140,84v92a8,8,0,0,1-16,0V98.9l-11.6,7.8a8,8,0,0,1-8.8-13.4l24-16a8.3,8.3,0,0,1,8.2-.4A8,8,0,0,1,140,84Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-136v92a4,4,0,0,1-8,0V91.5l-17.8,11.8a4,4,0,0,1-5.5-1.1,3.8,3.8,0,0,1,1.1-5.5l24-16a4,4,0,0,1,4.1-.2A3.9,3.9,0,0,1,136,84Z" />
  </>
);

const NumberCircleOne = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

NumberCircleOne.displayName = "NumberCircleOne";

export default NumberCircleOne;
