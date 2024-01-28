// 验证手机号规则
export const checkMobile = (rule: any, value: string, callback: Function) => {
if (!value) {
    return callback(new Error('手机号不能为空'));
  }
  setTimeout(() => {
    const reg = /^1[3456789]\d{9}$/;
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号'));
    } else {
      callback();
    }
  }, 1000);
}