import express, { Request, Response, NextFunction } from "express"
import { createHash } from "crypto"

import pool from "../db/mysql"

const router = express.Router()

// 用户注册接口
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    const { phone, password } = req.body

    // 检查必填字段
    if (!phone || !password) {
      return res.json({
        code: 400,
        message: "手机号和密码为必填项",
        data: null,
      })
    }

    try {
      // 检查手机号是否已存在
      const [existingUsers] = await pool.query<any[]>(
        "SELECT id FROM users WHERE phone = ?",
        [phone]
      )

      if (existingUsers.length > 0) {
        return res.json({
          code: 400,
          message: "该手机号已注册",
          data: null,
        })
      }

      // 密码加密(简单MD5加密，实际项目中建议使用bcrypt)
      const hashedPassword = createHash("md5").update(password).digest("hex")

      // 创建用户
      const [result]: any = await pool.query(
        "INSERT INTO users (phone, password, created_at) VALUES (?, ?, NOW())",
        [phone, hashedPassword]
      )

      if (result.affectedRows === 1) {
        res.json({
          code: 200,
          message: "注册成功",
          data: {
            userId: result.insertId,
            phone,
          },
        })
      } else {
        throw new Error("注册失败")
      }
    } catch (error) {
      next(error)
    }
  }
)

// 用户登录接口
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    const { phone, password } = req.body

    // 检查必填字段
    if (!phone || !password) {
      return res.json({
        code: 400,
        message: "手机号和密码为必填项",
        data: null,
      })
    }

    try {
      // 查询用户
      const [users] = await pool.query<any[]>(
        "SELECT id, phone FROM users WHERE phone = ? AND password = ?",
        [phone, createHash("md5").update(password).digest("hex")]
      )

      if (users.length > 0) {
        const user = users[0]
        res.json({
          code: 200,
          message: "登录成功",
          data: {
            userId: user.id,
            phone: user.phone,
          },
        })
      } else {
        res.json({
          code: 400,
          message: "手机号或密码错误",
          data: null,
        })
      }
    } catch (error) {
      next(error)
    }
  }
)

export default router
