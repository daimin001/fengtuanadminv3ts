import { WebSocket } from 'vite'
import Data = WebSocket.Data

export interface User {
  id: number | string
  role_id: number
  role_name: string
  uname: string
  mobile: string
  state: number
  avatar: string
  created_at: string
  updated_at: string
  [key: string]: any
}

export interface PostUserPayloadType {
  username: string,
  password: string,
  mobile?: string,
  avatar?: string,
}

// 获取用户信息
export interface GetUserPayloadType {
  pagenum?: number;
  pagesize?: number;
  username?: string;
  mobile?: string;
  role_name?: string;
  created_at?: string;
  updated_at?: string;
  create_at_temp?: Data[];
  updated_at_temp?: Data[];
}

// mock 数据
export interface GetUserResType {
  state?: number
  msg?: string
  data: User[]
  total: number
}

// 用户编辑回显
export interface PutUserPayloadType extends PostUserPayloadType {
  user_id: number
}

// 分配角色
export interface PutAssignRolePayloadType {
  uname?: string,
  role_name?: string,
  user_id: number,
  role_id: number
}