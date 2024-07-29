// import { importantOptions, typeOptions } from "../dataset";

// function Filters({ filter, setFilter }) {
//   const imOptions = [{ label: "ALL", value: "ALL" }, ...importantOptions];
//   const tyOptions = [{ label: "ALL", value: "ALL" }, ...typeOptions];

//   const typeChangeHandle = (evt) => {
//     if (evt.target.value === filter?.type) return;
//     setFilter((state) => ({
//       ...state,
//       type: evt.target.value,
//     }));
//   };
//   const importantChangeHandle = (evt) => {
//     if (evt.target.value === filter?.important) return;
//     setFilter((state) => ({
//       ...state,
//       important: evt.target.value,
//     }));
//   };

//   return (
//     <>
//       <div className="collapse bg-base-200">
//         <input type="checkbox" />
//         <div className="collapse-title text-xl font-medium text-center mt-5">
//           필터 옵션
//         </div>
//         <div className="collapse-content">
//           {/* collapse 시작 */}
//           <div className="divider" />
//           <div className="grid grid-cols-2 gap-4">
//             <div className="border-solid border-2 bg-white border-black rounded-md px-3 py-1">
//               <h3 className="text-center">타입</h3>
//               {tyOptions.map((opt) => (
//                 <div key={opt.value} className="form-control">
//                   <label className="label cursor-pointer">
//                     <span className="label-text">{opt.label}</span>
//                     <input
//                       type="checkbox"
//                       value={opt.value}
//                       className={`toggle checked:${opt.color}`}
//                       checked={filter?.type === opt.value}
//                       onChange={typeChangeHandle}
//                     />
//                   </label>
//                 </div>
//               ))}
//             </div>
//             <div className="border-solid border-2 bg-white border-black rounded-md px-3 py-1">
//               <h3 className="text-center">우선순위</h3>
//               {imOptions.map((opt) => (
//                 <div key={opt.value} className="form-control">
//                   <label className="label cursor-pointer">
//                     <span className="label-text">{opt.label}</span>
//                     <input
//                       type="checkbox"
//                       value={opt.value}
//                       className={`toggle checked:${opt.color}`}
//                       checked={filter?.important === opt.value}
//                       onChange={importantChangeHandle}
//                     />
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* collapse 끝 */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Filters;

import { useState } from "react";
import { importantOptions, typeOptions } from "../dataset";

function Filters({ filter, setFilter }) {
  const imOptions = [{ label: "ALL", value: "ALL" }, ...importantOptions];
  const tyOptions = [{ label: "ALL", value: "ALL" }, ...typeOptions];

  const typeChangeHandle = (value) => {
    if (value === filter?.type) return;
    setFilter((state) => ({
      ...state,
      type: value,
    }));
  };

  const importantChangeHandle = (value) => {
    if (value === filter?.important) return;
    setFilter((state) => ({
      ...state,
      important: value,
    }));
  };

  return (
    <div className="flex flex-col p-2 space-y-2">
      <div className="flex space-x-2">
        {tyOptions.map((opt) => (
          <button
            key={opt.value}
            value={opt.value}
            className={`btn btn-sm ${
              filter?.type === opt.value
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => typeChangeHandle(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {imOptions.map((opt) => (
          <button
            key={opt.value}
            value={opt.value}
            className={`btn btn-sm ${
              filter?.important === opt.value
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => importantChangeHandle(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
