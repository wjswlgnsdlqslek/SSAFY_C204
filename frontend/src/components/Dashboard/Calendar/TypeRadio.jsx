import { useState } from "react";

function TypeRadio({ selected, setSelected }) {
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <>
      {/* <!-- TYPE 라디오 그룹 --> */}
      <div className="flex flex-col items-center">
        <span className="label-text mb-2">TYPE</span>
        <div className="flex">
          <div className="form-control mr-4">
            <label className="label cursor-pointer flex flex-col items-center">
              <span className="label-text mb-2">WORK</span>
              <input
                type="radio"
                name="type"
                value="WORK"
                className="radio checked:bg-red-500"
                checked={selected === "WORK"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer flex flex-col items-center">
              <span className="label-text mb-2">REST</span>
              <input
                type="radio"
                name="type"
                value="REST"
                onChange={handleChange}
                checked={selected === "REST"}
                className="radio checked:bg-blue-500"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default TypeRadio;
