import { css } from "@emotion/react";

const quoteCss = css({
  ".quote-text": {
    marginLeft: 20,
    padding: "5px 0 5px 5px",
    borderLeft: "1px solid #666",
    wordWrap: "break-word",
  },
});

export function Quote({
  aid,
  time,
  children,
}: {
  aid: string;
  time: string;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <div css={quoteCss}>
      <div className="quote-title">
        {aid} {time}
      </div>
      <div className="quote-text">
        <span>{children}</span>
      </div>
    </div>
  );
}
