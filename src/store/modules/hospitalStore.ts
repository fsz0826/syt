import { defineStore } from "pinia"
import { reqHospitalDetail } from "@/api/hospital"

export const useHospitalStore = defineStore("hospitalStore", () => {
  const hospitalInfo = {} as any
  async function getHospitalInfo(code: string) {
    try {
      const result = await reqHospitalDetail(code)
      hospitalInfo.value = result.data
    } catch (error) {
      console.log(error)
    }
  }
  return { hospitalInfo, getHospitalInfo }
})
