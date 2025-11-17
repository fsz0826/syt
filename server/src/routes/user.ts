import express, { Request, Response, NextFunction } from "express"
import { createHash } from "crypto"

import pool from "../db/mysql"
import { generateToken } from "../utils/jwt"
import { authenticateToken } from "../middleware/auth"

const router = express.Router()

// 用户注册接口
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    const { phone, password } = req.body

    // 检查必填字段
    if (!phone || !password) {
      return res.json({
        code: "400",
        message: "手机号和密码为必填项",
        data: null,
      })
    }

    // 简单验证手机号格式
    const phoneRegex = /^1[3-9]\d{9}$/
    if (!phoneRegex.test(phone)) {
      return res.json({
        code: "400",
        message: "手机号格式不正确",
        data: null,
      })
    }

    // 验证密码强度
    if (password.length < 6) {
      return res.json({
        code: "400",
        message: "密码长度不能少于6位",
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
          code: "400",
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
        // 生成JWT token
        const token = generateToken({
          userId: result.insertId,
          phone,
        })

        res.json({
          code: "200",
          message: "注册成功",
          data: {
            userId: result.insertId,
            phone,
            token,
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
        code: "400",
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

        // 生成JWT token
        const token = generateToken({
          userId: user.id,
          phone: user.phone,
        })

        res.json({
          code: "200",
          message: "登录成功",
          data: {
            userId: user.id,
            phone: user.phone,
            token,
          },
        })
      } else {
        res.json({
          code: "400",
          message: "手机号或密码错误",
          data: null,
        })
      }
    } catch (error) {
      next(error)
    }
  }
)

// 获取用户信息接口
router.get(
  "/userinfo",
  authenticateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 从token中获取用户信息
      const user = req.user

      res.json({
        code: "200",
        message: "获取用户信息成功",
        data: {
          userId: user.userId,
          phone: user.phone,
        },
      })
    } catch (error) {
      next(error)
    }
  }
)

export default router
