import { Options as MdOptions } from "mdast-util-to-hast";
import React from "react";
import compiler from "rehype-react";
import { Options, Root } from "rehype-react/lib";
import mdast2hast from "remark-rehype";
import { Plugin, unified } from "unified";
import { H, all } from "mdast-util-to-hast";
import { MdastNode } from "mdast-util-to-hast/lib";
import _ from "lodash";
import { Info, InfoBody, InfoTitle } from "./chatworkComponents/Info";
import { Quote } from "./chatworkComponents/Quote";
import { Mension } from "./chatworkComponents/Mension";
import { Reply } from "./chatworkComponents/Reply";
import { Picon, Piconname } from "./chatworkComponents/Picon";
import { Plain } from "./chatworkComponents/Plain";
import { Root as ChatworkPreviewRoot } from "./chatworkComponents/Root";
import { Code } from "./chatworkComponents/Code";

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
        code: generateHandler("code"),
        plain: generateHandler("plain", ["value"]),
        root: generateHandler("root"),
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
          info: Info,
          "info-heading": InfoTitle,
          "info-body": InfoBody,
          quote: Quote,
          mension: Mension,
          reply: Reply,
          picon: Picon,
          piconname: Piconname,
          code: Code,
          plain: Plain,
          root: ChatworkPreviewRoot,
        },
      } as Options
    );
}
