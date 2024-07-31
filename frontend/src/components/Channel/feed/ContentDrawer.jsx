import React, { useEffect } from "react";
import useDeviceStore from "../../../store/deviceStore";
import {
  ChevronDoubleRightIcon,
  HeartIcon as EmptyHeart,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import ArrowButton from "./ArrowButton";
import { HeartIcon as FullHeart } from "@heroicons/react/24/solid";

const ContentDrawer = ({
  isOpen,
  onClose,
  content,
  onLeftClick,
  onRightClick,
}) => {
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
            {content && isOpen && (
              <>
                {/* 닫기 버튼 */}
                <div
                  className="py-5 px-1 rounded-tl-lg rounded-bl-lg border-white  bg-white cursor-pointer absolute -translate-x-[99%] top-[50%] -translate-y-full "
                  onClick={onClose}
                >
                  <ChevronDoubleRightIcon height="30" />
                </div>

                {/* 하단 컨텐츠 영역 */}
                <div className="flex flex-col w-full items-center my-5 overflow-y-auto ">
                  <div className="flex w-full justify-center items-center gap-2 min-w-[300px]">
                    <div className="relative flex-grow max-w-[calc(85%-7rem)] xl:max-w-[65%]">
                      {/* 1:1 비율을 유지하는 이미지 컨테이너 */}
                      <div className="w-full pb-[100%] relative">
                        <img
                          src={content.imageUrl}
                          alt="Content"
                          className="absolute rounded-md inset-0 object-cover w-full h-full"
                        />
                      </div>

                      {/* 화살표 버튼 */}
                      <ArrowButton direction="left" />
                      <ArrowButton direction="right" />
                      <div className="flex justify-between">
                        <div className="flex">
                          <FullHeart className="w-6 h-6 text-mainRed" />
                          <EmptyHeart className="w-6 h-6" />
                          숫자&nbsp;
                          <ChatBubbleLeftIcon className="w-6 h-6" />0 1 2
                          메세지수
                        </div>
                        <div>내꺼면 수정삭제</div>
                      </div>
                    </div>
                  </div>
                  {/* 내용 */}
                  <div className="mt-4 w-full text-center">
                    <h2 className="text-xl font-bold">{content.title}</h2>
                    <p>방문일시 어쩌고 타이틀</p>
                    <div className="drawer-content">컨텐츠 내용</div>
                    <div className="divider mx-[6rem]" />
                    <div className="drawer-content">댓글 영역</div>
                  </div>
                  댓글입력
                  <input className="input border-solid border-2 border-black" />
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
