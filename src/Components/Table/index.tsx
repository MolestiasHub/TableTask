import { FC, ReactNode } from "react";
import TableHeader from "./TableHeader";
import cn from "./table.module.scss";
import TableRow from "./TableRow";
import Splitter from "./Splitter";

interface ITable {
  items: Array<{ id: number; splitter?: string; content: Array<ReactNode> }>;
  layout?: string;
}

const Table: FC<ITable> = ({ layout, ...props }) => {
  return (
    <div className={cn.table}>
      <TableHeader layout={layout} />
      {props.items.map((i, index) =>
        i.splitter ? (
          [
            <TableRow items={i.content} key={i.id} layout={layout} />,
            <Splitter
              key={i.id*10}
              date={i.splitter}
              amount={props.items.length - index - 1}
            />,
          ]
        ) : (
          <TableRow items={i.content} key={i.id} layout={layout} />
        )
      )}
    </div>
  );
};

export default Table;
