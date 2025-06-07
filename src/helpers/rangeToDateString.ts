import dateToString from "./dateToString";

export default (start: "3 days" | "week" | "month" | "year") => {
  const date = new Date();
  switch (start) {
    case "3 days":
      date.setDate(date.getDate() - 3);
      break;
    case "week":
      date.setDate(date.getDate() - 7);
      break;
    case "month":
      date.setMonth(date.getMonth() - 1);
      break;
    default:
      date.setFullYear(date.getFullYear() - 1);
      break;
  }
  console.log({ start: dateToString(date), finish: dateToString(new Date()) });
  return { start: dateToString(date), finish: dateToString(new Date()) };
};
