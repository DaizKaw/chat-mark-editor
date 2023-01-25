import React, { useState } from "react";
import "easymde/dist/easymde.min.css";
import "./styles.css";
import { ASTPreview, Preview } from "./components/Preview";
import { genProcesser } from "./Processer";
import parser from "unofficial-chatwork-parser";

export default function App() {
  const processer = genProcesser(parser);
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
[info]Hello[/info]
[picon:1234]
[piconname:1234]
[hr]
[To:1234]
[返信 aid=1234 to=1234-1234]
[info]
[title]タイトル[/title]
情報
[/info]
[qt][qtmeta aid=1234 time=1638694801]
引用開始
[info]
引用の中のinfo[/info]
引用終わり[/qt]
URL http://example.com
  `);

  return (
    <div className="top-layout">
      <div>
        <textarea
          value={markdownValue}
          onChange={(e) => {
            setMarkdownValue(e.target.value);
          }}
        />
      </div>

      <div>
        <ASTPreview processer={processer} text={markdownValue} />
      </div>

      <div className="markdown-area">
        {<Preview processer={processer} text={markdownValue} />}
      </div>
    </div>
  );
}
