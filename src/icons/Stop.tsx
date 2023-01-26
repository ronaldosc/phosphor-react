/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M197.1,216H58.9A18.9,18.9,0,0,1,40,197.1V58.9A18.9,18.9,0,0,1,58.9,40H197.1A18.9,18.9,0,0,1,216,58.9V197.1A18.9,18.9,0,0,1,197.1,216ZM64,192H192V64H64Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="52" y="52" width="152" height="152" rx="6.9" />
    </g>
    <path d="M197.1,212H58.9A14.9,14.9,0,0,1,44,197.1V58.9A14.9,14.9,0,0,1,58.9,44H197.1A14.9,14.9,0,0,1,212,58.9V197.1A14.9,14.9,0,0,1,197.1,212ZM60,196H196V60H60Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M212,58.9V197.1A14.9,14.9,0,0,1,197.1,212H58.9A14.9,14.9,0,0,1,44,197.1V58.9A14.9,14.9,0,0,1,58.9,44H197.1A14.9,14.9,0,0,1,212,58.9Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M197.1,210H58.9A12.9,12.9,0,0,1,46,197.1V58.9A12.9,12.9,0,0,1,58.9,46H197.1A12.9,12.9,0,0,1,210,58.9V197.1A12.9,12.9,0,0,1,197.1,210ZM58.9,58a.9.9,0,0,0-.9.9V197.1a.9.9,0,0,0,.9.9H197.1a.9.9,0,0,0,.9-.9V58.9a.9.9,0,0,0-.9-.9Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M197.1,212H58.9A14.9,14.9,0,0,1,44,197.1V58.9A14.9,14.9,0,0,1,58.9,44H197.1A14.9,14.9,0,0,1,212,58.9V197.1A14.9,14.9,0,0,1,197.1,212ZM60,196H196V60H60Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M197.1,208H58.9A10.9,10.9,0,0,1,48,197.1V58.9A10.9,10.9,0,0,1,58.9,48H197.1A10.9,10.9,0,0,1,208,58.9V197.1A10.9,10.9,0,0,1,197.1,208ZM58.9,56A2.9,2.9,0,0,0,56,58.9V197.1a2.9,2.9,0,0,0,2.9,2.9H197.1a2.9,2.9,0,0,0,2.9-2.9V58.9a2.9,2.9,0,0,0-2.9-2.9Z" />
  </>
);

const Stop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Stop.displayName = "Stop";

export default Stop;
