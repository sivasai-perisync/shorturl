import { rootUrl, tinyUrlToken } from "../constants";
import { postAPICall } from "./axiosMethodCalls";

export const createShortUrlApi = (data, setLoader, setShortUrl) =>
    postAPICall(`${rootUrl}/create`, data, {
        headers: {
            "Authorization": `Bearer ${tinyUrlToken}`,
        },

    })
        .then((response) => {
            setShortUrl(response?.data);
            console.log(response?.data);
            localStorage.setItem('data', JSON.stringify(response?.data));
            setLoader(false);
        })
        .catch((error) => {
            console.error(error);
            setLoader(false);
        });