import useDeviceStore from "../store/deviceStore";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../components/common/customDatePicker";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { sigungu } from "../api/dummy";
import { createWorkation } from "../api/createWorkationApi";
import Swal from "sweetalert2";
import { validateWorkation } from "../util/func";

function CreateWorkationPage() {
  const isMobile = useDeviceStore((state) => state.isMobile);
  const navigate = useNavigate();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [sido, setSido] = useState("");
  const [gugun, setGugun] = useState("");
  const [job, setJob] = useState("");

  // 시도 변경 함수
  const sidoChangeHandle = (e) => {
    if (e === sido) {
      return;
    }
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    setGugun("");
    setSido(e);
  };

  // 구군 변경 함수
  const gugunChangeHandle = (e) => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    setGugun(e);
  };

  // 직업 변경 함수
  const onChangeJob = (e) => {
    setJob(e.target.value);
  };

  // 서브밋 함수
  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const data = {
        start,
        end,
        sido,
        gugun,
        job,
      };

      if (validateWorkation(data)) {
        // const result = await createWorkation(data);
        if (true) {
          // result 반영할것
          Swal.fire({
            icon: "success",
            title: "완료!",
            showConfirmButton: false,
            width: "300px",
          });

          return;
        }
      }

      Swal.fire({
        icon: "error",
        title: "확인해 주세요",
        text: "입력값이 잘못되었어요!",
        // footer: '<a href="#">Why do I have this issue?</a>',
        timer: 3000,
      });
    } catch (e) {
      console.error(e, "workation create에러");
    }
  };

  return (
    <div
      className={`
      ${
        isMobile
          ? "flex flex-col items-center justify-center min-h-screen max-h-screen w-screen overflow-auto p-4"
          : "grid grid-cols-1 justify-items-center mt-20 mb-20"
      }
    `}
    >
      <div
        className={`
        ${isMobile ? "w-full max-w-[90%] scale-90" : ""}
      `}
      >
        <div
          className={`
          ${
            isMobile
              ? "text-[#1c77c3] text-xl font-bold mb-4"
              : "text-[#1c77c3] text-[20px] font-bold font-['Noto Sans']"
          }
        `}
        >
          워케이션을 등록해 주세요!
          <br />
          WAVA를 시작해보아요!
          <br />
          문구 수정해주세요 ㅠㅠ...
        </div>
        <div
          className={`
          ${
            isMobile
              ? "w-full h-px bg-gray-200 my-4"
              : "w-[350px] [h-0px] mt-2 mb-2 border border-gray-200"
          }
        `}
        />

        <div className="w-full max-w-xs">
          <form
            className={`
            ${
              isMobile
                ? "space-y-4"
                : "px-8 pt-6 pb-8 w-[350px] border border-[#1c77c3] rounded-lg shadow-lg shadow-blue-500/50"
            }
          `}
          >
            <div className="mb-3">
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">
                  {sido ? sido : "시도 설정"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content select-none menu bg-base-100 rounded-box z-10 w-52 p-2 shadow overflow-y-auto max-h-96 block"
                >
                  {Object.keys(sigungu).map((e) => (
                    <li key={e}>
                      <button type="button" onClick={() => sidoChangeHandle(e)}>
                        {e}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">
                  {gugun ? gugun : "구군 설정"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow overflow-y-auto max-h-96 block"
                >
                  {sido !== ""
                    ? sigungu[sido]?.map((e) => (
                        <li key={e}>
                          <button
                            type="button"
                            onClick={() => gugunChangeHandle(e)}
                          >
                            {e}
                          </button>
                        </li>
                      ))
                    : "시도를 설정해 주세요."}
                </ul>
              </div>
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomDatePicker
                  label="시작일"
                  timeSet={start}
                  editTimeSet={setStart}
                />

                <div className="my-3" />
                <CustomDatePicker
                  label="종료일"
                  timeSet={end}
                  editTimeSet={setEnd}
                />
              </LocalizationProvider>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 my-4"
                htmlFor="password"
              >
                직업
              </label>
              <input
                id="job"
                name="job"
                type="text"
                value={job}
                onChange={onChangeJob}
                className="focus:outline-none ps-3  w-full h-10 border border-gray-400 hover:border-[#1c77c3] mb-3 rounded-lg"
                placeholder=""
              />
            </div>

            <button
              type="button"
              onClick={submitHandle}
              className="w-full h-10 border rounded-[10px] mt-3 mb-1 drop-shadow-md bg-[#1c77c3] text-white"
            >
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkationPage;
