import { css } from "@emotion/react";

const codeCss = css({
  padding: "8px 12px",
  margin: "8px 0",
  border: "1px solid rgba(204, 223, 245, 0.5)",
  borderRadius: 3,
  background: "rgba(0, 0, 0, 0.1)",
});

export function Code({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return (
    <div css={codeCss}>
      <span>{children}</span>
    </div>
  );
}
