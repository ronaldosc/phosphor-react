/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M228,224a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,224Zm0-80v32a20.1,20.1,0,0,1-20,20H48a20.1,20.1,0,0,1-20-20V144a20.1,20.1,0,0,1,20-20H97.2L82.5,55.5A36,36,0,0,1,117.7,12h20.6a36,36,0,0,1,35.2,43.5L158.8,124H208A20.1,20.1,0,0,1,228,144ZM121.7,124h12.6L150,50.5a11.7,11.7,0,0,0-2.4-10,11.5,11.5,0,0,0-9.3-4.5H117.7a11.5,11.5,0,0,0-9.3,4.5,11.7,11.7,0,0,0-2.4,10ZM204,148H52v24H204Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M161.8,53,144,136H112L94.2,53a24,24,0,0,1,23.5-29h20.6A24,24,0,0,1,161.8,53Z"
      opacity="0.2"
    />
    <path d="M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h54.1L86.4,54.7A32,32,0,0,1,117.7,16h20.6a32,32,0,0,1,31.3,38.7L153.9,128H208A16,16,0,0,1,224,144ZM118.5,128h19L154,51.4A16,16,0,0,0,138.3,32H117.7A16,16,0,0,0,102,51.4ZM208,184V144H48v40Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h54.1L86.4,54.7A32,32,0,0,1,117.7,16h20.6a32,32,0,0,1,31.3,38.7L153.9,128H208A16,16,0,0,1,224,144Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M222,224a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,224Zm0-80v40a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V144a14,14,0,0,1,14-14h56.6L88.4,54.3a29.4,29.4,0,0,1,6-25.2A30,30,0,0,1,117.7,18h20.6a30,30,0,0,1,23.3,11.1,29.4,29.4,0,0,1,6,25.2L151.4,130H208A14,14,0,0,1,222,144ZM116.9,130h22.2l16.8-78.2A18,18,0,0,0,138.3,30H117.7a18,18,0,0,0-17.6,21.8ZM210,144a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h54.1L86.4,54.7A32,32,0,0,1,117.7,16h20.6a32,32,0,0,1,31.3,38.7L153.9,128H208A16,16,0,0,1,224,144ZM118.5,128h19L154,51.4A16,16,0,0,0,138.3,32H117.7A16,16,0,0,0,102,51.4ZM208,184V144H48v40Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M220,224a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,224Zm0-80v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h59.1L90.3,53.9A28,28,0,0,1,117.7,20h20.6a28,28,0,0,1,27.4,33.9L148.9,132H208A12,12,0,0,1,220,144ZM115.2,132h25.6l17.1-79.8a20.3,20.3,0,0,0-4-16.8A20,20,0,0,0,138.3,28H117.7a20,20,0,0,0-15.6,7.4,20.3,20.3,0,0,0-4,16.8ZM212,144a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z" />
  </>
);

const Stamp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Stamp.displayName = "Stamp";

export default Stamp;
