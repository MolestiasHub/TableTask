import { CallType as TypeOfCall, CallStatusType } from "@/Pages/types";
import dateToTimeString from "@/helpers/dateToTimeString";
import callLengthToString from "@/helpers/callLengthToString";
import Caller from "./Caller";
import CallType from "./CallType";
import Rating from "./Rating";
import Player from "./Player";
import Source from "./Source";
import dateToString from "@/helpers/dateToString";

export default function dataMapper(data: Array<any>) {
  if (!data || data.length === 0) return [];
  let currentDate =
    data[0].date_notime !== dateToString(new Date()) ? "" : data[0].date_notime;
  return data.map((i, index) => {
    let splitter = undefined;
    if (currentDate !== i.date_notime) {
      currentDate = i.date_notime;
      let counter = 0;
      data.forEach((item) => {
        if (item.date_notime === i.date_notime) counter++;
      });
      splitter = { date: i.date_notime, counter };
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
        i.person_avatar && (
          <img
            style={{ width: 32, height: 32, borderRadius: 20 }}
            src={i.person_avatar}
            alt={i.person_surname[0] + i.person_name[0]}
          />
        ),
        <Caller data={i.partner_data} />,
        <Source
          source={
            index === 0
              ? "Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво"
              : i.source
          }
        />,
        i.status === "Дозвонился" ? <Rating error={i.errors[0]} /> : "",
         <Player
          isFirst={index===0}
          recordTime={i.time}
          partnerId={i.partnership_id}
          audioId={i.record_id}
        />,
      ],
    };
  });
}
