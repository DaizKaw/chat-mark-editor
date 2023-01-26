import { css } from "@emotion/react";
import { Piconname } from "./Picon";

const quoteCss = css({
  ".quote-title": {
    display: "inline-flex",
    fontSize: 11,
    color: "#436475",
    textOverflow: "ellipsis",
    maxWidth: "calc(100% - 24px)",
    height: 24,
    gap: 10,
    alignItems: "center",
    whiteSpace: "pre",
  },
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
  const date = new Date(Number(time) * 1000);
  const dateText = `${date.getFullYear()}年${
    date.getMonth() + 1
  }月${date.getDate()}日 ${date.getHours()}:${`0${date.getMinutes()}`.slice(
    -2
  )}`;

  return (
    <div css={quoteCss}>
      <div className="quote-title">
        <Piconname value={aid} />
        <div className="quote-title__time">
          <span>{dateText}</span>
        </div>
      </div>
      <div className="quote-text">
        <span>{children}</span>
      </div>
    </div>
  );
}
