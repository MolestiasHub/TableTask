import { FC, useEffect, useState } from "react";
import DateSelector from "./DateSelector";
import cn from "./paginator.module.scss";
import TypeSelector, { typeDefaultFields } from "./TypeSelector";
import rangeToDateString from "@/helpers/rangeToDateString";

type Type = typeDefaultFields & { value?: 0 | 1 };

const types: Array<Type> = [
  { title: "Все типы", isDefault: true, value: undefined },
  { title: "Входящие", isDefault: false, value: 1 },
  { title: "Исходящие", isDefault: false, value: 0 },
];

type Date = typeDefaultFields & {
  value: {
    start: string;
    finish: string;
  };
};

const dates: Array<Date> = [
  { title: "3 Дня", isDefault: true, value: rangeToDateString("3 days") },
  { title: "Неделя", isDefault: true, value: rangeToDateString("week") },
  { title: "Месяц", isDefault: false, value: rangeToDateString("month") },
  { title: "Год", isDefault: false, value: rangeToDateString("year") },
];

interface IPaginator {
  setPaginatorData: (str: string) => void;
}

const Paginator: FC<IPaginator> = ({ setPaginatorData }) => {
  const [type, setType] = useState<Type>(types[0]);
  const [date, setDate] = useState<Date>(dates[0]);

  useEffect(
    () =>
      setPaginatorData(
        `${type.value!==undefined ? `in_out=${type.value}&` : ""}&date_start=${
          date.value.start
        }&date_end=${date.value.finish}`
      ),
    [type, date, setPaginatorData]
  );

  return (
    <div className={cn.container}>
      <TypeSelector value={type} values={types} setValue={setType} />
      <DateSelector values={dates} value={date} setValue={setDate} />
    </div>
  );
};

export default Paginator;                                                                                                                                                                                                                                                                                                                                                                  
