import { css } from "@emotion/react";

const infoCss = css({
  margin: "8px 0px",
  padding: "8px 12px",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  borderRadius: "4px",
  maxWidth: "calc(50vw - 100px)",
});

const infoTitleCss = css({
  margin: "-8px -12px 8px",
  padding: "4px 12px",
  borderRadius: "4px 4px 0 0 ",
  borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
  color: "rgb(71, 71, 71)",
  backgroundColor: "rgb(235, 239, 244)",
  fontSize: 14,
  display: "flex",
  ".icon": {
    display: "flex",
    width: "16px",
    height: "16px",
  },
});

const infoBodyCss = css({
  fontSize: 14,
});

export function Info({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return <div css={infoCss}>{children}</div>;
}

export function InfoTitle({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <div css={infoTitleCss}>
      <div className="icon"></div>
      {children}
    </div>
  );
}

export function InfoBody({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return <span css={infoBodyCss}>{children}</span>;
}
