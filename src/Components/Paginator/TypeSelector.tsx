import onClickAway from "@/helpers/onClickAway";
import cn from "./paginator.module.scss";
import useOpenClose from "@/hooks/useOpenClose";
import ArrowDown from "@/Icons/ArrowDown";
import ArrowUp from "@/Icons/ArrowUp";
import Cross from "@/Icons/Cross";
import { useEffect, useRef } from "react";

export type typeDefaultFields = { title: string; isDefault?: boolean };

interface ITypeSelector<T extends typeDefaultFields> {
  value: T;
  values: Array<T>;
  setValue: (type: T) => void;
}

const TypeSelector = <T extends typeDefaultFields>(props: ITypeSelector<T>) => {
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
  const toDefault = () => {
    props.setValue(props.values.find((i) => i.isDefault) || props.values[0]);
    close();
  };
  return (
    <div ref={ref} className={cn["type--selector--container"]}>
      <div
        className={
          props.value.isDefault
            ? cn["type--selector"]
            : cn["type--selector--active"]
        }
        onClick={toggle}
      >
        {props.value.title}
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {!props.value.isDefault && (
        <div className={cn["type--selector--reset"]} onClick={toDefault}>
          Сбросить фильтры <Cross />
        </div>
      )}
      {isOpen && (
        <div className={cn["type--selector--drop"]}>
          {props.values.map((i, index) => (
            <div
              key={index}
              className={
                cn[
                  i.title === props.value.title
                    ? "type--selector--drop--variant--active"
                    : "type--selector--drop--variant"
                ]
              }
              onClick={() => setter(i)}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeSelector;
