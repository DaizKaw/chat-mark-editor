import React, { useEffect, useState } from "react";
import SimpleMde from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import "easymde/dist/easymde.min.css";
import "./styles.css";
import { unified } from "unified";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { inspect } from "unist-util-inspect";

export default function App() {
  const [markdownValue, setMarkdownValue] = useState(`# オープニング
## Markdown
- 好きなエディタ
  - VSCode
  - Vim
  - Typora

1. 住みたい町
  1. 鎌倉
  1. 神楽坂
  1. 荻窪

1. 部屋の条件
  1. 騒音
  1. ペット可
  1. 駅から徒歩3分

アンケートの結果、先月は実に~~80%~~ 90% の方から高い満足度が得られました！
  `);
  const [p, setP] = useState<any>();

  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

  useEffect(() => {
    (async () => {
      const processer = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify);
      const data = await processer.parse(markdownValue);
      setP(inspect(data));
    })();
  }, [markdownValue]);

  return (
    <div className="top-layout">
      {/* <SimpleMde value={markdownValue} onChange={onChange} /> */}
      <div>
        <textarea
          value={markdownValue}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>

      <div>
        <pre>{p}</pre>
      </div>

      <div className="markdown-area">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownValue}
        </ReactMarkdown>
      </div>
    </div>
  );
}
