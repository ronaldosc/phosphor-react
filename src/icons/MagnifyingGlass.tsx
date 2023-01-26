/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M232.5,215.5l-40.7-40.7A94.9,94.9,0,0,0,212,116a96,96,0,1,0-96,96,94.9,94.9,0,0,0,58.8-20.2l40.7,40.7a12.1,12.1,0,0,0,17,0A12,12,0,0,0,232.5,215.5ZM44,116a72,72,0,1,1,72,72A72.1,72.1,0,0,1,44,116Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="116" cy="116" r="84" />
    </g>
    <path d="M229.7,218.3l-43.3-43.2a92.2,92.2,0,1,0-11.3,11.3l43.2,43.3a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,229.7,218.3ZM40,116a76,76,0,1,1,76,76A76.1,76.1,0,0,1,40,116Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M176,116a60,60,0,1,1-60-60A60,60,0,0,1,176,116Zm53.7,113.7a8.2,8.2,0,0,1-11.4,0l-43.2-43.3a92.2,92.2,0,1,1,11.3-11.3l43.3,43.2A8.1,8.1,0,0,1,229.7,229.7ZM116,192a76,76,0,1,0-76-76A76.1,76.1,0,0,0,116,192Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M228.2,219.8l-44.5-44.6a90.2,90.2,0,1,0-8.5,8.5l44.6,44.5a5.9,5.9,0,0,0,8.4-8.4ZM38,116a78,78,0,1,1,78,78A78.1,78.1,0,0,1,38,116Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M229.7,218.3l-43.3-43.2a92.2,92.2,0,1,0-11.3,11.3l43.2,43.3a8.2,8.2,0,0,0,11.4,0A8.1,8.1,0,0,0,229.7,218.3ZM40,116a76,76,0,1,1,76,76A76.1,76.1,0,0,1,40,116Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M226.8,221.2,181,175.3a88,88,0,1,0-5.7,5.7l45.9,45.8a3.9,3.9,0,0,0,5.6,0A3.9,3.9,0,0,0,226.8,221.2ZM36,116a80,80,0,1,1,80,80A80.1,80.1,0,0,1,36,116Z" />
  </>
);

const MagnifyingGlass = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

MagnifyingGlass.displayName = "MagnifyingGlass";

export default MagnifyingGlass;
