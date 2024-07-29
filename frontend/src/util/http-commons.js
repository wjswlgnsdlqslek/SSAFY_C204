import axios from "axios";

function localAxios() {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_SERVER_ADDRESS
    });
    instance.defaults.headers.common["Authorization"] = "";
    instance.defaults.headers.common["Content-Type"] = "application/json";
    return instance;
}

export { localAxios };