/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212Zm24-111.1L121.9,128,152,155.1a11.8,11.8,0,0,1,.9,16.9,11.9,11.9,0,0,1-16.9.9l-40-36a11.9,11.9,0,0,1,0-17.8l40-36a12,12,0,0,1,16,17.8Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    <path d="M149.9,86.6a8,8,0,0,0-11.3-.5l-40,36a8,8,0,0,0,0,11.8l40,36A8.2,8.2,0,0,0,144,172a7.9,7.9,0,0,0,5.9-2.6,8,8,0,0,0-.5-11.3L116,128l33.4-30.1A8,8,0,0,0,149.9,86.6Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm21.4,134.1a8,8,0,0,1,.5,11.3A7.9,7.9,0,0,1,144,172a8.2,8.2,0,0,1-5.4-2.1l-40-36a8,8,0,0,1,0-11.8l40-36a8,8,0,1,1,10.8,11.8L116,128Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM148,96.5,113,128l35,31.5a6,6,0,0,1,.5,8.5,6.2,6.2,0,0,1-4.5,2,6,6,0,0,1-4-1.5l-40-36a6.1,6.1,0,0,1,0-9l40-36a6,6,0,0,1,8,9Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM149.4,97.9,116,128l33.4,30.1a8,8,0,0,1,.5,11.3A7.9,7.9,0,0,1,144,172a8.2,8.2,0,0,1-5.4-2.1l-40-36a8,8,0,0,1,0-11.8l40-36a8,8,0,1,1,10.8,11.8Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM146.7,95,110,128l36.7,33a4.1,4.1,0,0,1,.3,5.7,4.1,4.1,0,0,1-5.7.3l-40-36a4.1,4.1,0,0,1,0-6l40-36a4,4,0,1,1,5.4,6Z" />
  </>
);

const CaretCircleLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CaretCircleLeft.displayName = "CaretCircleLeft";

export default CaretCircleLeft;
