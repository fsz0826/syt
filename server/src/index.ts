import cors from "cors"
import express, { Request, Response, NextFunction } from "express"

import hospitalRouter from "./routes/hospital"
import captchaRouter from "./routes/captcha"

const app = express()
app.use(cors())
app.use(express.json())

// 日志中间件
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

// 路由
app.use("/api", hospitalRouter)
app.use("/api", captchaRouter)

const port = Number.parseInt(process.env.PORT ?? "3000", 10)

app.listen(port, () => {
  console.log(`Backend service is running at http://localhost:${port}`)
})

// 错误处理中间件
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error("[Error]", error)
  res.status(500).json({
    code: 500,
    message: "服务器内部错误，请稍后再试。",
  })
})
