import React, { useState } from "react";
import GraphView from "./Graph/GraphView";
import { graphCategoryButtonColor } from "./dataset";

const DashboardContent = ({ calendarChange }) => {
  const [category, setCategory] = useState("WORQ"); // 카테고리 WORQ, important

  const categoryChangeHandle = (evt) => {
    // 이분법
    // true면 important, false면 WORK/VACATION
    console.log(evt.target.value);
    setCategory((state) => (state === "WORQ" ? "important" : "WORQ"));
  };
  return (
    <div className="bg-white text-black text-center">
      <span className="text-xl inline-block my-4">나의 워케이션 정보</span>
      {/* <button onClick={() => calendarChange("dayGridMonth")}>asdf</button> */}
      {/* dayGridMonth,timeGridWeek,threeDays,timeGridDay */}

      <div className="form-control p-2 w-100">
        <label className="label cursor-pointer">
          <span className={`label-text ${category === "WORQ" && "font-bold"}`}>
            일정
          </span>
          <input
            type="checkbox"
            value={category === "WORQ" ? false : true}
            onChange={categoryChangeHandle}
            checked={category === "WORQ" ? false : true}
            className={`toggle bg-primary toggle-secondary hover:${
              category !== "WORQ"
                ? graphCategoryButtonColor.WORK
                : graphCategoryButtonColor.important
            }`}
          />
          <span
            className={`label-text ${category === "important" && "font-bold"}`}
          >
            우선순위
          </span>
        </label>
      </div>
      <GraphView category={category} />
    </div>
  );
};

export default DashboardContent;
