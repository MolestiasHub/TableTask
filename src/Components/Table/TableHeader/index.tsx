import { FC, useEffect, useState } from "react";
import cn from "../table.module.scss";
import SortingField from "./SortingField";

export type SortVal = { field: string; val: "ASC" | "DESC" };

interface IHeader {
  layout?: string;
  setSort: (val: string) => void;
}

const TableHeader: FC<IHeader> = (props) => {
  const [sort, setSort] = useState<SortVal>({ field: "date", val: "DESC" });
  useEffect(
    () => props.setSort(`&sort_by=${sort.field}&order=${sort.val}`),
    [sort, props.setSort]
  );

  return (
    <div
      className={cn.header}
      style={{gridTemplateColumns: props.layout}}
    >
        <div>Тип</div>
        <SortingField setValue={setSort} value='date' title="Время" />
        <div>Сотрудник</div>
        <div>Звонок</div>
        <div>Источник</div>
        <div>Оценка</div>
        <SortingField setValue={setSort} value="duration" title="Длительность" />
    </div>
  );
};

export default TableHeader;
