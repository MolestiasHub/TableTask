import { FC } from "react";
import cn from "./caller.module.scss"
interface ICaller {
  data: {
    name: string;
    phone: string;
  };
}

const Caller: FC<ICaller> = ({data}) => {
  return (
    <div className={cn.container}>
      {data.name && <div className={cn.field}>{data.name}</div>}
      <div className={data.name?cn["field--second"]:cn.field}>+{data.phone}</div>
    </div>
  );
};

export default Caller;
