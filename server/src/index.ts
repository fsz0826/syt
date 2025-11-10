import cors from "cors"
import express, { Request, Response, NextFunction } from "express"
import type { RowDataPacket } from "mysql2"

import pool from "./db/mysql"

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  const start = Date.now()
  console.log(
    `[Request] ${req.method} ${req.originalUrl} query=${JSON.stringify(
      req.query
    )} body=${JSON.stringify(req.body)}`
  )
  res.on("finish", () => {
    const duration = Date.now() - start
    console.log(
      `[Response] ${req.method} ${req.originalUrl} status=${res.statusCode} duration=${duration}ms`
    )
  })
  next()
})

app.get("/healthz", (_req: Request, res: Response) => {
  res.json({ status: "ok" })
})

app.get(
  "/poms/list/orginfo",
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

      interface TotalRow extends RowDataPacket {
        total: number
      }

      const [countRows] = await pool.query<TotalRow[]>(countSql, countParams)
      const total = countRows[0]?.total ?? 0

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

const port = Number.parseInt(process.env.PORT ?? "3000", 10)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend service is running at http://localhost:${port}`)
})

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error("[Error]", error)
  res.status(500).json({
    code: 500,
    message: "服务器内部错误，请稍后再试。",
  })
})
