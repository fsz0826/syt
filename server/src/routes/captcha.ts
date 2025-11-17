import express, { Request, Response } from "express"
import { createHash } from "crypto"

const router = express.Router()

// 生成随机验证码
function generateCaptchaCode(length: number = 4): string {
  const characters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

// 生成简单的SVG验证码
function generateCaptchaSVG(text: string): string {
  const width = 120
  const height = 40

  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f0f0f0"/>`

  // 添加干扰线
  for (let i = 0; i < 5; i++) {
    const x1 = Math.random() * width
    const y1 = Math.random() * height
    const x2 = Math.random() * width
    const y2 = Math.random() * height
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(${r},${g},${b},0.5)" stroke-width="1"/>`
  }

  // 添加干扰点
  for (let i = 0; i < 30; i++) {
    const cx = Math.random() * width
    const cy = Math.random() * height
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    svg += `<circle cx="${cx}" cy="${cy}" r="1" fill="rgba(${r},${g},${b},0.3)"/>`
  }

  // 添加文字
  const chars = text.split("")
  const charWidth = width / chars.length
  for (let i = 0; i < chars.length; i++) {
    const x = charWidth * i + charWidth / 2
    const y = height / 2
    const rotation = Math.random() * 0.4 - 0.2
    const r = Math.floor(Math.random() * 100) + 50
    const g = Math.floor(Math.random() * 100) + 50
    const b = Math.floor(Math.random() * 100) + 50

    svg += `<text x="${x}" y="${y}" 
              transform="rotate(${(rotation * 180) / Math.PI}, ${x}, ${y})"
              font-family="Arial, sans-serif" 
              font-size="20" 
              font-weight="bold" 
              fill="rgb(${r},${g},${b})" 
              text-anchor="middle" 
              dominant-baseline="middle">
              ${chars[i]}
            </text>`
  }

  svg += "</svg>"
  return svg
}

// 验证码接口
router.get("/captcha", (req: Request, res: Response) => {
  // 生成验证码文本
  const captchaCode = generateCaptchaCode(4)

  // 生成验证码图片 (SVG格式)
  const svgImage = generateCaptchaSVG(captchaCode)

  // 转换为base64
  const base64Image = Buffer.from(svgImage).toString("base64")
  const imageDataURI = `data:image/svg+xml;base64,${base64Image}`

  // 返回JSON格式数据
  res.json({
    code: "200",
    message: "success",
    data: {
      captchaImage: imageDataURI,
      // 实际项目中不应返回验证码文本，这里仅为演示
      // captchaCode: captchaCode,
    },
  })
})

export default router
