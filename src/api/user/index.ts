import request from "@/utils/request"

enum API {
  USERREGISTER_URL = "/register",
  USERLOGIN_URL = "/login",
}

export const reqUserRegister = (data: object) => {
  return request.post(API.USERREGISTER_URL, data)
}

export const reqUserLogin = (data: object) => {
  return request.post(API.USERLOGIN_URL, data)
}
