import axios, { Method } from "axios";

const __axios__ = axios.create({
  baseURL: "/api",
  withCredentials: true,
  timeout: 3000,
});

type RequesterMethod = Extract<Method, "GET" | "POST" | "DELETE" | "PUT">;

export default async function requester<T1 = any, T2 = any>(
  url: string,
  method: RequesterMethod = "GET",
  data?: any
): Promise<RequesterResponse<T1, T2>> {
  try {
    const response = await __axios__.request<RequestResponse<T1, T2>>({
      url,
      method,
      params: (method === "GET" || method === "DELETE") && data,
      data: (method === "POST" || method === "PUT") && data,
    });

    if (response.data.code === "OK") {
      return {
        isSuccess: true,
        data: response.data.content,
      };
    }

    return {
      isSuccess: false,
      message: response.data.message,
      data: response.data.content,
    };
  } catch (error: unknown | Error) {
    if (error instanceof Error) {
      return {
        isSuccess: false,
        message: error.message || "잠시 후 다시 시도하세요.",
        data: null,
      };
    }

    return {
      isSuccess: false,
      message: "잠시 후 다시 시도하세요.",
      data: null,
    };
  }
}
