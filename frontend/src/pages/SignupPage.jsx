import { Fragment } from "react";

function SignupPage() {
  return (
      <>
        {/* grid place-items-center */}
            <div className="grid grid-cols-1 justify-items-center">
                <div className="text-[#1c77c3] text-[20px] font-bold font-['Noto Sans']">
                    회원가입을 위해<br/>정보를 입력해주세요
                </div>
                <div className="w-[350px] [h-0px] mt-2 mb-2 border border-gray-200 "></div>
                <div className="text-center">
                    <form className="w-[350px] border border-[#1c77c3] rounded-lg shadow-lg shadow-blue-500/50">
                        <input id="email" className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-6 mb-3 rounded-lg" placeholder=" 이메일 입력"></input>
                        <input id="password" className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 비밀번호 입력"/>
                        <input id="passwordConfirm" className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 비밀번호 확인"/>
                        <input id="phone" className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 휴대폰 번호 입력"/>
                        <input id="nickName" className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 닉네임 입력" />
                        <div className="flex">
                            <select id="sido" class="ms-7 me-0.5 mt-3 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>시/도 입력</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            <select id="gugun" class="ms-8 mt-3 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>시/구/군 입력</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                      <button className="w-5/6 h-10 bg-[#1c77c3] text-white border rounded-[10px] mt-3 mb-6">회원가입</button>
                    </form>
                </div>
            </div>
        </>
  );
}

export default SignupPage;
