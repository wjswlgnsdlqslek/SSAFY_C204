import { create } from 'zustand';
import { login } from '../api/userApi'
import { httpStatusCode } from '../util/http-status';
import Swal from 'sweetalert2';

const useUserStore = create(set => ({
    isLogin: false,
    isLoginError: false,
    // userInfo: useState(""),
    isValidToken: false,
    loginFunc: async(user) => {
        console.log(user)
        await login(
            user,
            (response) => {
                console.log("여기")
                console.log(response.status)
                if (response.status === httpStatusCode.OK) {
                    console.log("로그인 성공");
                    let accessToken = response.headers['authorization'];
                    let refreshToken = response.headers['refreshtoken'];
                    set(() => ({ isLogin: true }));
                    set(() => ({ isLoginError: false }));
                    set(() => ({ isValidToken: true }));
                    sessionStorage.setItem("accessToken", accessToken);
                    sessionStorage.setItem("refreshToken", refreshToken);
                }
            },
            async (error) => {
                const errorMessage = error.response.data.msg;
                await Swal.fire({
                    position: "top",
                    icon: "error",
                    titleText: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("로그인 실패");
                console.log(error);
                set(() => ({ isLogin: false }));
                set(() => ({ isLoginError: true }));
                set(() => ({ isValidToken: false }));
            }
        )
    }
}));

export default useUserStore;

