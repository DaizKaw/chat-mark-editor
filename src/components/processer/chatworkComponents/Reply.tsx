import { css } from "@emotion/react";
import { Picon } from "./Picon";

const replyCss = css({
  display: "inline-flex",
  alignItems: "center",
  ".r": {
    display: "inline-flex",
    borderColor: "#8ba0b9",
    borderRadius: 3,
    borderStyle: "solid",
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    color: "rgb(0, 66, 53)",
    ".re": {
      display: "inline-flex",
      padding: "0px 4px",
      backgroundColor: "rgb(87, 202, 179)",
      fontSize: 11,
      fontWeight: "bold",
      ">div": {
        display: "inline",
      },
    },
    ".m": {
      padding: "0px 4px",
      fontSize: 11,
      margin: 0,
    },
  },
});

export function Reply({
  aid,
}: {
  aid: string;
  rid: string;
  mid: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div css={replyCss}>
      <div className="r">
        <div className="re">
          <div>←</div>
          <div>RE</div>
        </div>
        <p className="m">返信元</p>
      </div>
      <Picon value={aid} iconOnly={false} />
    </div>
  );
}
