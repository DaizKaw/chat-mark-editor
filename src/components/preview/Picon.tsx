import { css } from "@emotion/react";
import ico_avatar_notfound from "../../img/ico_avatar_notfound.png";

const piconCss = ({ iconOnly }: { iconOnly?: boolean }) =>
  css({
    ...(iconOnly ? {} : { margin: "0 4px" }),
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    verticalAlign: "middle",
    ".icon": {
      height: 19,
      button: {
        background: "none",
        padding: 0,
        border: "none",
      },
    },
  });

const iconCss = css({
  width: 24,
  height: 24,
  boxSizing: "border-box",
  borderRadius: "50%",
  border: "1px solid transparent",
  cursor: "pointer",
  verticalAlign: -5,
});

function Icon() {
  return <img css={iconCss} src={ico_avatar_notfound} />;
}

export function Picon({}: { value: string }) {
  return (
    <span css={piconCss({ iconOnly: true })}>
      <span className="icon">
        <button>
          <Icon />
        </button>
      </span>
    </span>
  );
}

export function Piconname({ value }: { value: string }) {
  return (
    <span css={piconCss}>
      <span className="icon">
        <button>
          <Icon />
        </button>
      </span>

      <span>ユーザー({value})</span>
    </span>
  );
}
