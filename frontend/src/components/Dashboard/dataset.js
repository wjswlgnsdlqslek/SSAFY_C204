// 필터의 중요도 옵션
export const importantOptions = [
  { label: "상", value: "상", color: "bg-green-500" },
  { label: "중", value: "중", color: "bg-yellow-500" },
  { label: "하", value: "하", color: "bg-purple-500" },
];

// 필터의 타입 옵션
export const typeOptions = [
  { label: "WORK", value: "WORK", color: "bg-red-500" },
  { label: "REST", value: "REST", color: "bg-blue-500" },
];

// 그래프의 일정 색상
export const graphWORQBgColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
];

// 그래프의 일정 보더색상
export const graphWORQBorderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
];

// 그래프의 우선순위 색상
export const graphImportantBgColor = ["green", "yellow", "perple"];

// 그래프의 우선순위 보더 색상
export const grpahImportantBorderColor = ["gray", "red", "black"];

// 그래프 스위치 버튼의 색상
export const graphCategoryButtonColor = {
  WORK: "bg-secondary hover:opacity-40",
  important: "bg-primary hover:opacity-40",
};
