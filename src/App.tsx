import React, { useState } from "react";
import "easymde/dist/easymde.min.css";
import "./style/styles.css";
import { ASTPreview, Preview } from "./components/Preview";
import { genProcesser } from "./components/processer";
import parser from "./components/parser";
import { css } from "@emotion/react";
import { Editor } from "./components/Editor";
import { Bar } from "./components/Bar";

const appCss = css({
  overflow: "hidden",
  ".main": {
    display: "grid",
    gridTemplateColumns: "50vw 50vw",
    gridTemplateRows: "calc(100vh - 50px)",
  },
});

export default function App() {
  const processer = genProcesser(parser);
  const [text, setText] = useState(`
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
[引用 aid=12342 time=1374542168][返信 aid=12312 to=307091745-1669618525989261312]Bob
Hello World[/引用]
  `);

  return (
    <div css={appCss}>
      <Bar />
      <div className="main">
        <Editor text={text} setText={setText} />

        {/* <div>
        <ASTPreview processer={processer} text={text} />
      </div> */}

        <div className="markdown-area">
          {<Preview processer={processer} text={text} />}
        </div>
      </div>
    </div>
  );
}
