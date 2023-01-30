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
  const [text, setText] = useState(`[info][title]これはなに？[/title]
  ビジネスチャットサービスChatwork上で使えるメッセージ記法用のエディターです。
  プレビューを見ながら書くことができます。
※完璧に再現できていない箇所もあります。ご注意ください。
  
  ↓Chatwork
  https://go.chatwork.com/ja
  
  ↓メッセージ記法について
  https://developer.chatwork.com/docs/message-notation[/info]

  以下はサンプル
  [hr]
  [To:1234]
  [返信 aid=1234 to=1234-1234]Aさん
  [picon:1234]Aさん
  [piconname:1234]Aさん
  [info][title]タイトル[/title]
  情報
  [info]info内のinfo[/info]
  [/info]
  
  [引用 aid=12342 time=1374542168]
  引用開始
  [info]
  引用内のinfo[/info]
  [引用 aid=12342 time=1374542168]
  引用内の引用
  [/引用]
  引用終わり
  [/引用]
[code]console.log("Hello World");[/code]`);

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
