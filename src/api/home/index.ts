//首页接口
import request from "@/utils/request"

enum API {
  HOSPITAL_URL = "/list/orginfo",
  CAPTCHACODE_URL = "/captcha",
}
// export const reqHospital = (pageNumber: number, pageSize: number) => {
//   return request.get(
//     `${API.HOSPITAL_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
//   );
// };
export const reqHospital = (
  parm: string,
  pageNumber: string,
  pageSize: string,
  status: string
) => {
  return request.get(
    `${API.HOSPITAL_URL}?parm=${parm}&pageNumber=${pageNumber}&pageSize=${pageSize}&status=${status}`
  )
}
export const reqCaptchaCode = () => {
  return request.get(API.CAPTCHACODE_URL)
}
