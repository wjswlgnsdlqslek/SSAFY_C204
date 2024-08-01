import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import useDeviceStore from "../../../store/deviceStore";
import { useRef, useState } from "react";
import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import ArrowButton from "./ArrowButton";

function CreateContentDrawer({ isOpen, onClose }) {
  const isMobile = useDeviceStore((state) => state.isMobile);
  const imgInput = useRef(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textContent, setTextContent] = useState("");

  const handleImageChange = (e) => {
    if (!e.target?.files) {
      return;
    }
    if (e.target?.files?.length + images.length > 10) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "이미지는 최대 10장까지 가능합니다.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
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

  const closeHandle = () => {
    onClose();
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (images.length === 0 || textContent === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "입력값을 확인해주세요.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    console.log(images);
    console.log(textContent);
  };
  return (
    <>
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
              onClick={closeHandle}
            ></label>
            <div
              className={`${
                isMobile ? "w-10/12" : "w-9/12 sm:w-7/12"
              } self-center bg-white text-base-content h-[90%] flex relative shadow-md rounded-xl m-2`}
            >
              <>
                {isOpen && (
                  <div
                    className="py-5 px-1 rounded-tl-lg rounded-bl-lg border-white  bg-white cursor-pointer absolute -translate-x-[99%] top-[50%] -translate-y-full "
                    onClick={closeHandle}
                  >
                    {/* 닫기 버튼 */}
                    <ChevronDoubleRightIcon height="30" />
                  </div>
                )}

                {/* 하단 컨텐츠 영역 */}
                <div className="flex flex-col w-full items-center my-5 overflow-y-auto ">
                  <div className="flex w-full justify-center items-center  min-w-[260px]">
                    <div className="relative flex-grow  sm:max-w-[calc(85%-7rem)] xl:max-w-[65%]">
                      {/* 1:1 비율을 유지하는 이미지 컨테이너 */}

                      <div className="w-full pb-[100%] relative">
                        {images.length === 0 && (
                          <div
                            onClick={() => imgInput.current.click()}
                            alt="ContentAdd"
                            className="self-center cursor-pointer  flex justify-center border absolute rounded-md inset-0 w-full h-[75%]"
                          >
                            <div className="self-center ">이미지를 등록</div>
                          </div>
                        )}
                        {images.length > 0 && (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <img
                                src={images[currentIndex]?.url}
                                alt={`uploaded ${currentIndex}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            {images.length > 1 && (
                              <>
                                <div type="button" onClick={goToPrevious}>
                                  <ArrowButton direction="left" />
                                </div>
                                <div onClick={goToNext} type="button">
                                  <ArrowButton direction="right" />
                                </div>
                              </>
                            )}
                            <button
                              onClick={() => handleRemoveImage(currentIndex)}
                              type="button"
                              className="absolute top-0 right-0 p-2 bg-mainRed text-white rounded-full shadow-lg focus:outline-none"
                            >
                              <XMarkIcon className="w-6 h-6" />
                            </button>

                            <p className="absolute bottom-0 text-info left-0">
                              {currentIndex + 1}/{images.length}
                            </p>
                            <button
                              type="button"
                              onClick={() => imgInput.current.click()}
                              className="absolute bottom-0 p-2  left-[calc(50%-20px)] text-mainOrange  rounded-full focus:outline-none"
                            >
                              <PlusCircleIcon className="w-6 h-6" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 하단 입력 폼 */}
                  <div className="divider mx-12" />
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">오늘은 어떠셨나요?</span>
                      </div>
                      <input
                        type="text"
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>

                  {/* submit 버튼 */}
                  <button
                    onClick={submitHandle}
                    className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    작성
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto p-4"></div>
      </div>
      <input
        ref={imgInput}
        className="hidden"
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        // className="mb-4"
      />
    </>
  );
}

export default CreateContentDrawer;
