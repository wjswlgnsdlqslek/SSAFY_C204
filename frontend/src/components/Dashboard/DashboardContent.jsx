import React, { useState } from "react";
import GraphView from "./Graph/GraphView";

const DashboardContent = ({ calendarChange }) => {
  const [category, setCategory] = useState("WORQ"); // 카테고리 WORQ, important

  const categoryChangeHandle = (evt) => {
    // 이분법
    // true면 important, false면 WORK/VACATION
    console.log(evt.target.value);
    setCategory((state) => (state === "WORQ" ? "important" : "WORQ"));
  };
  return (
    <>
      <div className="bg-white text-mainTxt text-center">
        {/* <button onClick={() => calendarChange("dayGridMonth")}>asdf</button> */}
        {/* dayGridMonth,timeGridWeek,threeDays,timeGridDay */}
        <div className="shadow-md rounded-lg p-2">
          <span className="text-xl inline-block my-4">나의 워케이션 정보</span>
          <p>여기다가 내 워케이션 정보 카드 보여주면 될 듯 ㅇㅇ</p>
        </div>

        <div className="w-full flex flex-col items-center shadow-md rounded-lg py-5 me-3 ms-1 my-3">
          <GraphView category={category} />
        </div>
        <div className="w-full flex flex-col items-center shadow-md rounded-lg py-5 me-3 ms-1 my-3 max-h-min min-h-max">
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
          <p>AI 출력 부분</p>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
