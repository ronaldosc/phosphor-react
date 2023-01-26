/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M235.4,210a124.2,124.2,0,0,0-61.8-53.2,76,76,0,1,0-91.2,0A124.2,124.2,0,0,0,20.6,210a12,12,0,0,0,20.8,12,100,100,0,0,1,173.2,0,12.1,12.1,0,0,0,10.4,6,11.7,11.7,0,0,0,6-1.6A12,12,0,0,0,235.4,210ZM76,96a52,52,0,1,1,52,52A52,52,0,0,1,76,96Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="96" r="64" />
    </g>
    <path d="M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a8,8,0,1,0,13.8,8,104.1,104.1,0,0,1,180.2,0,8,8,0,1,0,13.8-8ZM72,96a56,56,0,1,1,56,56A56,56,0,0,1,72,96Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M231.9,220a7.8,7.8,0,0,1-6.9,4H31a7.8,7.8,0,0,1-6.9-4,7.7,7.7,0,0,1,0-8,120.7,120.7,0,0,1,67.1-54.2,72,72,0,1,1,73.6,0A120.7,120.7,0,0,1,231.9,212,7.7,7.7,0,0,1,231.9,220Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M230.2,213a118.3,118.3,0,0,0-70.5-54.6,70,70,0,1,0-63.4,0A118.3,118.3,0,0,0,25.8,213a5.9,5.9,0,0,0,2.2,8.2,6,6,0,0,0,8.2-2.2,106,106,0,0,1,183.6,0,6,6,0,0,0,5.2,3,6.4,6.4,0,0,0,3-.8A5.9,5.9,0,0,0,230.2,213ZM70,96a58,58,0,1,1,58,58A58,58,0,0,1,70,96Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a8,8,0,1,0,13.8,8,104.1,104.1,0,0,1,180.2,0,8,8,0,1,0,13.8-8ZM72,96a56,56,0,1,1,56,56A56,56,0,0,1,72,96Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228.5,214a116.5,116.5,0,0,0-74.8-55.1,68,68,0,1,0-51.4,0A116.5,116.5,0,0,0,27.5,214a4,4,0,0,0,7,4,107.9,107.9,0,0,1,187,0,4.1,4.1,0,0,0,3.5,2,4.6,4.6,0,0,0,2-.5A4.1,4.1,0,0,0,228.5,214ZM68,96a60,60,0,1,1,60,60A60,60,0,0,1,68,96Z" />
  </>
);

const User = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

User.displayName = "User";

export default User;
