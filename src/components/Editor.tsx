import { css } from "@emotion/react";

const editorCss = css({
  padding: 10,
  textarea: {
    width: "calc(100% - 20px)",
    height: "calc(100% - 20px)",
    resize: "none",
    border: "1px solid rgb(169, 186, 206)",
    borderRadius: "4px",
    padding: 10,
    lineHeight: 1.5,
  },
});

export function Editor({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
  return (
    <div css={editorCss}>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
