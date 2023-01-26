/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M210.7,68H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V68H45.3C29.2,68,16,80.6,16,96v80a12,12,0,0,0,12,12H52v32a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V188h24a12,12,0,0,0,12-12V96C240,80.6,226.8,68,210.7,68ZM76,52H180V68H76ZM180,208H76V168H180Zm36-44H204v-8a12,12,0,0,0-12-12H64a12,12,0,0,0-12,12v8H40V96c0-2.2,2.4-4,5.3-4H210.7c2.9,0,5.3,1.8,5.3,4Zm-12-48a16,16,0,1,1-16-16A16,16,0,0,1,204,116Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M210.7,80H45.3C35.8,80,28,87.2,28,96v80H64V152H192v24h36V96C228,87.2,220.2,80,210.7,80Z" />
    </g>
    <circle cx="188" cy="116" r="12" />
    <path d="M210.7,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H45.3C31.4,72,20,82.8,20,96v80a8,8,0,0,0,8,8H56v36a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h28a8,8,0,0,0,8-8V96C236,82.8,224.6,72,210.7,72ZM72,48H184V72H72ZM184,212H72V160H184Zm36-44H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H36V96c0-4.4,4.2-8,9.3-8H210.7c5.1,0,9.3,3.6,9.3,8Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M210.7,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H45.3C31.4,72,20,82.8,20,96v80a8,8,0,0,0,8,8H56v36a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h28a8,8,0,0,0,8-8V96C236,82.8,224.6,72,210.7,72ZM72,48H184V72H72ZM184,212H72V160H184Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,188,128Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M210.7,74H198V40a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V74H45.3C32.5,74,22,83.9,22,96v80a6,6,0,0,0,6,6H58v38a6,6,0,0,0,6,6H192a6,6,0,0,0,6-6V182h30a6,6,0,0,0,6-6V96C234,83.9,223.5,74,210.7,74ZM70,46H186V74H70ZM186,214H70V158H186Zm36-44H198V152a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6v18H34V96c0-5.5,5.1-10,11.3-10H210.7c6.2,0,11.3,4.5,11.3,10Zm-24-54a10,10,0,1,1-10-10A10,10,0,0,1,198,116Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M210.7,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H45.3C31.4,72,20,82.8,20,96v80a8,8,0,0,0,8,8H56v36a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h28a8,8,0,0,0,8-8V96C236,82.8,224.6,72,210.7,72ZM72,48H184V72H72ZM184,212H72V160H184Zm36-44H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H36V96c0-4.4,4.2-8,9.3-8H210.7c5.1,0,9.3,3.6,9.3,8Zm-20-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M210.7,76H196V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V76H45.3C33.6,76,24,85,24,96v80a4,4,0,0,0,4,4H60v40a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4V180h32a4,4,0,0,0,4-4V96C232,85,222.4,76,210.7,76ZM68,44H188V76H68ZM188,216H68V156H188Zm36-44H196V152a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4v20H32V96c0-6.6,6-12,13.3-12H210.7C218,84,224,89.4,224,96Zm-28-56a8,8,0,1,1-8-8A8,8,0,0,1,196,116Z" />
  </>
);

const Printer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Printer.displayName = "Printer";

export default Printer;
