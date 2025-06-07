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
  let curIndex = 0
  const ref = useRef(null);

  useEffect(() => {
    const unsub = onClickAway(ref, close);
    return () => unsub();
  }, [close]);

  const setter = (type: T) => {
    props.setValue(type);
    close();
  };

  const increaseRange = () => {
    if(curIndex===props.values.length-1){
      curIndex=0
    } else {
      curIndex++
    }
  }

  return (
    <div ref={ref} className={cn["date--selector"]}>
      <ArrowLeft />
      <div onClick={toggle} className={cn["date--value"]}>
        <Calendar />
        {props.value.title}
      </div>
      <ArrowRight onClick={increaseRange}/>
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
