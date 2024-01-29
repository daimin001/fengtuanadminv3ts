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

// 验证密码规则
export const checkPassword = (rule: any, value: string, callback: Function) => {
  if (!value) {
    return callback();
  }
  setTimeout(() => {
    const reg = /^[a-zA-Z0-9_-]{6,16}$/;
    if (!reg.test(value)) {
      callback(new Error('密码必须是6-16位数字和字母组合'));
    } else {
      callback();
    }
  }, 1000);
}