import { FC } from "react";

interface ISource {
  source: string;
}

const Source: FC<ISource> = (props) => {
  return (
    <div
      style={{
        fontWeight: 400,
        fontSize: 15,
        lineHeight: "132%",
        letterSpacing: "0%",
        verticalAlign: "middle",
        overflow: "hidden",
        color: "rgba(94, 119, 147, 1)"
      }}
    >
      {props.source}
    </div>
  );
};

export default Source;
