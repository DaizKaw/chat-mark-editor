import { css } from "@emotion/react";

const mensionCss = css({
  disply: "flex",
});

export function Reply({}: {
  aid: string;
  rid: string;
  mid: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div css={mensionCss}>
      <div>RE</div>
      <div></div>
    </div>
  );
}
