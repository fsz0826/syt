// 医院详情相关接口
import request from "@/utils/request"

enum API {
  HOSPITAL_DETAIL_URL = "/detail/",
}

/**
 * 根据医院code获取医院详细信息
 * @param code 医院编码
 * @returns 医院详细信息
 */
export const reqHospitalDetail = (code: string) => {
  return request.get(API.HOSPITAL_DETAIL_URL + code)
}