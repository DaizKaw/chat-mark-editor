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

  return <div>{content}</div>;
}
