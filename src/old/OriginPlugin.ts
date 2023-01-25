import { Node } from "unist";
import unified, { Processor } from "unified";
import { VFile } from "vfile";

class MyParser {
  text: string;
  file: VFile;

  constructor(text: string, file: VFile) {
    this.text = text;
    this.file = file;
  }

  parse(): any {
    const strs = this.text.split("\n");

    if (strs.length === 1) {
      return;
    }

    return {
      type: "text",
      value: this.text,
    };
  }
}

export function parser(this: Processor) {
  this.Parser = MyParser;
}
