import jwt from "jsonwebtoken"

// JWT密钥，实际项目中应该从环境变量读取
const JWT_SECRET = process.env.JWT_SECRET || "syt_hospital_secret_key"

/**
 * 生成JWT Token
 * @param payload 用户信息载荷
 * @param expiresIn 过期时间，默认24小时
 * @returns JWT Token
 */
export function generateToken(payload: object, expiresIn: string | number = "24h"): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

/**
 * 验证JWT Token
 * @param token JWT Token
 * @returns 解码后的用户信息
 */
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    throw new Error("Invalid token")
  }
}