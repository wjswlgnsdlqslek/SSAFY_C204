import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

/**
 *
 * @param {Date} date
 * @returns
 */
function getYMD(date) {
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = (date.getDate() + 1).toString();
  return year + "-" + month + "-" + day;
}

function DateRangerPicker({ timeSet, editTimeSet }) {
  const [value, setValue] = React.useState([new Date(), new Date()]);
  // console.log(dayjs(timeSet));
  return (
    <div className="w-full">
      <div className="bg-white flex">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              value={dayjs(timeSet)}
              sx={{ width: "50%" }}
              format="YYYY-MM-DD"
              onChange={(e) => editTimeSet(new Date(e))}
              label=""
            />
          </DemoContainer>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              onChange={(e) => editTimeSet(new Date(e))}
              value={dayjs(timeSet)}
              sx={{ width: "50%" }}
              format="hh:mm A"
              label=""
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default DateRangerPicker;
