import express, { Request, Response } from "express";

const router = express.Router();

// 健康检查接口
router.get("/healthz", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default router;