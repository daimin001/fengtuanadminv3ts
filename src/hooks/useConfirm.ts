import { ElMessage, ElMessageBox } from 'element-plus'

export const useConfirm = () => {
  ElMessageBox.confirm(
    '确定删除该条数据吗？',
    'QFADMIN温馨提示',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
  .then(() => {
    ElMessage({
      type: 'success',
      message: '等后面调接口再写',
    })
  })
  .catch(() => {
    ElMessage({
      type: 'info',
      message: '取消',
    })
  })
}