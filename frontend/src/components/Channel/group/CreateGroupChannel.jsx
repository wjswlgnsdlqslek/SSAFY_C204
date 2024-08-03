import { useState } from "react";
import useDeviceStore from "../../../store/deviceStore";

function CreateGroupChannel({ onClose }) {
  const isMobile = useDeviceStore((state) => state.isMobile);

  const [channelTitle, setChannelTitle] = useState("");
  const [channelDescription, setChannelDescription] = useState("");

  const submitHandle = () => {
    console.log("서브밋핸들");
  };
  return (
    <div className="p-5">
      <p className="text-2xl text-center font-bold">채널 생성</p>

      <div className="divider" />
      <input
        type="text"
        onChange={(e) => setChannelTitle(e.target.value)}
        className="w-full mb-2 border-gray-100 py-1 px-2 border-2 rounded-md"
        value={channelTitle}
        placeholder="채널명을 입력해 주세요."
      />
      <input
        type="text"
        value={channelDescription}
        onChange={(e) => setChannelDescription(e.target.value)}
        className="w-full h-36 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-mainBlue focus:border-mainBlue"
        placeholder="설명을 입력하세요"
      />
      <div className="divider" />
      <button onClick={submitHandle}>작성</button>
      <button onClick={onClose}>취소</button>
    </div>
  );
}

export default CreateGroupChannel;
