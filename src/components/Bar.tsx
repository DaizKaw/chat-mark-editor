import { css } from "@emotion/react";

const barCss = css({
  width: "100vw",
  height: 50,
  background: "rgb(19, 32, 47)",
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  ".title": {
    fontFamily: "fantasy",
    fontSize: 18,
  },
});

export function Bar() {
  return (
    <div css={barCss}>
      <span className="title">Unofficial Chatmark Editor</span>
    </div>
  );
}
