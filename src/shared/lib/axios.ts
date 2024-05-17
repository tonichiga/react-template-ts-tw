import axios from "axios";
import cookie from "../utils/cookie";
import { isClient } from "../utils/tools";

export const axiosForPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL,
  withCredentials: true,
});

export const axiosForNextApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const axiosForPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL,
  withCredentials: true,
});

axiosForPublic.interceptors.request.use(
  async function (config) {
    if (!isClient) return config;
    const controller = new AbortController();

    const locale = cookie.getCookie("NEXT_LOCALE");
    config.headers["Accept-Language"] = locale;

    return {
      ...config,
      signal: controller.signal,
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Request interceptor for API calls
axiosForPrivate.interceptors.request.use(
  async (config: any) => {
    if (!isClient) return config;

    const locale = cookie.getCookie("NEXT_LOCALE");
    const token = cookie.getCookie("token");

    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Language": locale,
      ...config.headers,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
// Response interceptor for API calls
axiosForPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const token = await userOperations.refresh();
      axios.defaults.headers.common["Authorization"] = `Bearer ${"token"}`;
      return axiosForPrivate(originalRequest);
    }
    return Promise.reject(error);
  },
);

// axiosForPrivate.interceptors.request.use(
//   async function (config) {
//     if (!isClient) return config;
//     const controller = new AbortController();

//     const locale = cookie.getCookie("NEXT_LOCALE");
//     const accessToken = cookie.getCookie("accessToken");
//     const rfToken = cookie.getCookie("rf_token");

//     // const decodedToken = parseJwt(accessToken);

//     // console.log(
//     //   chalk.green(
//     //     `[Axios] User ${
//     //       decodedToken ? decodedToken.id : "error on get user"
//     //     } send request to ${config.url}. RfToken: ${!!rfToken}`,
//     //   ),
//     // );

//     if (!rfToken && !accessToken) {
//       controller.abort();
//     }

//     config.headers.Authorization = `Bearer ${accessToken}`;
//     config.headers["Accept-Language"] = locale;

//     return {
//       ...config,
//       signal: controller.signal,
//     };
//   },
//   (error) => {
//     errorHandler("[Interceptor request] error ", error);
//     return Promise.reject(error);
//   },
// );

// axiosForPrivate.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.code === "ERR_CANCELED") {
//       console.log(chalk.red("[Interceptor response] request canceled"));
//       return Promise.reject({
//         status: 405,
//         message: "Request canceled, access token not found",
//       });
//     }
//     // обработка ошибки
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         // обновление токена
//         const token = "token-token";
//         // const token = await userOperations.refresh();

//         if (token) {
//           console.log(
//             chalk.green("[Interceptor response] refresh token accepted"),
//           );
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           // повторный запрос с обновленным токеном
//           return axios(originalRequest);
//         }
//       } catch (e) {
//         // обработка ошибки обновления токена
//         errorHandler("[Interceptor response] Error refreshing token: ", e);
//       }
//     }

//     // возврат ошибки, если не удалось обновить токен или повторить запрос
//     return Promise.reject(error);
//   },
// );

export default axiosForPrivate;
