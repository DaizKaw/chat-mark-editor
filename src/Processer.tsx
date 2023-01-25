import { Options as MdOptions } from "mdast-util-to-hast";
import React, { useEffect, useState } from "react";
import compiler from "rehype-react";
import { Options, Root } from "rehype-react/lib";
import mdast2hast from "remark-rehype";
import { Plugin, unified, Processor } from "unified";
import { H, all } from "mdast-util-to-hast";
import { MdastNode } from "mdast-util-to-hast/lib";
import _ from "lodash";

function generateComponent(className: string) {
  return ({ children, ...props }: any) => (
    <div className={`${className} ${JSON.stringify(props)}`}>{children}</div>
  );
}

function generateHandler(key: string, propKeys: string[] = []) {
  return (h: H, node: MdastNode) =>
    h(
      node,
      key,
      _.reduce(
        propKeys,
        (prev, curr) => ({ ...prev, ...{ [curr]: _.get(node, curr) } }),
        {}
      ),
      all(h, node)
    );
}

export function genProcesser(parser: () => any) {
  return unified()
    .use(parser)
    .use(mdast2hast, {
      handlers: {
        info: generateHandler("info"),
        "info-heading": generateHandler("info-heading"),
        "info-body": generateHandler("info-body"),
        quote: generateHandler("quote", ["aid", "time"]),
        mension: generateHandler("mension", ["value"]),
        reply: generateHandler("reply", ["aid", "rid", "mid"]),
        picon: generateHandler("picon", ["value"]),
        piconname: generateHandler("piconname", ["value"]),
        // plain: generateHandler("plain"),
      },
    } as MdOptions)
    .use(
      compiler as Plugin<
        [Options],
        Root,
        React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
      >,
      {
        createElement: React.createElement,
        components: {
          info: generateComponent("info"),
          "info-heading": generateComponent("info-heading"),
          "info-body": generateComponent("info-body"),
          quote: generateComponent("quote"),
          mension: generateComponent("mention"),
          reply: generateComponent("reply"),
          picon: generateComponent("picon"),
          piconname: generateComponent("piconname"),
        },
      } as Options
    );
}
