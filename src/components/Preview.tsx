import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Processor } from "unified";
import { inspect } from "unist-util-inspect";

export function ASTPreview({
  text,
  processer,
}: {
  text: string;
  processer: Processor;
}) {
  const [content, setContent] = useState<any>(<></>);

  useEffect(() => {
    (async () => {
      const data = await processer.parse(text);
      setContent(inspect(data));
    })();
  }, [text]);

  return <pre>{content}</pre>;
}

const previewCss = css({
  padding: "0 20px",
  overflowY: "scroll",
  height: "100%",
  width: "50vw",
});

export function Preview({
  text,
  processer,
}: {
  text: string;
  processer: Processor;
}) {
  const [content, setContent] = useState<any>(<></>);

  useEffect(() => {
    processer.process(text).then((file: any) => {
      setContent(file.result);
    });
  }, [text]);

  return <div css={previewCss}>{content}</div>;
}
