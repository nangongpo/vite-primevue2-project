<template>
  <body class="login-body">
    <div class="mobile-banner">
      <Logo label="" style="height: 48px" />
    </div>
    <div class="login-panel">
      <Logo label="" style="height: 48px" />
    </div>
    <div class="login-card">
      <div class="top-border" />
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(handleLogin)" class="login-content">
          <h1>登录</h1>
          <p>欢迎使用{{ settings.title }}系统</p>
          <ValidationProvider tag="div" rules="required" name="loginForm.username" class="username-container" v-slot="{ errors }">
            <label>用户名</label>
            <div class="login-input">
              <InputText v-model="loginForm.username" placeholder="请输入用户名" />
              <small class="p-invalid">{{ errors[0] }}</small>
            </div>
          </ValidationProvider>
          <ValidationProvider tag="div" rules="required" name="loginForm.password" class="password-container" v-slot="{ errors }" >
            <label>密码</label>
            <div class="login-input">
              <InputText v-model="loginForm.password" type="password" placeholder="请输入密码" />
              <small class="p-invalid">{{ errors[0] }}</small>
            </div>
          </ValidationProvider>
          <div class="forgetpassword-container">
            <a href="#" class="forget-password">忘记密码?</a>
          </div>
          <div>
            <Button type="submit" label="登录" />
          </div>
        </form>
      </ValidationObserver>
    </div>
  </body>
</template>

<script>
import VueRouter from 'vue-router'
import Logo from '@/components/Logo/index.vue'
import settings from '@/settings'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

const { isNavigationFailure, NavigationFailureType } = VueRouter

export default {
  name: 'Login',
  components: {
    Logo,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    this.settings = settings
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  unmounted() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.loading = true
      this.$store.dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery }).catch((e) => {
            if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
              Promise.reject(e)
            }
          })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style scoped>
</style>
