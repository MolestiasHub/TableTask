import { FC } from "react";
import cn from "./splitter.module.scss";
import dateToString from "@/helpers/dateToString";
interface ISplitter {
  date: string;
  amount: number;
}

const Splitter: FC<ISplitter> = (props) => {
  const yestarday = new Date()
  yestarday.setDate(yestarday.getDate()-1)
  const date = dateToString(new Date(props.date));
  return (
    <div className={cn.splitter}>
      <span>
        {dateToString(yestarday) === date ? "Вчера" : props.date.replace(/-/g,".")}
      </span>
      <span className={cn.count}>{props.amount}</span>
    </div>
  );
};

export default Splitter;
