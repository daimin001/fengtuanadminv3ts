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

// 编辑角色api的请求参数类型
export interface PutRolePayloadType extends PostRolePayloadType {
  role_id: number | string
}

// 给角色分配权限api的请求参数类型
export interface PutAssignAuthPayloadType {
  role_name: string,
  role_id: number,
  auth_ids: string,
  auth_ids_son: string,
}