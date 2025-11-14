import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt"

declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}

/**
 * 认证中间件
 * 验证JWT Token并将解码后的用户信息附加到request对象上
 */
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      code: 401,
      message: "访问令牌缺失",
      data: null
    })
  }

  try {
    const user = verifyToken(token)
    req.user = user
    next()
  } catch (error) {
    return res.status(403).json({
      code: 403,
      message: "访问令牌无效",
      data: null
    })
  }
}