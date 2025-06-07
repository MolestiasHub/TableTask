import { CallType as TypeOfCall, CallStatusType } from "@/Pages/types";
import dateToTimeString from "@/helpers/dateToTimeString";
import callLengthToString from "@/helpers/callLengthToString";
import Caller from "./Caller";
import CallType from "./CallType";
import Rating from "./Rating";

export default function dataMapper(data: Array<any>) {
  if (!data) return [];
  let currentDate = data[0].date_notime;
  return data.map((i) => {
    let splitter = undefined;
    if (currentDate !== i.date_notime) {
      splitter = i.date_notime;
      currentDate = i.date_notime;
    }
    return {
      id: i.id,
      splitter,
      content: [
        <CallType
          inOut={i.in_out as TypeOfCall}
          status={i.status as CallStatusType}
        />,
        dateToTimeString(new Date(i.date)),
        <img style={{ width: 32 }} src={i.person_avatar}></img>,
        <Caller data={i.partner_data}/>,
        i.source,
        i.status === "Дозвонился" ? <Rating error={i.errors[0]} /> : "",
        callLengthToString(i.time),
      ],
    };
  });
}
