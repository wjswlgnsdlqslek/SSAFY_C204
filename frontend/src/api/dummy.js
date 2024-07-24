import { nanoid } from "nanoid";
let todayStr = new Date().toISOString().replace(/T.*$/, "");
// console.log(todayStr);
export const get_response = {
  data: [
    {
      id: nanoid(),
      title: "All-day event",
      start: todayStr,
      isFinish: false,
      content: "매일매일하는이벤트",
      className: "중",
      important: "중",
      // date: "2020-07-29"
      end: todayStr,
      type: "WORK",
    },
    {
      id: nanoid(),
      title: "Timed event",
      start: todayStr + "T12:00:00",
      end: todayStr + "T12:30:00",
      content: "시간정해진기본이벤트",
      isFinish: false,
      className: "상",
      important: "상",
      type: "REST",
      // date: "2020-07-30"
    },
  ],
  ok: true,
  status: 200,
};
