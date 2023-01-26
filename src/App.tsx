import React, { useState } from "react";
import "easymde/dist/easymde.min.css";
import "./style/styles.css";
import { ASTPreview, Preview } from "./components/Preview";
import { genProcesser } from "./Processer";
import parser from "unofficial-chatwork-parser";
import { css } from "@emotion/react";

const appCss = css({
  display: "grid",
  gridTemplateColumns: "50vw 50vw",
  gridTemplateRows: "100vh",
  ".editor": {
    width: "100%",
    height: "100%",
  },
});

export default function App() {
  const processer = genProcesser(parser);
  const [markdownValue, setMarkdownValue] = useState(`
[info]Hello[/info]
[picon:1234]feaefaf
[piconname:1234]feafafeafe
[hr]feafwff
[To:1234]feafaf
[返信 aid=1234 to=1234-1234]feafeaf
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
    <div css={appCss}>
      <div>
        <textarea
          className="editor"
          value={markdownValue}
          onChange={(e) => {
            setMarkdownValue(e.target.value);
          }}
        />
      </div>

      {/* <div>
        <ASTPreview processer={processer} text={markdownValue} />
      </div> */}

      <div className="markdown-area">
        {<Preview processer={processer} text={markdownValue} />}
      </div>
    </div>
  );
}
