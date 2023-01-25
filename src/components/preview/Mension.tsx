import { css } from "@emotion/react";

const mensionCss = css({
  disply: "flex",
});

export function Mension({}: {
  value: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div css={mensionCss}>
      <div>TO</div>
      <div></div>
    </div>
  );
}
