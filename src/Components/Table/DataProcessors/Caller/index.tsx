import { FC } from "react";

interface ICaller {
  data: {
    name: string;
    phone: string;
  };
}

const Caller: FC<ICaller> = ({data}) => {
  return (
    <div>
      <div>{data.name}</div>
      <div>+{data.phone}</div>
    </div>
  );
};

export default Caller;
