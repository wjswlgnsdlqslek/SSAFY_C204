import Explorer from "../components/common/Explorer";
import React, { useRef } from "react";
import MobileExplorer from "../components/common/MobileExplorer";
import useDeviceStore from "../store/deviceStore";

function ChannelPage() {
  const isMobile = useDeviceStore((state) => state.isMobile);
  const myChannelRef = useRef(null);
  const meetingChannelsRef = useRef(null);
  const infoChannelsRef = useRef(null);
  /* CSS 파일 */

  const handleMouseEvents = (ref) => {
    let isDown = false;
    let startY;
    let scrollTop;

    const onMouseDown = (e) => {
      isDown = true;
      startY = e.pageY - ref.current.offsetTop;
      scrollTop = ref.current.scrollTop;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      // e.preventDefault();
      const y = e.pageY - ref.current.offsetTop;
      const walk = (y - startY) * 2;
      ref.current.scrollTop = scrollTop - walk;
    };

    ref.current.addEventListener("mousedown", onMouseDown, { passive: true });
    ref.current.addEventListener("mouseleave", onMouseLeave, { passive: true });
    ref.current.addEventListener("mouseup", onMouseUp, { passive: true });
    ref.current.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      ref.current.removeEventListener("mousedown", onMouseDown, {
        passive: true,
      });
      ref.current.removeEventListener("mouseleave", onMouseLeave, {
        passive: true,
      });
      ref.current.removeEventListener("mouseup", onMouseUp, { passive: true });
      ref.current.removeEventListener("mousemove", onMouseMove, {
        passive: true,
      });
    };
  };

  const handleTouchEvents = (ref) => {
    let isDown = false;
    let startY;
    let scrollTop;

    const onTouchStart = (e) => {
      isDown = true;
      startY = e.touches[0].pageY - ref.current.offsetTop;
      scrollTop = ref.current.scrollTop;
    };

    const onTouchEnd = () => {
      isDown = false;
    };

    const onTouchMove = (e) => {
      if (!isDown) return;
      // e.preventDefault();
      const y = e.touches[0].pageY - ref.current.offsetTop;
      const walk = (y - startY) * 2;
      ref.current.scrollTop = scrollTop - walk;
    };

    ref.current.addEventListener("touchstart", onTouchStart, { passive: true });
    ref.current.addEventListener("touchend", onTouchEnd, { passive: true });
    ref.current.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      ref.current.removeEventListener("touchstart", onTouchStart, {
        passive: true,
      });
      ref.current.removeEventListener("touchend", onTouchEnd, {
        passive: true,
      });
      ref.current.removeEventListener("touchmove", onTouchMove, {
        passive: true,
      });
    };
  };

  React.useEffect(() => {
    handleMouseEvents(myChannelRef);
    handleMouseEvents(meetingChannelsRef);
    handleMouseEvents(infoChannelsRef);
    handleTouchEvents(myChannelRef);
    handleTouchEvents(meetingChannelsRef);
    handleTouchEvents(infoChannelsRef);
  }, []);

  return (
    <>
      <div className="flex h-screen ">
        {/* navbar */}
        <Explorer />

        {/* 여기부터 채널 탐색기 */}
        <div className="flex flex-col w-16 bg-white shadow-lg h-screen">
          <div className="flex-shrink-0 text-center"></div> {/* 내채널 */}
          <div ref={myChannelRef} className="flex-shrink-0 text-center">
            <div>
              {isMobile && <MobileExplorer />}
              <div className="divider mx-2" />
              <span>내 채널</span>
            </div>
            <div className="my-2">
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
            </div>
          </div>
          {/* 모임채널 */}
          <div
            ref={meetingChannelsRef}
            className="flex-1       const walk = (y - startY) * 2;
 overflow-y-auto text-center"
          >
            <div className="divider mx-2" />
            <span>모임 채널</span>
            <div className="my-2">
              {/* 많은 버튼들 */}
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              {/* ... 추가 버튼들 */}
            </div>
          </div>
          {/* 정보채널 */}
          <div
            ref={infoChannelsRef}
            className="flex-1       const walk = (y - startY) * 2;
 overflow-y-auto text-center"
          >
            <div className="divider mx-2" />
            <span>정보 채널</span>
            <div className="my-2">
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
              <button className="w-10 h-10 mx-auto my-2 bg-gray-300 rounded-full"></button>
            </div>
          </div>
        </div>
        {/* 채널 탐색기 끝, 하단은 콘텐츠 영역 */}
      </div>
    </>
  );
}

export default ChannelPage;
