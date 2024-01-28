export interface PostAuthPayloadType {
  auth_name: string,
  type: number,//种类：1-菜单，2-按钮
  path?: string,
  component?: string,
  keep_alive?: number,//是否缓存：0-否，1-是
  pid: number,//父级id
}