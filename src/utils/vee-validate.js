import { required, confirmed, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: '必填项不能为空。'
})

extend('email', {
  ...email,
  message: '无效的邮件格式。'
})

extend('confirmed', {
  ...confirmed,
  message: '确认输入不匹配。'
})
