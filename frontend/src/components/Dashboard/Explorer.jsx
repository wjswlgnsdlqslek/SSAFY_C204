import React, { useEffect, useState } from "react";

const Explorer = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div
      className={`bg-gray-800 text-white h-full p-4 min-h-[500px]  ${
        animate ? "animate-slideIn" : ""
      }}`}
    >
      <h1
        className={`text-2xl ${animate ? "animate-dropIn" : ""}`}
        style={{ fontSize: "1.25rem" }}
      >
        홈
      </h1>
      <h2
        className={`text-xl mt-4 ${animate ? "animate-dropIn" : ""}`}
        style={{ fontSize: "1rem" }}
      >
        채널
      </h2>
    </div>
  );
};

export default Explorer;
