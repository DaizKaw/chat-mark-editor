import { Node } from "unist";
import unified, { Processor } from "unified";

export function ChatmarkAttacher(this: Processor) {
  const { Parser } = this;

  if (!Parser) {
    return;
  }
  console.log(Parser, Parser.prototype);
  const { inlineTokenizers, inlineMethods } = Parser.prototype;
  rubyTokenizer.locator = rubyLocator;
  inlineTokenizers.ruby = rubyTokenizer;
  inlineMethods.splice(inlineMethods.indexOf("text"), 0, "ruby");

  function rubyLocator(value: string, fromIndex: number) {
    return value.indexOf("｜", fromIndex);
  }
  function rubyTokenizer(this: any, eat: any, value: any, silent: any) {
    if (value.charAt(0) !== "｜") {
      return;
    }
    const rtStartIndex = value.indexOf("《");
    const rtEndIndex = value.indexOf("》", rtStartIndex);
    if (rtStartIndex <= 0 || rtEndIndex <= 0) {
      return;
    }
    const rubyRef = value.slice(1, rtStartIndex);
    const rubyText = value.slice(rtStartIndex + 1, rtEndIndex);
    if (silent) {
      return true; // Silentモードはconsumeせずtrueを返す
    }
    const now = eat.now(); // テキスト中の現在の位置を取得
    now.column += 1;
    now.offset += 1;
    return eat(value.slice(0, rtEndIndex + 1))({
      type: "ruby",
      rubyText,
      children: this.tokenizeInline(rubyRef, now),
      data: { hName: "ruby" },
    });
  }
}

// export function rubyAttacher() {
//   const { Parser } = this;
//   if (!Parser) {
//     return;
//   }
//   const { inlineTokenizers, inlineMethods } = Parser.prototype;
//   rubyTokenizer.locator = rubyLocator;
//   inlineTokenizers.ruby = rubyTokenizer;
//   inlineMethods.splice(inlineMethods.indexOf("text"), 0, "ruby");
// }

// function rubyLocator(value, fromIndex) {
//   return value.indexOf("｜", fromIndex);
// }

// function rubyTokenizer(eat, value, silent) {
//   if (value.charAt(0) !== "｜") {
//     return;
//   }
//   const rtStartIndex = value.indexOf("《");
//   const rtEndIndex = value.indexOf("》", rtStartIndex);
//   if (rtStartIndex <= 0 || rtEndIndex <= 0) {
//     return;
//   }
//   const rubyRef = value.slice(1, rtStartIndex);
//   const rubyText = value.slice(rtStartIndex + 1, rtEndIndex);
//   if (silent) {
//     return true; // Silentモードはconsumeせずtrueを返す
//   }
//   const now = eat.now(); // テキスト中の現在の位置を取得
//   now.column += 1;
//   now.offset += 1;
//   return eat(value.slice(0, rtEndIndex + 1))({
//     type: "ruby",
//     rubyText,
//     children: this.tokenizeInline(rubyRef, now),
//     data: { hName: "ruby" },
//   });
// }
