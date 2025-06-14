import dateToReadable from "@/helpers/dateToReadable";
import { useEffect, useRef, useState } from "react";
import cn from "./paginator.module.scss";
import dateToString from "@/helpers/dateToString";
import Calendar from "@/Icons/Calendar";

interface IDatePicker {
  setDate: (type: any) => void;
}

const DatePicker = (props: IDatePicker) => {
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);

  const [firstDate, setFirstDate] = useState<Date>();
  const [secondDate, setSecondDate] = useState<Date>();

  useEffect(() => {
    if(firstDate && secondDate) {
        const first = new Date(firstDate);
        const second = new Date(secondDate);
        props.setDate({ title: `${dateToReadable(firstDate)}-${dateToReadable(secondDate)}`, value: { start: dateToString(first), finish: dateToString(second) }})
    }
  },[firstDate, props, secondDate])
  const setterFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setFirstDate(date);
  };
  const setterSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setSecondDate(date);
  };
  return (
    <div
      onClick={() => {
        firstRef.current?.showPicker();
      }}
      className={cn["date--container"]}
    >
      <div>
        <span
          onClick={() => {
            firstRef.current?.showPicker();
          }}
        >
          {dateToReadable(firstDate) || "__.__.____"}-
        </span>
        <input
          ref={firstRef}
          type="date"
          data-date-format="DD MMMM YYYY"
          onChange={setterFirst}
          className={cn["date--input"]}
        />
        <span
          onClick={() => {
            secondRef.current?.showPicker();
          }}
        >
          {dateToReadable(secondDate) || "__.__.____"}
        </span>
        <input
          ref={secondRef}
          onChange={setterSecond}
          type="date"
          className={cn["date--input"]}
        />
      </div>
      <Calendar />
    </div>
  );
};

export default DatePicker;
