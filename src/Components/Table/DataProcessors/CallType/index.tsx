import Incoming from "@/Icons/Incoming";
import Missed from "@/Icons/Missed";
import NotReached from "@/Icons/NotReached";
import Outgoing from "@/Icons/Outgoing";
import { CallStatusType, CallType as TypeOfCall} from "@/Pages/types";
import { FC } from "react";

interface ICallType {
  inOut: TypeOfCall;
  status: CallStatusType;
}

const CallType: FC<ICallType> = ({ inOut, status }) => {
  if (inOut) {
    if (status === "Дозвонился") {
      return <Incoming />;
    } else {
      return <Missed />;
    }
  }
  if (status === "Дозвонился") {
    return <Outgoing />;
  } else {
    return <NotReached />;
  }
};

export default CallType;
