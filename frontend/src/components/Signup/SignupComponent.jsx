import React from "react";
import { useState } from "react";
import { register } from "../../api/userApi"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignupComponent() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [nickName, setNickName] = useState("");
    const [sido, setSido] = useState("");
    const [gugun, setGugun] = useState("");

    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");
    const [nickNameMessage, setNickNameMessage] = useState("");

    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");
    const [isPasswordConfirm, setIsPasswordConfirm] = useState("");
    const [isPhone, setIsPhone] = useState("");
    const [isNickName, setIsNickName] = useState("");

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

        if (!emailRegEx.test(currentEmail)) {
            setEmailMessage("올바른 이메일 형식이 아닙니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("올바른 이메일 형식입니다.");
            setIsEmail(false);
        }
    };

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^[A-Za-z0-9]{8,20}$/

        if (!passwordRegExp.test(currentPassword)) {
            setPasswordMessage("숫자 + 영문자 조합으로 8~20자 사이로 입력해주세요.")
            setIsPassword(false);
        } else {
            setPasswordMessage("안전한 비밀번호 입니다.")
            setIsPassword(true);
        }
    }

    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
            setIsPasswordConfirm(false);
        } else {
            setPasswordConfirmMessage("비밀번호가 일치합니다.");
            setIsPasswordConfirm(true);
        }
    };

    const onChangeNickName = (e) => {
        const currentNickName = e.target.value;
        setNickName(currentNickName);

        if (currentNickName.length === 0) {
            setNickNameMessage("이름을 입력해주세요.");
            setIsNickName(false);
        } else {
            setNickNameMessage("올바른 이름 형식입니다.");
            setIsNickName(true);
        }
    };

    const onChangePhone = (e) => {
        const currentPhone = e.target.value;
        setPhone(currentPhone);
        // const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        // if (!phoneRegExp.test(currentPhone)) {
        //     setPhoneMessage("올바른 형식이 아닙니다!");
        //     setIsPhone(false);
        // } else {
        //     setPhoneMessage("사용 가능한 번호입니다:-)");
        //     setIsPhone(true);
        // }
    };

    const onChangeSido = (e) => {
        const currentSido = e.target.value;
        setSido(currentSido);
    }

    const onChangeGugun = (e) => {
        const currentGugun = e.target.value;
        setGugun(currentGugun);
    }

    const userRegister = () => {

        const newUser = {
            email,
            password,
            nickName,
            phone,
            sido,
            gugun
        };

        register(newUser,
            (response) => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "회원가입이 완료되었습니다!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            },
            (error) => {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "회원가입이 실패하였습니다!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(error);
            }
        )
    }

    return (
        <>
            <div className="grid grid-cols-1 justify-items-center">
                <div className="text-[#1c77c3] text-[20px] font-bold font-['Noto Sans']">
                    회원가입을 위해<br />정보를 입력해주세요
                </div>
                <div className="w-[350px] [h-0px] mt-2 mb-2 border border-gray-200 "></div>
                <div className="text-center">
                    <form className="w-[350px] border border-[#1c77c3] rounded-lg shadow-lg shadow-blue-500/50">
                        <input id="email" name="email" value={email} onChange={onChangeEmail} className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-6 mb-3 rounded-lg" placeholder=" 이메일 입력"></input>
                        <p className="message">{emailMessage}</p>

                        <input id="password" name="password" value={password} onChange={onChangePassword} className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 비밀번호 입력" />
                        <p className="message">{passwordMessage}</p>

                        <input id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={onChangePasswordConfirm} className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 비밀번호 확인" />
                        <p className="message">{passwordConfirmMessage}</p>

                        <input id="phone" name="phone" value={phone} onChange={onChangePhone} className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 휴대폰 번호 입력" />
                        <p className="message">{phoneMessage}</p>

                        <input id="nickName" name="nickName" value={nickName} onChange={onChangeNickName} className="w-5/6 h-10 border border-gray-400 hover:border-[#1c77c3] mt-3 mb-3 rounded-lg" placeholder=" 닉네임 입력" />
                        <p className="message">{nickNameMessage}</p>

                        <div className="flex">
                            <select id="sido" name="sido" value={sido} onChange={onChangeSido} class="ms-7 me-0.5 mt-3 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>시/도 입력</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            <select id="gugun" name="gugun" value={gugun} onChange={onChangeGugun} class="ms-8 mt-3 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>시/구/군 입력</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <button type="button" onClick={userRegister} className="w-5/6 h-10 bg-[#1c77c3] text-white border rounded-[10px] mt-3 mb-6">회원가입</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignupComponent;