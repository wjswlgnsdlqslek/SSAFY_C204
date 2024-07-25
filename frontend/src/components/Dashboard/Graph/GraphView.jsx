import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  graphWORQBgColor,
  graphWORQBorderColor,
  graphImportantBgColor,
  grpahImportantBorderColor,
} from "../dataset";
import useTodoStore from "../../../store/todoStore";
import { useEffect, useState } from "react";
import useCountNum from "./useCountUp";

// 플러그인 정의
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { ctx, width, height } = chart;
    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    console.log(fontSize);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";

    // 상태에서 퍼센트 계산
    const percentage = chart.options.plugins.centerTextPlugin?.percentage || 0;
    const text =
      chart.options.plugins.centerTextPlugin?.eventCnt === 0
        ? "No data"
        : `${percentage}%`;

    // 라벨의 높이를 계산 (차트의 높이에서 라벨을 제외한 영역을 사용)
    const chartArea = chart.chartArea;
    const centerY = chartArea.top + (chartArea.bottom - chartArea.top) / 2;
    const textY = centerY;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

ChartJS.register(ArcElement, Tooltip, Legend, centerTextPlugin);

function GraphView({ category }) {
  const { events } = useTodoStore();
  const [finishCnt, setFinishCnt] = useState(0);
  const [importantCnt, setImportantCnt] = useState({ 상: 0, 중: 0, 하: 0 });
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const completedCount = events?.filter((i) => i?.isFinish).length || 0;
    setImportantCnt((state) => {
      const cnts = { 상: 0, 중: 0, 하: 0 };
      for (let item of events) {
        cnts[item?.important] += 1;
      }
      return cnts;
    });
    setFinishCnt(completedCount);
    setPercentage(Math.round((completedCount / events.length) * 100));
  }, [events]);

  const finishData = {
    labels: ["미완료", "완료"],
    datasets: [
      {
        data: [events.length - finishCnt, finishCnt],
        backgroundColor: graphWORQBgColor,
        borderColor: graphWORQBorderColor,
        borderWidth: 1,
      },
    ],
  };

  const importantData = {
    labels: ["상", "중", "하"],
    datasets: [
      {
        data: [importantCnt["상"], importantCnt["중"], importantCnt["하"]],
        backgroundColor: graphImportantBgColor,
        borderColor: grpahImportantBorderColor,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: "65%",
    // maintainAspectRatio: false,

    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
      centerTextPlugin: {
        percentage: useCountNum(percentage), // 플러그인에 상태값 전달
        eventCnt: events?.length,
      },
    },
  };

  return (
    <div className="relative h-100 w-100 p-1" style={{ minWidth: "230px" }}>
      <Doughnut
        data={category === "important" ? importantData : finishData}
        options={options}
        plugins={[centerTextPlugin]} // 플러그인을 이곳에 추가
        // height={"31rem"}
      />
      {`상 : ${importantCnt.상} 개`} <br />
      {`중 : ${importantCnt.중} 개`} <br />
      {`하 : ${importantCnt.하} 개`} <br />
      {`완료 : ${finishCnt} 개`} <br />
      {`미완료 : ${events.length - finishCnt} 개`} <br />
      <br />
    </div>
  );
}

export default GraphView;
