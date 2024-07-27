import React, { useEffect, useState } from "react";
import useDeviceStore from "../../store/deviceStore";
import { NavLink } from "react-router-dom";

const Explorer = () => {
  const isMobile = useDeviceStore((state) => state.isMobile);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // 대시보드, 채널에서 사용하는 navbar
  return (
    <>
      {/* Explorer 컴포넌트의 너비를 비례적으로 조정 */}
      <div
        className={`relative ${
          isMobile ? "w-[42px]" : "w-12 min-w-[48px]"
        } max-w-[110px]`}
      >
        <div
          className={`bg-mainBlue text-mainTxt h-full min-h-[500px]  ${
            animate ? "animate-slideIn" : ""
          }}`}
        >
          <NavLink to="/">
            <h1
              className={`text-2xl ${animate ? "animate-dropIn" : ""}`}
              style={{ fontSize: "1rem" }}
            >
              홈
            </h1>
          </NavLink>
          <NavLink to="/channel">
            <h2
              className={`text-xl mt-4 ${animate ? "animate-dropIn" : ""}`}
              style={{ fontSize: "1rem" }}
            >
              채널
            </h2>
          </NavLink>
          <NavLink to="/dashboard">
            <h2
              className={`text-xl mt-4 ${animate ? "animate-dropIn" : ""}`}
              style={{ fontSize: "1rem" }}
            >
              대시보드
            </h2>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Explorer;
