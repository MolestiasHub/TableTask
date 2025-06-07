import { FC, ReactNode } from "react";
import cn from "./row.module.scss";
import useClasses from "@/hooks/useClasses";

interface IRow {
  items: Array<ReactNode>;
  layout?: string;
  className?: string;
}

const TableRow: FC<IRow> = (props) => {
  const row = useClasses([cn.row, props.className]);
  return (
    <div
      className={row}
      style={{
        gridTemplateColumns: props.layout,
      }}
    >
      {props.items.map((i, index) => (i instanceof Element ? i : <div key={index}>{i}</div>))}
    </div>
  );
};

export default TableRow;
