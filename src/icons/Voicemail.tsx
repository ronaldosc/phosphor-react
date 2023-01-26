/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M196,68a60,60,0,0,0-48,96H108a60,60,0,1,0-48,24H196a60,60,0,0,0,0-120ZM24,128a36,36,0,1,1,36,36A36,36,0,0,1,24,128Zm172,36a36,36,0,1,1,36-36A36,36,0,0,1,196,164Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="56" cy="128" r="48" />
    </g>
    <g opacity="0.2">
      <circle cx="200" cy="128" r="48" />
    </g>
    <path d="M200,72a55.9,55.9,0,0,0-39.1,96H95.1A55.9,55.9,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M200,72a55.9,55.9,0,0,0-39.1,96H95.1A55.9,55.9,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M200,74a54,54,0,0,0-33.9,96H89.9A54,54,0,1,0,56,182H200a54,54,0,0,0,0-108ZM14,128a42,42,0,1,1,42,42A42,42,0,0,1,14,128Zm186,42a42,42,0,1,1,42-42A42,42,0,0,1,200,170Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M200,72a55.9,55.9,0,0,0-39.1,96H95.1A55.9,55.9,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40,40,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40,40,0,0,1,200,168Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M200,76a52,52,0,0,0-27.7,96H83.7A52,52,0,1,0,56,180H200a52,52,0,0,0,0-104ZM12,128a44,44,0,1,1,44,44A44,44,0,0,1,12,128Zm188,44a44,44,0,1,1,44-44A44,44,0,0,1,200,172Z" />
  </>
);

const Voicemail = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Voicemail.displayName = "Voicemail";

export default Voicemail;
