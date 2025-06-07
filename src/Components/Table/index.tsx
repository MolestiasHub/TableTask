import { FC, ReactNode } from "react";
import TableHeader from "./TableHeader";
import cn from "./table.module.scss";
import TableRow from "./TableRow";
import Splitter from "./Splitter";

interface ITable {
  items: Array<{ id: number; splitter?: {date: string, counter: number}; content: Array<ReactNode> }>;
  setSort: (val: string) => void;
  layout?: string;
  isLoading?: boolean;
}

const Table: FC<ITable> = ({ layout, ...props }) => {
  return (
    <div className={cn.table}>
      <TableHeader setSort={props.setSort} layout={layout} />
      {!props.isLoading &&
        props.items.map((i) =>
          i.splitter ? (
            [
              <Splitter
                key={i.id * 10}
                date={i.splitter.date}
                amount={i.splitter.counter}
              />,
              <TableRow items={i.content} key={i.id} layout={layout} />,
            ]
          ) : (
            <TableRow items={i.content} key={i.id} layout={layout} />
          )
        )}
    </div>
  );
};

export default Table;
