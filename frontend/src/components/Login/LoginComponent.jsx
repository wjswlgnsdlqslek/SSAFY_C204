import React from "react";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUserStore from "../../store/userStore";


function LoginComponent() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        // const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        // if (!emailRegEx.test(currentEmail)) {
        //     setIsEmail(false);
        //     setEmailMessage("올바른 이메일 형식이 아닙니다.");
        // } else {
        //     setIsEmail(true);
        //     setEmailMessage("올바른 이메일 형식입니다.");
        // }
        // onChangeFormVaild();
    };
    
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        // const passwordRegExp = /^[A-Za-z0-9]{8,20}$/

        // if (!passwordRegExp.test(currentPassword)) {
        //     setIsPassword(false);
        //     setPasswordMessage("8~20자 사이의 숫자 + 영문자로 입력해주세요.")
        // } else {
        //     setIsPassword(true);
        //     setPasswordMessage("안전한 비밀번호 입니다.")
        // }
        // onChangeFormVaild();
    }

    const goToSignup = () => {
        navigate('/signup');
    }

    const createUserObject = () => {
        let user = {
            email,
            password
        }

        return user
    }

    const userLogin = async () => {
        // const user = createUserObject();
        await useUserStore.getState().loginFunc(createUserObject())
        console.log(useUserStore.getState().isLogin)
        if (useUserStore.getState().isLogin) {
            navigate('/');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            userLogin();
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 justify-items-center mt-20 mb-20">
                <div className="me-36 ms-11 text-[#1c77c3] text-[20px] font-bold font-['Noto Sans']">
                    로그인 하고<br />WAVA를 시작해보세요.
                </div>
                <div className="w-[340px] [h-0px] ms-8 mt-2 mb-2 border border-gray-200 "></div>
                <div className="w-full max-w-xs">
                    <form onKeyDown={handleKeyDown} className="px-8 pt-6 pb-8 w-[350px] border border-[#1c77c3] rounded-lg shadow-lg shadow-blue-500/50">
                        <div className="mb-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                아이디
                            </label>
                            <input id="email" name="email" value={email} onChange={onChangeEmail} className="focus:outline-none ps-3 drop-shadow-md w-full h-10 border border-gray-400 hover:border-[#1c77c3] mb-3 rounded-lg" placeholder=" 이메일 입력"></input>
                            {/* <p className={`message ${isEmail ? 'text-green-600' : 'text-red-600'} text-xs`}>{emailMessage}</p> */}
                        </div>
                            
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                비밀번호
                            </label>
                            <input type="password" id="password" name="password" value={password} onChange={onChangePassword} className="focus:outline-none ps-3 drop-shadow-md w-full h-10 border border-gray-400 hover:border-[#1c77c3] mb-3 rounded-lg" placeholder=" 비밀번호 입력" />
                            {/* <p className={`message ${isPassword ? 'text-green-600' : 'text-red-600'} text-xs`}>{passwordMessage}</p> */}
                        </div>

                        <button type="button" onClick={userLogin} className={`w-full h-10 border rounded-[10px] mt-3 mb-1 drop-shadow-md bg-[#1c77c3] text-white`}>로그인</button>
                        <div className="text-center">
                            <span className="text-xs text-gray-400 hover:text-blue-500 cursor-pointer" onClick={goToSignup}>회원가입</span>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default LoginComponent;