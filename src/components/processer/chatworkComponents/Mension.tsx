import { css } from "@emotion/react";
import { Picon } from "./Picon";

const mensionCss = css({
  display: "inline-flex",
  alignItems: "center",
  ".to": {
    display: "inline",
    borderColor: "#8ba0b9",
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 1,
    fontSize: 11,
    padding: "0px 4px",
    backgroundColor: "rgb(87, 202, 179)",
    color: "rgb(0, 66, 53)",
    fontWeight: "bold",
  },
});

export function Mension({
  value,
}: {
  value: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div css={mensionCss}>
      <div className="to">TO</div>
      <Picon value={value} iconOnly={false} />
    </div>
  );
}
