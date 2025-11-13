import request from "@/utils/request"

enum API {
  USERREGISTER_URL = "/register",
}

export const reqUserRegister = (data: object) => {
  return request.post(API.USERREGISTER_URL, data)
}
