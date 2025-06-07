import React, { FC, ReactNode, isValidElement } from "react";
import cn from "./row.module.scss";
import useClasses from "@/hooks/useClasses";

interface IRow {
  items: Array<ReactNode>;
  layout?: string;
  className?: string;
}

const TableRow: FC<IRow> = React.memo((props) => {
  const row = useClasses([cn.row, props.className]);
  return (
    <div
      className={row}
      style={{
        gridTemplateColumns: props.layout,
      }}
    >
      {props.items.map((i, index) => (isValidElement(i) ? i : <div key={index}>{i}</div>))}
    </div>
  );
})

export default TableRow;
