import { css } from "@emotion/react";

const codeCss = css({
  padding: 10,
  borderRadius: 4,
  background: "#ccc",
});

export function Code({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return (
    <div css={codeCss}>
      <span>{children}</span>
    </div>
  );
}
