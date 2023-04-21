// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dYY4WTnFJa6E3gQ6UtpzZr
// Component: w5cPtDDpTd
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: WdgdJRuzKl/component
import { useScreenVariants as useScreenVariants_0H88I8ZsG8KL } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0H88I8zsG8K-L/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_bee_triggered_tailwind_css from "../bee_triggered_tailwind/plasmic_bee_triggered_tailwind.module.css"; // plasmic-import: kPvWwGStXT61ChMSrBJT5X/projectcss
import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: dYY4WTnFJa6E3gQ6UtpzZr/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: w5cPtDDpTd/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 9vPvNEjVK5/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: K9yIJpYWexO/icon

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0H88I8ZsG8KL()
  });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_bee_triggered_tailwind_css.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__otd)}>
          {true ? (
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__yLlN6
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"45px"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/bee_triggered_marketing/images/logosvg.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__tiO5
                )}
                component={Link}
                href={`/`}
                platform={"nextjs"}
              >
                {"Bee Triggered"}
              </p.PlasmicLink>
            </p.PlasmicLink>
          ) : null}
          <div
            className={classNames(projectcss.all, sty.freeBox__qEe2H)}
            onClick={async event => {
              const $steps = {};
              $steps["setOpen"] = true
                ? (() => {
                    const actionArgs = {
                      variable: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariable",
                          interactionUuid: "T_tXnTkbG",
                          componentUuid: "w5cPtDDpTd",
                          argName: "variable"
                        },
                        () => ({
                          objRoot: $state,
                          variablePath: ["open"]
                        })
                      ),

                      operation: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariable",
                          interactionUuid: "T_tXnTkbG",
                          componentUuid: "w5cPtDDpTd",
                          argName: "operation"
                        },
                        () => 4
                      )
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "T_tXnTkbG",
                        componentUuid: "w5cPtDDpTd"
                      },
                      () =>
                        (({ variable, value, startIndex, deleteCount }) => {
                          const { objRoot, variablePath } = variable;
                          const oldValue = p.get(objRoot, variablePath);
                          p.set(objRoot, variablePath, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["setOpen"] === "object" &&
                typeof $steps["setOpen"].then === "function"
              ) {
                $steps["setOpen"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariable",
                    interactionUuid: "T_tXnTkbG",
                    componentUuid: "w5cPtDDpTd"
                  },
                  $steps["setOpen"]
                );
              }
            }}
          >
            {(
              hasVariant(globalVariants, "screen", "md")
                ? true
                : hasVariant(globalVariants, "screen", "sm")
                ? true
                : true
            ) ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__ophja)}
                role={"img"}
              />
            ) : null}
          </div>
        </div>
      ) : null}
      {(
        hasVariant(globalVariants, "screen", "md")
          ? true
          : (() => {
              try {
                return $state.open;
              } catch (e) {
                if (e instanceof TypeError) {
                  return true;
                }
                throw e;
              }
            })()
      ) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__e0RDc)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__k7QCr
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            {"Home"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__thUxw
            )}
            component={Link}
            href={"/#pricing"}
            platform={"nextjs"}
          >
            {"Pricing"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__hSjo
            )}
            component={Link}
            href={"/#learnmore"}
            platform={"nextjs"}
          >
            {"About"}
          </p.PlasmicLink>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            onClick={async () => {
              const $steps = {};
              $steps["goToPage"] = true
                ? (() => {
                    const actionArgs = {
                      destination: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "navigation",
                          interactionUuid: "37GkT2gpP",
                          componentUuid: "w5cPtDDpTd",
                          argName: "destination"
                        },
                        () => "https://buy.stripe.com/5kA4igaM4cb283C6op"
                      )
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "navigation",
                        interactionUuid: "37GkT2gpP",
                        componentUuid: "w5cPtDDpTd"
                      },
                      () =>
                        (({ destination }) => {
                          __nextRouter?.push(destination);
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["goToPage"] === "object" &&
                typeof $steps["goToPage"].then === "function"
              ) {
                $steps["goToPage"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "37GkT2gpP",
                    componentUuid: "w5cPtDDpTd"
                  },
                  $steps["goToPage"]
                );
              }
            }}
            primary={true}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Get Started"}
            </div>
            <Icon38Icon
              className={classNames(projectcss.all, sty.svg__e3Kwl)}
              role={"img"}
            />
          </Button>
        </p.Stack>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "button", "text"],
  img: ["img"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
