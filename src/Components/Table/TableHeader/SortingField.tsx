import ArrowUp from "@/Icons/ArrowUp";
import { FC, useState } from "react";
import cn from "../table.module.scss";
import ArrowDown from "@/Icons/ArrowDown";
import { SortVal } from ".";

interface ISorting {
  value: string;
  setValue: (value: SortVal) => void;
  title: string;
}

const SortingField: FC<ISorting> = (props) => {
  const [state, setState] = useState<"ASC" | "DESC">();
  const onClick = () => {
    const newState = state === "ASC" ? "DESC" : "ASC";
    setState(state === "ASC" ? "DESC" : "ASC");
    props.setValue({ field: props.value, val: newState });
  };
  return (
    <div onClick={onClick} className={cn.sort}>
      {props.title} {state !== "ASC" ? <ArrowDown /> : <ArrowUp />}
    </div>
  );
};

export default SortingField;
