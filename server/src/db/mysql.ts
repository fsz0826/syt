import { createPool } from "mysql2/promise"

const pool = createPool({
  host: process.env.DB_HOST ?? "localhost",
  port: Number.parseInt(process.env.DB_PORT ?? "3306", 10),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "root",
  database: process.env.DB_NAME ?? "syt",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4_unicode_ci",
})

// 监听连接池事件
pool.on("connection", (connection) => {
  console.log(`[DB] New connection established (ID: ${connection.threadId})`)
})

pool.on("acquire", (connection) => {
  console.log(`[DB] Connection acquired (ID: ${connection.threadId})`)
})

pool.on("release", (connection) => {
  console.log(`[DB] Connection released (ID: ${connection.threadId})`)
})

pool.on("enqueue", () => {
  console.log("[DB] Waiting for available connection slot")
})

export default pool