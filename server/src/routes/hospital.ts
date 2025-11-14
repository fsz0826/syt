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
        code: 200,
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

export default router