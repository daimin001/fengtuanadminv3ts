export interface Role {
  id: number | string
  role_name: string
  role_desc: string
  created_at: string
  updated_at: string
  [key: string]: any
}

// 创建角色api的请求参数类型
export interface PostRolePayloadType {
  role_name: string,
  role_desc?: string,
}

// 获取角色列表api的请求参数类型
export interface GetRolePayloadType {
  pagenum?: number,
  pagesize?: number,
  role_name?: string,
}

// 获取表格mock数据的返回类型
export interface GetRoleResType {
  state?: number
  msg?: string
  data: Role[]
  total: number
}