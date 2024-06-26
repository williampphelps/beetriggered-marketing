// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);
/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */

export function ScreenVariantProvider(props) {
  console.warn(
    "DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."
  );
  return props.children;
}

export const useScreenVariants = p.createUseScreenVariants(true, {
  sm: "(min-width:0px) and (max-width:640px)",
  md: "(max-width:768px)",
  lg: "(max-width:1024px)",
  xl: "(max-width:1280px)",
  _2Xl: "(max-width:1536px)",
});

export default ScreenContext;
/* prettier-ignore-end */
