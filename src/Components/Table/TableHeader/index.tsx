import { FC, useEffect, useState } from "react";
import TableRow from "../TableRow";
import cn from "../table.module.scss";
import SortingField from "./SortingField";

export type SortVal = { field: string; val: "ASC" | "DESC" };

interface IHeader {
  layout?: string;
  setSort: (val: string) => void;
}

const TableHeader: FC<IHeader> = (props) => {
  const [sort, setSort] = useState<SortVal>({ field: "date", val: "DESC" });
  console.log(sort)
  useEffect(
    () => props.setSort(`&sort_by=${sort.field}&order=${sort.val}`),
    [sort, props.setSort]
  );

  return (
    <TableRow
      className={cn.header}
      layout={props.layout}
      items={[
        "Тип",
        <SortingField setValue={setSort} value='date' title="Время" />,
        "Сотрудник",
        "Звонок",
        "Источник",
        "Оценка",
        <SortingField setValue={setSort} value="duration" title="Длительность" />,
      ]}
    />
  );
};

export default TableHeader;
