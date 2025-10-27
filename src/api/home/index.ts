//首页接口
import request from "@/utils/request";

enum API {
  HOSPITAL_URL = "/list/orginfo?parm=&pageNumber=1&pageSize=20&status=",
}
// export const reqHospital = (pageNumber: number, pageSize: number) => {
//   return request.get(
//     `${API.HOSPITAL_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`
//   );
// };
export const reqHospital = () => {
  return request.get(API.HOSPITAL_URL);
};
