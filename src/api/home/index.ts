//首页接口
import request from "@/utils/request";

enum API {
  HOSPITAL_URL = "/list/orginfo",
}
// export const reqHospital = (pageNumber: number, pageSize: number) => {
//   return request.get(
//     `${API.HOSPITAL_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
//   );
// };
export const reqHospital = (pageNumber: string, pageSize: string) => {
  return request.get(
    `${API.HOSPITAL_URL}?parm=&pageNumber=${pageNumber}&pageSize=${pageSize}&status=`
  );
};
