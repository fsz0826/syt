import express, { Request, Response, NextFunction } from "express"
import type { RowDataPacket } from "mysql2"

import pool from "../db/mysql"

const router = express.Router()

interface TotalRow extends RowDataPacket {
  total: number
}

interface HospitalRow extends RowDataPacket {
  id: string
  code: string
  name: string
  medicalLevel: string
  status: string
  province: string
  city: string
  address: string
}

interface DepartmentRow extends RowDataPacket {
  id: number
  name: string
  description: string
  is_special: boolean
}

interface HospitalDetailRow extends RowDataPacket {
  id: number
  introduction: string
  established_date: string
  bed_count: number
  annual_visit: number
  contact_phone: string
  emergency_phone: string
  website: string
  email: string
  postal_code: string
  latitude: number
  longitude: number
}

interface AppointmentNoticeRow extends RowDataPacket {
  id: number
  title: string
  content: string
  publish_date: string
  effective_date: string
  expiry_date: string
}

interface ClosureNoticeRow extends RowDataPacket {
  id: number
  department: string
  doctor_name: string
  closure_date: string
  closure_time: string
  reason: string
  is_emergency: boolean
  created_at: string
}

// 医院列表接口
router.get(
  "/list/orginfo",
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      parm = "",
      pageNumber = "1",
      pageSize = "10",
      status = "",
    } = req.query as Record<string, string>

    const normalizedParm = parm.trim().toLowerCase()
    const normalizedStatus = status.trim().toLowerCase()

    const page = Math.max(Number.parseInt(pageNumber, 10) || 1, 1)
    const size = Math.min(Math.max(Number.parseInt(pageSize, 10) || 10, 1), 100)

    try {
      const filters: string[] = []
      const params: unknown[] = []

      if (normalizedParm.length > 0) {
        filters.push("(LOWER(name) LIKE ? OR LOWER(code) LIKE ?)")
        const likeValue = `%${normalizedParm}%`
        params.push(likeValue, likeValue)
      }

      if (normalizedStatus.length > 0) {
        filters.push("LOWER(status) = ?")
        params.push(normalizedStatus)
      }

      const whereClause =
        filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : ""

      const countSql = `SELECT COUNT(*) AS total FROM hospitals ${whereClause}`
      const dataSql = `SELECT id, code, name, medical_level AS medicalLevel, status, province, city, address
                     FROM hospitals
                     ${whereClause}
                     ORDER BY CAST(id AS UNSIGNED)
                     LIMIT ?
                     OFFSET ?`

      const countParams = [...params]
      const dataParams = [...params, size, (page - 1) * size]

      const [countRows] = await pool.query<TotalRow[]>(countSql, countParams)
      const total = countRows[0]?.total ?? 0

      const [rows] = await pool.query<HospitalRow[]>(dataSql, dataParams)

      res.json({
        code: "200",
        message: "success",
        data: {
          total,
          pageNumber: page,
          pageSize: size,
          myOrgInfos: rows,
        },
      })
    } catch (error) {
      next(error)
    }
  }
)

// 根据医院code获取医院详细信息
router.get(
  "/detail/:code",
  async (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.params

    if (!code) {
      res.status(400).json({
        code: "400",
        message: "医院code不能为空",
        data: null,
      })
      return
    }

    try {
      // 获取医院基本信息
      const [hospitalRows] = await pool.query<HospitalRow[]>(
        "SELECT id, code, name, medical_level AS medicalLevel, status, province, city, address FROM hospitals WHERE code = ?",
        [code]
      )

      if (hospitalRows.length === 0) {
        res.status(404).json({
          code: "404",
          message: "未找到指定的医院",
          data: null,
        })
        return
      }

      const hospital = hospitalRows[0]

      // 获取科室信息
      const [departments] = await pool.query<DepartmentRow[]>(
        "SELECT id, name, description, is_special as isSpecial FROM departments WHERE hospital_code = ?",
        [code]
      )

      // 获取医院详情
      const [details] = await pool.query<HospitalDetailRow[]>(
        "SELECT introduction, established_date as establishedDate, bed_count as bedCount, annual_visit as annualVisit, contact_phone as contactPhone, emergency_phone as emergencyPhone, website, email, postal_code as postalCode, latitude, longitude FROM hospital_details WHERE hospital_code = ?",
        [code]
      )

      // 获取预约通知
      const [appointmentNotices] = await pool.query<AppointmentNoticeRow[]>(
        "SELECT id, title, content, publish_date as publishDate, effective_date as effectiveDate, expiry_date as expiryDate FROM appointment_notices WHERE hospital_code = ? ORDER BY publish_date DESC",
        [code]
      )

      // 获取停诊信息
      const [closureNotices] = await pool.query<ClosureNoticeRow[]>(
        "SELECT id, department, doctor_name as doctorName, closure_date as closureDate, closure_time as closureTime, reason, is_emergency as isEmergency, created_at as createdAt FROM closure_notices WHERE hospital_code = ? ORDER BY closure_date DESC",
        [code]
      )

      res.json({
        code: "200",
        message: "success",
        data: {
          hospital,
          departments,
          details: details[0] || null,
          appointmentNotices,
          closureNotices,
        },
      })
    } catch (error) {
      next(error)
    }
  }
)

export default router
