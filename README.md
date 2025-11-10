# 项目说明

该仓库包含前端 Vue 3 应用以及位于 `server` 目录下的轻量级 Express 后端服务，两者配合即可完成医院列表的查询、筛选与分页展示。

## 环境要求

- Node.js ≥ 18
- PNPM（前端使用）与 NPM（或 PNPM）均可执行后端依赖安装

## 启动步骤

1. **安装前端依赖**

   ```bash
   pnpm install
   ```

2. **安装后端依赖**

   ```bash
   cd server
   npm install
   # 或 pnpm install
   ```

3. **启动后端服务（默认端口 3000）**

   ```bash
   npm run dev
   ```

4. **在另一个终端启动前端**

   ```bash
   cd ..
   pnpm run dev
   ```

前端开发服务器会通过 `vite.config.ts` 中的代理将以 `/poms` 开头的请求转发到 `http://localhost:3000`，从而获取医院数据。

## 后端数据库配置

后端默认连接参数如下，可通过环境变量覆盖：

| 环境变量 | 默认值 | 说明 |
| --- | --- | --- |
| `DB_HOST` | `localhost` | 数据库主机 |
| `DB_PORT` | `3306` | 数据库端口 |
| `DB_USER` | `root` | 数据库用户名 |
| `DB_PASSWORD` | `root` | 数据库密码 |
| `DB_NAME` | `syt` | 数据库名称 |

可在启动命令前设置，例如 Windows PowerShell：

```powershell
$env:DB_PASSWORD="your_password"
npm run dev
```

或在 Bash：

```bash
DB_PASSWORD=your_password npm run dev
```

## 后端接口说明

- `GET /poms/list/orginfo`
  - 查询参数：
    - `parm`：按名称或编码模糊查询
    - `pageNumber`：第几页（默认 1）
    - `pageSize`：每页条数（默认 10，最大 100）
    - `status`：按医院状态过滤，可选 `normal`、`suspended`、`planning`
  - 返回字段：
    - `data.total`：匹配记录总数
    - `data.pageNumber`、`data.pageSize`：分页信息
    - `data.myOrgInfos`：医院数据列表

如需快速检查后端是否存活，可访问 `GET /healthz`。
