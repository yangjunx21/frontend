/**
 * @note 本文件是一个网络请求 wrapper 示例，其作用是将所有网络请求汇总到一个函数内处理
 *       我们推荐你在大作业中也尝试写一个网络请求 wrapper，本文件可以用作参考
 */

import axios, { AxiosError, AxiosResponse } from "axios";

const network = axios.create({
  baseURL: "",
});

enum NetworkErrorType {
  CORRUPTED_RESPONSE,
  UNKNOWN_ERROR,
}

export class NetworkError extends Error {
  type: NetworkErrorType;
  message: string;

  constructor(
    _type: NetworkErrorType,
    _message: string,
  ) {
    super();

    this.type = _type;
    this.message = _message;
  }

  toString(): string { return this.message; }
  valueOf(): Object { return this.message; }
}

export const remoteURL2ObjURL = async (remote_src: string) => {
  // https://gist.github.com/nebaughman/6af3d7fadbbbd1f641188079a545ae00
  return axios.get(remote_src, { responseType: 'blob' })
    .then(async (res: any) => {
      console.log("res:", res)
      if (res.data?.type === 'application/json') {
        throw new Error(await res.data.text())
      }
      return URL.createObjectURL(res.data)
    })
    .catch((err: any) => {
      console.log("err:", err)
      ElMessage("Resource load error: " + err.message)
    })
}

export const request = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data?: any,
  params?: any,
  responseType?: any,
) => {
  const response = await network.request({ method, url, data, params, responseType})
    .catch((err: AxiosError) => {
      // @note: 这里的错误处理显然是极其粗糙的，大作业中你可以根据组内约定的 API 文档细化错误处理

      throw new NetworkError(
        NetworkErrorType.UNKNOWN_ERROR,
        `[${err.response?.status}] ` + (err.response?.data as any).info,
      );
    });

  // 小作业: response?.data.code === 0
  // 实际上，if之外的分支理应不可达，但后端返回HTTP状态码常为200，因此不能直接判断HTTP状态码
  if (response?.data.code === 0 || response?.data.code === 200 ) {
    return { ...response.data, code: response.data?.code };
  } else {
    /**
     * @note 这里的错误处理显然是极其粗糙的，大作业中你可以根据组内约定的 API 文档细化错误处理。
     *       然而事实上，如果按照类似本次小作业的 API 文档设计，即 code 不为 0 时 HTTP 状态码设为类似 400 等表示错误的状态，
     *       那么，该分支是事实不可达的，所有表示错误的 HTTP 状态响应应当在上面的 `catch` 块中已经被捕获。
     *       如果到达该分支，则说明后端的错误处理出现问题，code 和 HTTP 状态码一致性未正确处理。
     */
    console.log("不被期待的行为")
    console.log("response: ", response)
    throw new NetworkError(
      NetworkErrorType.UNKNOWN_ERROR,
      response?.data.message,
    );
  }
};