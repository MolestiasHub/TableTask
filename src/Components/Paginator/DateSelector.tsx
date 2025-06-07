import useOpenClose from "@/hooks/useOpenClose";
import cn from "./paginator.module.scss";
import ArrowLeft from "@/Icons/ArrowLeft";
import ArrowRight from "@/Icons/ArrowRight";
import Calendar from "@/Icons/Calendar";
import { useEffect, useRef } from "react";
import onClickAway from "@/helpers/onClickAway";

export type typeDateFields = { title: string; isDefault?: boolean };

interface IDateSelector<T extends typeDateFields> {
  value: T;
  values: Array<T>;
  setValue: (type: T) => void;
}

const DateSelector = <T extends typeDateFields>(props: IDateSelector<T>) => {
  const [isOpen, , close, toggle] = useOpenClose();
  const ref = useRef(null);

  useEffect(() => {
    const unsub = onClickAway(ref, close);
    return () => unsub();
  }, [close]);

  const setter = (type: T) => {
    props.setValue(type);
    close();
  };

  const decreaseRange = () => {
    const nextIndex = props.values.indexOf(props.value) - 1;
    props.setValue(
      props.values[nextIndex <= 0 ? props.values.length - 1 : nextIndex]
    );
  };

  const increaseRange = () => {
    const nextIndex = props.values.indexOf(props.value) + 1;
    props.setValue(
      props.values[nextIndex >= props.values.length ? 0 : nextIndex]
    );
  };

  return (
    <div ref={ref} className={cn["date--selector"]}>
      <ArrowLeft onClick={decreaseRange} />
      <div onClick={toggle} className={cn["date--value"]}>
        <Calendar />
        {props.value.title}
      </div>
      <ArrowRight onClick={increaseRange} />
      {isOpen && (
        <div className={cn["date--selector--drop"]}>
          {props.values.map((i, index) => (
            <div
              key={index}
              onClick={() => setter(i)}
              className={
                cn[
                  i.title === props.value.title
                    ? "date--selector--drop--variant--active"
                    : "date--selector--drop--variant"
                ]
              }
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateSelector;
