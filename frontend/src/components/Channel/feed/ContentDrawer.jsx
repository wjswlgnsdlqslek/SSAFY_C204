import React, { useState, useEffect } from "react";
import useDeviceStore from "../../../store/deviceStore";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const ContentDrawer = ({ isOpen, onClose, content }) => {
  const isMobile = useDeviceStore((state) => state.isMobile);
  // 여기서 데이터 받아옴...
  useEffect(() => {
    // 대충 받아오는 코드 위치
  }, [content]);

  return (
    <div className="z-20">
      <div className="drawer drawer-end">
        <input
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
          readOnly
        />

        <div className="drawer-side ">
          <label
            className="drawer-overlay flexjustify-end items-center"
            style={
              isOpen
                ? { backgroundColor: "#0003" }
                : { backgroundColor: "transparent" }
            }
            onClick={onClose}
          ></label>

          <div
            className={`${
              isMobile ? "w-10/12" : "w-9/12 sm:w-7/12"
            } self-center bg-white text-base-content h-[90%] flex relative  rounded-xl m-2`}
          >
            {content && (
              <>
                {/* 닫기 버튼 */}
                <div
                  className="py-5 px-1 rounded-tl-lg rounded-bl-lg border-white  bg-white cursor-pointer absolute -translate-x-[99%] top-[50%] -translate-y-full "
                  onClick={onClose}
                >
                  <ChevronDoubleRightIcon height="30" />
                </div>

                {/* 하단 컨텐츠 영역 */}
                <div className="p-5 flex flex-col w-full">
                  <div className="h-[40%] p-3 flex">
                    <div>버튼</div>
                    <img
                      src={content.imageUrl}
                      alt="Content"
                      className="aspect-auto flex-1 h-full"
                    />
                    <div>버튼</div>
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold">{content.title}</h2>
                    <p>{content.description}</p>
                    <div className="drawer-content">aaaaaaaaaaaaaaaaaaa</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDrawer;
