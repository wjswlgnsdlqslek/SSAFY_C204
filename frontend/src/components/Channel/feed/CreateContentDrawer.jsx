import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import useDeviceStore from "../../../store/deviceStore";
import { useEffect, useState } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

function CreateContentDrawer({ isOpen, onClose }) {
  const isMobile = useDeviceStore((state) => state.isMobile);

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    console.log(images);
  }, [images]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setCurrentIndex(images.length); // 새로운 이미지가 추가되면 첫 번째 새 이미지로 슬라이드
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
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
                      <div
                        alt="Content"
                        className="border absolute rounded-md inset-0 object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
            <div className="max-w-md mx-auto p-4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />

              {images.length > 0 && (
                <div className="relative w-full h-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={images[currentIndex].url}
                      alt={`uploaded ${currentIndex}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleRemoveImage(currentIndex)}
                    className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full shadow-lg focus:outline-none"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContentDrawer;
