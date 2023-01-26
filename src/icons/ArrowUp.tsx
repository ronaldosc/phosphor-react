/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208.5,120.5a12.1,12.1,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.5,120.5a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.5,120.5Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M205.7,117.7a8.2,8.2,0,0,1-11.4,0L136,59.3V216a8,8,0,0,1-16,0V59.3L61.7,117.7a8.1,8.1,0,0,1-11.4-11.4l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.1,8.1,0,0,1,205.7,117.7Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M207.4,115.1A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.4,8.4,0,0,1,207.4,115.1Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M204.2,116.2a5.8,5.8,0,0,1-8.4,0L134,54.5V216a6,6,0,0,1-12,0V54.5L60.2,116.2a5.9,5.9,0,0,1-8.4-8.4l72-72a5.8,5.8,0,0,1,8.4,0l72,72A5.8,5.8,0,0,1,204.2,116.2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M205.7,117.7a8.2,8.2,0,0,1-11.4,0L136,59.3V216a8,8,0,0,1-16,0V59.3L61.7,117.7a8.1,8.1,0,0,1-11.4-11.4l72-72a8.1,8.1,0,0,1,11.4,0l72,72A8.1,8.1,0,0,1,205.7,117.7Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M202.8,114.8a3.9,3.9,0,0,1-5.6,0L132,49.7V216a4,4,0,0,1-8,0V49.7L58.8,114.8a4,4,0,0,1-5.6-5.6l72-72a3.9,3.9,0,0,1,5.6,0l72,72A3.9,3.9,0,0,1,202.8,114.8Z" />
  </>
);

const ArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowUp.displayName = "ArrowUp";

export default ArrowUp;
